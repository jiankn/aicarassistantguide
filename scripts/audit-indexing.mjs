import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const site = 'https://aicarassistantguide.com';
const noindexRoutes = new Set(['/contact/', '/privacy-policy/', '/terms/']);
const minIncomingLinks = 2;
const maxSimilarityScore = 0.68;
const stopWords = new Set([
  'assistant',
  'guide',
  'check',
  'vehicle',
  'vehicles',
  'drivers',
  'while',
  'with',
  'your',
  'this',
  'that',
  'what',
  'when',
  'from',
  'page',
  'cars',
  'car'
]);

const failures = [];
const warnings = [];

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function routeForIndexHtml(file) {
  const relDir = path.relative(dist, path.dirname(file)).replaceAll(path.sep, '/');
  return relDir === '' ? '/' : `/${relDir}/`;
}

function expectedCanonical(route) {
  return new URL(route, site).toString();
}

function normalizeRoute(rawUrl, fromRoute) {
  if (!rawUrl || rawUrl.startsWith('#') || rawUrl.startsWith('mailto:') || rawUrl.startsWith('tel:') || rawUrl.startsWith('javascript:')) {
    return null;
  }

  let url;
  try {
    url = new URL(rawUrl, `${site}${fromRoute}`);
  } catch {
    return null;
  }

  if (url.hostname !== new URL(site).hostname) return null;
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === '/rss.xml' || pathname === '/favicon.svg') return null;
  if (/\.[a-z0-9]+$/i.test(pathname)) return { asset: pathname };
  if (!pathname.endsWith('/')) pathname += '/';
  return { route: pathname };
}

function visibleWords(html) {
  const body = html.match(/<main[\s\S]*?<\/main>/i)?.[0] || html;
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stopWords.has(word));
}

