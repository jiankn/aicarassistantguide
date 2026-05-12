import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const redditSources = [
  { subreddit: 'CarPlay', label: 'r/CarPlay', platform: 'carplay', broad: false },
  { subreddit: 'AndroidAuto', label: 'r/AndroidAuto', platform: 'android-auto', broad: false },
  { subreddit: 'Cadillac', label: 'r/Cadillac', platform: 'google-built-in', broad: true },
  { subreddit: 'Polestar', label: 'r/Polestar', platform: 'google-built-in', broad: true },
  { subreddit: 'CarPlayHelp', label: 'r/CarPlayHelp', platform: 'carplay', broad: false },
  { subreddit: 'Volvo', label: 'r/Volvo', platform: 'google-built-in', broad: true },
  { subreddit: 'electricvehicles', label: 'r/electricvehicles', platform: 'unknown', broad: true }
];

const officialSources = [
  {
    label: 'GM News',
    url: 'https://news.gm.com/',
    terms: ['gemini', 'google built-in', 'android auto', 'carplay']
  },
  {
    label: 'Polestar News',
    url: 'https://www.polestar.com/news/',
    terms: ['gemini', 'google built-in', 'android auto']
  },
  {
    label: 'OpenAI Help',
    url: 'https://help.openai.com/',
    terms: ['chatgpt', 'carplay', 'voice']
  },
  {
    label: 'Google Android Blog',
    url: 'https://blog.google/products/android/',
    terms: ['gemini', 'android auto', 'cars', 'google built-in']
  }
];

const manualChecks = [
  {
    label: 'X search: ChatGPT CarPlay',
    query: '"chatgpt carplay"'
  },
  {
    label: 'X search: Gemini car',
    query: '("gemini car" OR "gemini in car")'
  },
  {
    label: 'X search: Google built-in',
    query: '"google built-in"'
  }
];

const keywords = [
  'gemini',
  'chatgpt',
  'carplay',
  'android auto',
  'google built-in',
  'google built in',
  'google assistant',
  'siri',
  'voice assistant',
  'prompt',
  'rollout',
  'update',
  'not showing',
  'disconnect',
  'handsfree',
  'hands-free'
];

const firstHandSignals = [
  'i have',
  'i got',
  'i see',
  'my car',
  'my vehicle',
  'my phone',
  'my iphone',
  'my android',
  'still no',
  'not showing',
  'showed up',
  'works',
  'working',
  'does not work',
  "doesn't work",
  'fixed',
  'resolved'
];

const topicalKeywords = [
  'gemini',
  'chatgpt',
  'carplay',
  'android auto',
  'google built-in',
  'google built in',
  'google assistant',
  'siri',
  'voice assistant',
  'assistant',
  'prompt',
  'not showing',
  'disconnect'
];

const brandSignals = [
  { brand: 'Cadillac', pattern: /\b(cadillac|lyriq|escalade|ct4|ct5|xt4|xt5|xt6)\b/i },
  { brand: 'Chevrolet', pattern: /\b(chevrolet|chevy|silverado|equinox|blazer|traverse|tahoe|suburban)\b/i },
  { brand: 'GMC', pattern: /\b(gmc|sierra|yukon|hummer ev|terrain|acadia)\b/i },
  { brand: 'Buick', pattern: /\b(buick|enclave|encore|envision)\b/i },
  { brand: 'Polestar', pattern: /\b(polestar|polestar 2|polestar 3|polestar 4|polestar 5)\b/i },
  { brand: 'Volvo', pattern: /\b(volvo|xc40|xc60|xc90|ex30|ex90|c40|ec40|ex40)\b/i },
  { brand: 'Honda', pattern: /\b(honda|passport|accord|civic|cr-v|crv)\b/i },
  { brand: 'Ford', pattern: /\b(ford|f-150|f150|mustang mach-e|mach-e|explorer)\b/i },
  { brand: 'Toyota', pattern: /\b(toyota|rav4|camry|tacoma|corolla|highlander)\b/i },
  { brand: 'Tesla', pattern: /\b(tesla|model 3|model y|model s|model x)\b/i }
];

