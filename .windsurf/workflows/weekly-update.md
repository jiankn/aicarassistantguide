---
description: Weekly tracker update — run every Monday evening to ship a new weekly report
---

# Weekly tracker update workflow

Time budget: **45–90 minutes after candidate collection**. Quality over volume — never invent or paraphrase quotes.

This is now a human-in-the-loop workflow:

1. Collect candidates automatically.
2. Review the candidate list and choose what is worth publishing.
3. Only after that decision, edit the public data files and publish.

The collector never edits `src/data/driverReports.ts`, `src/data/weeklyReports.ts`, or `src/data/updates.ts`. It writes review files under `tmp/weekly-candidates/`, which is ignored by Git.

## 0. Set the week boundaries

- `weekOf` = the Monday of the week you are summarizing (YYYY-MM-DD).
- `weekEnd` = the Sunday of that same week (YYYY-MM-DD).
- `publishedAt` = the date you publish (usually the next Monday).

## 1. Collect public candidates automatically (~5 min)

Run:

```powershell
npm.cmd run weekly:collect -- --weekOf 2026-05-04
```

Optional flags:

```powershell
npm.cmd run weekly:collect -- --weekOf 2026-05-04 --weekEnd 2026-05-10 --publishedAt 2026-05-12 --limit 40
```

Outputs:

- `tmp/weekly-candidates/<weekOf>/review.md`
- `tmp/weekly-candidates/<weekOf>/candidates.json`
- `tmp/weekly-candidates/<weekOf>/selection.json`

Open `review.md` first. It includes Reddit candidates, official-source candidates, source errors, and manual X search links. Put selected IDs in `selection.json`, or tell Codex the candidate IDs you want to publish.

## 2. Review public sources manually (~30 min)

The collector scans these automatically where practical, but you still must open selected source URLs:

- **Reddit** (sort: top, time: week)
  - https://www.reddit.com/r/CarPlay/
  - https://www.reddit.com/r/AndroidAuto/
  - https://www.reddit.com/r/Cadillac/
  - https://www.reddit.com/r/Polestar/
  - https://www.reddit.com/r/CarPlayHelp/
  - https://www.reddit.com/r/Volvo/
  - https://www.reddit.com/r/electricvehicles/
- **X / Twitter** searches
  - `"chatgpt carplay"` past 7 days
  - `"gemini car"` OR `"gemini in car"` past 7 days
  - `"google built-in"` past 7 days
- **Owners forums** (links you have personally bookmarked; do not invent URLs)
- **Official changelogs**
  - https://news.gm.com/ (Gemini topics)
  - https://www.polestar.com/news/
  - https://help.openai.com/ (ChatGPT changelog)
  - https://blog.google/products/android/ (Android for Cars)

## 3. Filter for first-hand reports (~20 min)

Keep only posts that:

- State a vehicle (brand, ideally model, ideally year).
- Describe what the driver actually saw or did — not "I read that…".
- Have at least one comment or upvote indicating others see the same thing (optional but stronger).

Reject:

- Speculation without vehicle context.
- Affiliate / news rewrite posts.
- Posts where the driver is asking a question with no answer.

## 4. Add selected entries to driver reports (~20 min)

Edit `src/data/driverReports.ts`. For each kept post add an object:

```ts
{
  id: 'r-2026-05-13-lyriq-not-showing',
  date: '2026-05-13',
  collectedOn: '2026-05-19',
  source: 'reddit',
  sourceUrl: 'https://www.reddit.com/r/Cadillac/comments/...',
  sourceLabel: 'r/Cadillac',
  brand: 'Cadillac',
  model: 'Lyriq',
  year: 2024,
  platform: 'google-built-in',
  category: 'not-showing',
  summary: 'Driver in California reports the Gemini upgrade prompt has not appeared after the GM rollout announcement, despite Google built-in and a US English account.',
  quote: 'Still no Gemini prompt on my 2024 Lyriq, two weeks since the announcement.',
  resolved: false,
  relatedHref: '/why-is-gemini-not-showing-in-my-gm-car/'
}
```

**Hard rules:**

- `quote` must be exact and ≤280 chars. If the original is longer, do not paraphrase — drop the quote.
- `summary` is in our voice and **never** adds details the driver did not state.
- `id` must be unique. Convention: `r-YYYY-MM-DD-brand-shortdesc`.

## 5. Write the weekly report (~20 min)

Edit `src/data/weeklyReports.ts`. Append a new entry:

```ts
{
  number: 2,
  weekOf: '2026-05-18',
  weekEnd: '2026-05-24',
  publishedAt: '2026-05-25',
  title: 'Week 2: Two Lyriq drivers report Gemini prompt arriving, others still waiting',
  summary: '...',
  watching: [
    { topic: '...', reason: '...', expectedSignal: '...' }
  ],
  editorNote: '...optional'
}
```

**Title rule:** be specific and concrete. Bad: "Weekly tracker update". Good: "Two Lyriq drivers report Gemini prompt arriving, others still waiting".

**Summary rule:** 2–3 sentences, neutral voice, no hype, no editorializing about brands.

**Watching:** 1–3 items max. Each must have a concrete expected signal.

## 6. Build and verify

```powershell
npm.cmd run build
npm.cmd run audit:indexing
```

Expected:

- New static page at `/weekly/<weekOf>/index.html`.
- `update-tracker.astro` shows the new report at the top spotlight.
- `driver-reports-section` shows the new reports grouped under last 30 days.

If build fails, the most likely cause is a missing trailing comma or a duplicate `id`.

## 7. Commit

```powershell
git add src/data/driverReports.ts src/data/weeklyReports.ts
git commit -m "weekly: report #N (<weekOf> – <weekEnd>)"
git push
```

## 8. After deploy

- Wait for Cloudflare/Netlify deploy to finish.
- Spot-check `/update-tracker/` and the new `/weekly/<weekOf>/` URL in production.
- (Optional, only if you have an account) post a non-spammy comment in one of the source threads referencing your aggregate page if it adds value to that thread. Do not mass-promote.

## Reference: time budget

| Step | Minutes |
|------|---------|
| Scan sources | 30 |
| Filter | 30 |
| Add driverReports entries | 45 |
| Write weeklyReports entry | 30 |
| Build, verify, commit | 15 |
| **Total** | **~150** |

If a week takes more than 3 hours regularly, the bottleneck is usually scanning. Consider reducing the source list to the 3 highest-signal subreddits.