if (!fs.existsSync(dist)) {
  fail('dist/ does not exist. Run npm.cmd run build first.');
} else {
  const allFiles = walk(dist);
  const htmlFiles = allFiles.filter((file) => path.basename(file) === 'index.html');
  const assetPaths = new Set(allFiles.map((file) => `/${path.relative(dist, file).replaceAll(path.sep, '/')}`));
  const routes = new Set(htmlFiles.map(routeForIndexHtml));
  const sitemapFile = path.join(dist, 'sitemap-0.xml');
  const sitemapIndexFile = path.join(dist, 'sitemap-index.xml');
  const robotsFile = path.join(dist, 'robots.txt');

  if (!fs.existsSync(robotsFile)) fail('Missing dist/robots.txt.');
  if (!fs.existsSync(sitemapIndexFile)) fail('Missing dist/sitemap-index.xml.');
  if (!fs.existsSync(sitemapFile)) fail('Missing dist/sitemap-0.xml.');

  const sitemapXml = fs.existsSync(sitemapFile) ? read(sitemapFile) : '';
  const sitemapIndexXml = fs.existsSync(sitemapIndexFile) ? read(sitemapIndexFile) : '';
  const robotsTxt = fs.existsSync(robotsFile) ? read(robotsFile) : '';
  const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const sitemapRoutes = new Set(sitemapUrls.map((url) => new URL(url).pathname));
  const lastmods = [...sitemapXml.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map((match) => match[1]);
  const incoming = new Map([...routes].map((route) => [route, 0]));
  const titles = new Map();
  const docs = [];

  if (!/Sitemap:\s*https:\/\/aicarassistantguide\.com\/sitemap-index\.xml/i.test(robotsTxt)) {
    fail('robots.txt does not point to the canonical sitemap index.');
  }

  if (!/<lastmod>/.test(sitemapIndexXml)) {
    fail('sitemap-index.xml is missing lastmod.');
  }

  if (sitemapUrls.length === 0) {
    fail('sitemap-0.xml has no loc entries.');
  }

  if (sitemapUrls.length !== lastmods.length) {
    fail(`sitemap loc count (${sitemapUrls.length}) does not match lastmod count (${lastmods.length}).`);
  }

  for (const url of sitemapUrls) {
    const route = new URL(url).pathname;
    if (!routes.has(route)) fail(`Sitemap URL has no generated HTML route: ${url}`);
    if (noindexRoutes.has(route)) fail(`Noindex utility page is still present in sitemap: ${route}`);
  }

  for (const file of htmlFiles) {
    const route = routeForIndexHtml(file);
    const html = read(file);
    const canonicalTags = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((match) => match[1]);
    const expected = expectedCanonical(route);
    const robots = html.match(/<meta name="robots" content="([^"]+)"/i)?.[1] || '';
    const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim() || '';
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1] || '';

    if (canonicalTags.length !== 1 || canonicalTags[0] !== expected) {
      fail(`Canonical mismatch on ${route}: ${canonicalTags.join(', ') || 'none'}`);
    }

    if (noindexRoutes.has(route)) {
      if (!/noindex/i.test(robots) || !/follow/i.test(robots)) fail(`Utility route ${route} should be noindex,follow.`);
    } else {
      if (/noindex/i.test(robots)) fail(`Indexable route has noindex: ${route}`);
      if (!sitemapRoutes.has(route)) fail(`Indexable route missing from sitemap: ${route}`);
    }

    if (h1Count !== 1) fail(`${route} has ${h1Count} H1 tags.`);
    if (title.length < 25 || title.length > 70) warn(`${route} title length is ${title.length}.`);
    if (description.length < 80 || description.length > 180) warn(`${route} description length is ${description.length}.`);
    if (!/rel="alternate"[^>]+application\/rss\+xml/i.test(html)) fail(`${route} missing RSS alternate link.`);
    if (!/type="application\/ld\+json"/i.test(html)) fail(`${route} missing JSON-LD.`);

    for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(match[1]);
      } catch (error) {
        fail(`${route} has invalid JSON-LD: ${error.message}`);
      }
    }

    titles.set(title, (titles.get(title) || 0) + 1);
    docs.push({ route, words: visibleWords(html) });

    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const target = normalizeRoute(match[1], route);
      if (!target) continue;
      if (target.asset && !assetPaths.has(target.asset)) fail(`${route} references missing asset ${target.asset}`);
      if (target.route && !routes.has(target.route)) fail(`${route} links to missing route ${target.route}`);
      if (target.route && routes.has(target.route) && target.route !== route) {
        incoming.set(target.route, (incoming.get(target.route) || 0) + 1);
      }
    }
  }

  for (const [title, count] of titles) {
    if (title && count > 1) fail(`Duplicate title appears ${count} times: ${title}`);
  }

  for (const [route, count] of incoming) {
    if (route !== '/' && !noindexRoutes.has(route) && count < minIncomingLinks) {
      fail(`Indexable route has only ${count} incoming internal links: ${route}`);
    }
  }

  const sitemapDocs = docs.filter((doc) => sitemapRoutes.has(doc.route));
  for (let i = 0; i < sitemapDocs.length; i += 1) {
    const a = new Set(sitemapDocs[i].words);
    for (let j = i + 1; j < sitemapDocs.length; j += 1) {
      const b = new Set(sitemapDocs[j].words);
      let overlap = 0;
      for (const word of a) if (b.has(word)) overlap += 1;
      const union = a.size + b.size - overlap;
      const score = union ? overlap / union : 0;
      if (score > maxSimilarityScore) {
        warn(`High body similarity (${score.toFixed(3)}): ${sitemapDocs[i].route} vs ${sitemapDocs[j].route}`);
      }
    }
  }

  console.log(`HTML routes: ${htmlFiles.length}`);
  console.log(`Sitemap URLs: ${sitemapUrls.length}`);
  console.log(`Sitemap lastmod entries: ${lastmods.length}`);
  console.log(`Noindex utility routes: ${[...noindexRoutes].join(', ')}`);
}

for (const message of warnings) {
  console.warn(`WARN: ${message}`);
}

for (const message of failures) {
  console.error(`FAIL: ${message}`);
}

if (failures.length > 0) {
  process.exitCode = 1;
} else {
  console.log(`Indexing audit passed with ${warnings.length} warning(s).`);
}