const modelPattern = /\b(lyriq|escalade|silverado|sierra|yukon|hummer ev|polestar [2345]|xc40|xc60|xc90|ex30|ex90|passport|f-150|f150|rav4|camry|model [3ysx])\b/i;
const yearPattern = /\b(20[1-2][0-9]|2030)\b/;

const args = parseArgs(process.argv.slice(2));
const now = new Date();
const weekOf = args.weekOf || toISODate(previousCompletedMonday(now));
const weekEnd = args.weekEnd || toISODate(addDays(parseISODate(weekOf), 6));
const publishedAt = args.publishedAt || toISODate(now);
const limit = Number(args.limit || 25);
const outputRoot = path.resolve(args.output || 'tmp/weekly-candidates', weekOf);
const dryRun = args.dryRun === true;

const dateRange = {
  start: parseISODate(weekOf),
  end: endOfDay(parseISODate(weekEnd))
};

const run = {
  weekOf,
  weekEnd,
  publishedAt,
  generatedAt: new Date().toISOString(),
  sourcePolicy:
    'Candidates are for review only. Do not publish without opening sourceUrl and verifying firsthand context, exact quote text, and vehicle details.',
  candidates: [],
  sourceErrors: [],
  manualChecks: manualChecks.map((item) => ({
    ...item,
    url: buildXSearchUrl(item.query, weekOf, addDaysISO(weekEnd, 1))
  }))
};

const redditResults = await Promise.all(redditSources.map((source) => collectReddit(source)));
for (const { candidates, error } of redditResults) {
  if (error) run.sourceErrors.push(error);
  run.candidates.push(...candidates);
}

if (args.official !== false) {
  const officialResults = await Promise.all(officialSources.map((source) => collectOfficial(source)));
  for (const { candidates, error } of officialResults) {
    if (error) run.sourceErrors.push(error);
    run.candidates.push(...candidates);
  }
}

run.candidates = dedupeCandidates(run.candidates)
  .sort((a, b) => b.score - a.score || b.comments - a.comments || b.upvotes - a.upvotes)
  .slice(0, Number(args.maxCandidates || 80));

if (!dryRun) {
  await fs.mkdir(outputRoot, { recursive: true });
  await fs.writeFile(path.join(outputRoot, 'candidates.json'), `${JSON.stringify(run, null, 2)}\n`);
  await fs.writeFile(path.join(outputRoot, 'review.md'), renderReview(run));
  await fs.writeFile(path.join(outputRoot, 'selection.json'), `${JSON.stringify(renderSelectionTemplate(run), null, 2)}\n`);
}

console.log(`Weekly candidate collection complete.`);
console.log(`Week: ${weekOf} to ${weekEnd}`);
console.log(`Candidates: ${run.candidates.length}`);
console.log(`Source errors: ${run.sourceErrors.length}`);
if (!dryRun) {
  console.log(`Review file: ${path.join(outputRoot, 'review.md')}`);
  console.log(`Selection file: ${path.join(outputRoot, 'selection.json')}`);
}

async function collectReddit(source) {
  const url = `https://www.reddit.com/r/${source.subreddit}/top.json?t=week&limit=${limit}&raw_json=1`;
  try {
    const json = await fetchJson(url);
    const posts = Array.isArray(json?.data?.children) ? json.data.children : [];
    const candidates = posts
      .map((child) => child?.data)
      .filter(Boolean)
      .filter((post) => isInRange(new Date(post.created_utc * 1000)))
      .map((post) => redditPostToCandidate(post, source))
      .filter((candidate) => {
        if (source.broad && candidate.topicSignals.length === 0) return false;
        return candidate.score >= 2 || candidate.signals.length >= 2;
      });

    return { candidates };
  } catch (error) {
    return {
      candidates: [],
      error: {
        source: source.label,
        url,
        message: error.message
      }
    };
  }
}

async function collectOfficial(source) {
  try {
    const html = await fetchText(source.url);
    const links = extractLinks(html, source.url)
      .map((link) => ({ ...link, score: scoreOfficialLink(link, source.terms) }))
      .filter((link) => link.score > 0)
      .slice(0, 12);

    return {
      candidates: links.map((link) => ({
        id: `official-${slugify(source.label)}-${shortHash(link.url)}`,
        type: 'official-update',
        date: null,
        source: 'official',
        sourceLabel: source.label,
        sourceUrl: link.url,
        title: link.text,
        excerpt: '',
        upvotes: 0,
        comments: 0,
        score: link.score,
        signals: matchedTerms(`${link.text} ${link.url}`, source.terms),
        suggested: {
          summary: `Official source candidate from ${source.label}. Open the source and verify whether it changed during ${weekOf} to ${weekEnd}.`,
          relatedHref: '/update-tracker/'
        },
        reviewNotes: [
          'Official-source candidate. Verify date and substance before adding to updates.ts or weeklyReports.ts.',
          'This script does not infer official update dates from generic news index pages.'
        ]
      }))
    };
  } catch (error) {
    return {
      candidates: [],
      error: {
        source: source.label,
        url: source.url,
        message: error.message
      }
    };
  }
}

function redditPostToCandidate(post, source) {
  const title = cleanText(post.title || '');
  const excerpt = cleanText(post.selftext || '').slice(0, 600);
  const text = `${title} ${excerpt}`;
  const detectedBrand = detectBrand(text);
  const detectedModel = detectModel(text);
  const detectedYear = detectYear(text);
  const platform = detectPlatform(text, source.platform);
  const category = detectCategory(text);
  const signals = [
    ...matchedTerms(text, keywords),
    ...matchedTerms(text, firstHandSignals).map((signal) => `first-hand: ${signal}`)
  ];
  const topicSignals = matchedTerms(text, topicalKeywords);
  const sourceUrl = `https://www.reddit.com${post.permalink || ''}`;
  const postDate = toISODate(new Date(post.created_utc * 1000));
  const score = scoreCandidate(text, post, detectedBrand, detectedModel);
  const quoteCandidate = pickQuoteCandidate(title, excerpt);

  return {
    id: `reddit-${source.subreddit.toLowerCase()}-${post.id}`,
    type: 'driver-report',
    date: postDate,
    source: 'reddit',
    sourceLabel: source.label,
    sourceUrl,
    title,
    excerpt,
    upvotes: Number(post.ups || post.score || 0),
    comments: Number(post.num_comments || 0),
    score,
    topicSignals,
    signals: [...new Set(signals)].slice(0, 12),
    suggested: {
      driverReportId: `r-${postDate}-${slugify(detectedBrand || source.subreddit)}-${slugify(title).slice(0, 36)}`,
      brand: detectedBrand || 'Unknown',
      model: detectedModel,
      year: detectedYear,
      platform,
      category,
      summary: buildSummary(detectedBrand, detectedModel, detectedYear, platform, title),
      quote: quoteCandidate,
      resolved: /resolved|fixed|solved|working now/i.test(text),
      relatedHref: relatedHrefFor(platform, category)
    },
    reviewNotes: [
      'Open the source before accepting. Confirm this is first-hand and includes enough vehicle context.',
      'Only keep quote if it is exact source text and still under 280 characters.'
    ]
  };
}

function scoreCandidate(text, post, detectedBrand, detectedModel) {
  const lower = text.toLowerCase();
  let score = 0;
  for (const term of keywords) if (lower.includes(term)) score += 1;
  for (const term of firstHandSignals) if (lower.includes(term)) score += 2;
  if (detectedBrand) score += 2;
  if (detectedModel) score += 2;
  if (post.num_comments > 0) score += 1;
  if (post.ups >= 5) score += 1;
  if (/help|issue|problem|not showing|disconnect|prompt/i.test(text)) score += 1;
  return score;
}

function scoreOfficialLink(link, terms) {
  const lower = `${link.text} ${link.url}`.toLowerCase();
  return terms.reduce((sum, term) => sum + (lower.includes(term) ? 1 : 0), 0);
}

function matchedTerms(text, terms) {
  const lower = text.toLowerCase();
  return terms.filter((term) => lower.includes(term.toLowerCase()));
}

function detectBrand(text) {
  return brandSignals.find((item) => item.pattern.test(text))?.brand;
}

function detectModel(text) {
  const match = text.match(modelPattern);
  return match ? normalizeModel(match[1]) : undefined;
}

function detectYear(text) {
  const match = text.match(yearPattern);
  return match ? Number(match[1]) : undefined;
}

function detectPlatform(text, fallback) {
  if (/android auto/i.test(text)) return 'android-auto';
  if (/carplay|iphone|siri|chatgpt/i.test(text)) return 'carplay';
  if (/google built[- ]in|gemini|gm|cadillac|polestar|volvo/i.test(text)) return 'google-built-in';
  return fallback || 'unknown';
}

function detectCategory(text) {
  if (/not showing|missing|no prompt|still no|does not appear|doesn't appear|cannot find|can't find/i.test(text)) {
    return 'not-showing';
  }
  if (/disconnect|connection|pairing|paired|bluetooth|usb/i.test(text)) return 'connection';
  if (/works|working|showed up|got the prompt|received|available now|live/i.test(text)) {
    return 'rollout-confirmed-working';
  }
  if (/waiting|rollout|eligible/i.test(text)) return 'rollout-pending';
  if (/voice|siri|assistant|microphone|mic/i.test(text)) return 'voice-broken';
  if (/workaround|fixed|solved|resolved/i.test(text)) return 'workaround-shared';
  return 'feature-missing';
}

function relatedHrefFor(platform, category) {
  if (platform === 'google-built-in' && category === 'not-showing') return '/why-is-gemini-not-showing-in-my-gm-car/';
  if (platform === 'google-built-in') return '/gemini-in-cars/';
  if (platform === 'android-auto') return '/does-gemini-work-with-android-auto/';
  if (platform === 'carplay' && category === 'not-showing') return '/chatgpt-carplay-not-showing/';
  if (platform === 'carplay') return '/chatgpt-carplay/';
  return '/update-tracker/';
}

function buildSummary(brand, model, year, platform, title) {
  const vehicle = [brand, model, year ? `(${year})` : ''].filter(Boolean).join(' ') || 'Driver';
  const platformLabel = platform === 'unknown' ? 'car assistant setup' : platform.replaceAll('-', ' ');
  return `${vehicle} report candidate related to ${platformLabel}: ${sentenceCase(title)} Verify the source before publishing.`;
}

function pickQuoteCandidate(title, excerpt) {
  const source = excerpt || title;
  if (!source) return undefined;
  const compact = cleanText(source);
  if (compact.length <= 280) return compact;
  return undefined;
}

function extractLinks(html, baseUrl) {
  const normalized = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ');
  const links = [];
  for (const match of normalized.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const href = match[1];
    const text = cleanText(match[2].replace(/<[^>]+>/g, ' '));
    if (!text || text.length < 8) continue;
    try {
      links.push({ text, url: new URL(href, baseUrl).toString() });
    } catch {
      // Ignore malformed links.
    }
  }
  return dedupeBy(links, (link) => `${link.text}|${link.url}`);
}

async function fetchJson(url) {
  const text = await fetchRaw(url, 'application/json');
  return JSON.parse(text);
}

async function fetchText(url) {
  return fetchRaw(url, 'text/html,application/xhtml+xml');
}

async function fetchRaw(url, accept) {
  if (process.platform === 'win32' && /(^|\.)reddit\.com\//i.test(new URL(url).hostname)) {
    return fetchRawWithPowerShell(url, accept);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Number(args.fetchTimeoutMs || 8000));
  const response = await fetch(url, {
    signal: controller.signal,
    headers: {
      'Accept': accept,
      'User-Agent': 'AI-Car-Assistant-Guide-Weekly-Candidate-Collector'
    }
  }).catch(async (error) => {
    if (process.platform !== 'win32') throw error;
    return {
      ok: true,
      text: async () => fetchRawWithPowerShell(url, accept)
    };
  }).finally(() => {
    clearTimeout(timeout);
  });

  if (!response.ok) {
    if (process.platform === 'win32') {
      try {
        return await fetchRawWithPowerShell(url, accept);
      } catch {
        // Keep the original HTTP error because it is more useful.
      }
    }
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }
  return response.text();
}

async function fetchRawWithPowerShell(url, accept) {
  const script = [
    "$ProgressPreference = 'SilentlyContinue'",
    '[Console]::OutputEncoding = [System.Text.Encoding]::UTF8',
    `$headers = @{ 'User-Agent' = 'AI-Car-Assistant-Guide-Weekly-Candidate-Collector'; 'Accept' = '${escapePowerShellSingleQuoted(accept)}' }`,
    `$response = Invoke-WebRequest -Uri '${escapePowerShellSingleQuoted(url)}' -Headers $headers -TimeoutSec 12 -ErrorAction Stop`,
    '$response.Content'
  ].join('; ');
  const { stdout } = await execFileAsync('pwsh.exe', ['-NoProfile', '-Command', script], {
    timeout: Number(args.powerShellTimeoutMs || 16000),
    maxBuffer: 30 * 1024 * 1024
  });
  return stdout;
}

function escapePowerShellSingleQuoted(value) {
  return String(value).replace(/'/g, "''");
}

function renderReview(data) {
  const lines = [];
  lines.push(`# Weekly candidate review: ${data.weekOf} to ${data.weekEnd}`);
  lines.push('');
  lines.push(`Generated: ${data.generatedAt}`);
  lines.push('');
  lines.push('## Review rule');
  lines.push('');
  lines.push('This file is a candidate list only. Do not publish any entry until you open the source URL and verify firsthand context, vehicle details, exact quote text, and date.');
  lines.push('');
  lines.push('## How to decide');
  lines.push('');
  lines.push('1. Open each promising source URL.');
  lines.push('2. Keep only firsthand driver reports or dated official updates.');
  lines.push('3. Put selected IDs in `selection.json`, or tell Codex the IDs you want to publish.');
  lines.push('4. After selection, update `src/data/driverReports.ts`, `src/data/weeklyReports.ts`, and `src/data/updates.ts` only for verified items.');
  lines.push('');
  lines.push('## Manual checks still required');
  lines.push('');
  for (const item of data.manualChecks) {
    lines.push(`- [ ] ${item.label}: ${item.url}`);
  }
  lines.push('');

  if (data.sourceErrors.length > 0) {
    lines.push('## Source errors');
    lines.push('');
    for (const error of data.sourceErrors) {
      lines.push(`- ${error.source}: ${error.message} (${error.url})`);
    }
    lines.push('');
  }

  lines.push('## Shortlist table');
  lines.push('');
  lines.push('| Select | ID | Type | Date | Source | Score | Title |');
  lines.push('|---|---|---|---|---|---:|---|');
  for (const candidate of data.candidates) {
    lines.push(
      `| [ ] | \`${candidate.id}\` | ${candidate.type} | ${candidate.date || 'verify'} | ${candidate.sourceLabel} | ${candidate.score} | ${escapeTable(candidate.title)} |`
    );
  }
  lines.push('');

  const groups = groupBy(data.candidates, (candidate) => candidate.type);
  for (const [type, candidates] of Object.entries(groups)) {
    lines.push(`## ${type === 'driver-report' ? 'Driver report candidates' : 'Official update candidates'}`);
    lines.push('');
    for (const candidate of candidates) {
      lines.push(`### ${candidate.id}`);
      lines.push('');
      lines.push(`- Source: [${candidate.sourceLabel}](${candidate.sourceUrl})`);
      lines.push(`- Date: ${candidate.date || 'verify manually'}`);
      lines.push(`- Score: ${candidate.score}`);
      lines.push(`- Signals: ${candidate.signals.length ? candidate.signals.join(', ') : 'none'}`);
      lines.push(`- Title: ${candidate.title}`);
      if (candidate.excerpt) lines.push(`- Excerpt: ${candidate.excerpt}`);
      if (candidate.upvotes || candidate.comments) {
        lines.push(`- Reddit signal: ${candidate.upvotes} upvotes, ${candidate.comments} comments`);
      }
      lines.push('');
      if (candidate.type === 'driver-report') {
        lines.push('Suggested `driverReports.ts` draft after verification:');
        lines.push('');
        lines.push('```ts');
        lines.push(renderDriverReportDraft(candidate));
        lines.push('```');
        lines.push('');
      }
      for (const note of candidate.reviewNotes) lines.push(`- Review note: ${note}`);
      lines.push('');
    }
  }

  return `${lines.join('\n')}\n`;
}

function renderDriverReportDraft(candidate) {
  const suggested = candidate.suggested;
  const lines = [
    '{',
    `  id: '${suggested.driverReportId}',`,
    `  date: '${candidate.date}',`,
    `  collectedOn: '${publishedAt}',`,
    `  source: 'reddit',`,
    `  sourceUrl: '${candidate.sourceUrl}',`,
    `  sourceLabel: '${candidate.sourceLabel}',`,
    `  brand: '${escapeString(suggested.brand)}',`
  ];
  if (suggested.model) lines.push(`  model: '${escapeString(suggested.model)}',`);
  if (suggested.year) lines.push(`  year: ${suggested.year},`);
  lines.push(`  platform: '${suggested.platform}',`);
  lines.push(`  category: '${suggested.category}',`);
  lines.push(`  summary: '${escapeString(suggested.summary)}',`);
  if (suggested.quote) lines.push(`  quote: '${escapeString(suggested.quote)}',`);
  lines.push(`  resolved: ${suggested.resolved},`);
  lines.push(`  relatedHref: '${suggested.relatedHref}'`);
  lines.push('}');
  return lines.join('\n');
}

function renderSelectionTemplate(data) {
  return {
    weekOf: data.weekOf,
    weekEnd: data.weekEnd,
    publishedAt: data.publishedAt,
    status: 'pending-editor-selection',
    selectedCandidateIds: [],
    rejectedCandidateIds: [],
    weeklyReportDraft: {
      number: null,
      title: '',
      summary: '',
      watching: []
    },
    notes: 'Fill selectedCandidateIds after reviewing source URLs. Do not publish candidates directly from automated scoring.'
  };
}

function dedupeCandidates(candidates) {
  return dedupeBy(candidates, (candidate) => candidate.sourceUrl || candidate.id);
}

function dedupeBy(items, keyFn) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = keyFn(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

function groupBy(items, keyFn) {
  return items.reduce((groups, item) => {
    const key = keyFn(item);
    groups[key] ||= [];
    groups[key].push(item);
    return groups;
  }, {});
}

function parseArgs(argv) {
  const parsed = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) continue;
    const [rawKey, inlineValue] = arg.slice(2).split('=');
    const key = rawKey.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    if (inlineValue !== undefined) {
      parsed[key] = parseValue(inlineValue);
    } else if (argv[i + 1] && !argv[i + 1].startsWith('--')) {
      parsed[key] = parseValue(argv[i + 1]);
      i += 1;
    } else {
      parsed[key] = true;
    }
  }
  return parsed;
}

function parseValue(value) {
  if (value === 'false') return false;
  if (value === 'true') return true;
  return value;
}

function isInRange(date) {
  return date >= dateRange.start && date <= dateRange.end;
}

function previousCompletedMonday(date) {
  const utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const daysSinceMonday = (utcDate.getUTCDay() + 6) % 7;
  return addDays(utcDate, -daysSinceMonday - 7);
}

function parseISODate(value) {
  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid date: ${value}`);
  return date;
}

function endOfDay(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 23, 59, 59, 999));
}

function addDays(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function addDaysISO(value, days) {
  return toISODate(addDays(parseISODate(value), days));
}

function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

function buildXSearchUrl(query, since, until) {
  const q = `${query} since:${since} until:${until}`;
  return `https://x.com/search?q=${encodeURIComponent(q)}&src=typed_query&f=live`;
}

function cleanText(value) {
  return String(value || '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeModel(value) {
  return value
    .replace(/\bf150\b/i, 'F-150')
    .replace(/\brav4\b/i, 'RAV4')
    .replace(/\bcrv\b/i, 'CR-V')
    .replace(/\b([a-z])/g, (match) => match.toUpperCase());
}

function sentenceCase(value) {
  if (!value) return '';
  return `${value[0].toUpperCase()}${value.slice(1)}`.replace(/[.!?]?$/, '.');
}

function slugify(value) {
  return String(value || 'unknown')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'unknown';
}

function shortHash(value) {
  let hash = 5381;
  for (let i = 0; i < value.length; i += 1) {
    hash = ((hash << 5) + hash) ^ value.charCodeAt(i);
  }
  return Math.abs(hash >>> 0).toString(36);
}

function escapeString(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function escapeTable(value) {
  return String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}
