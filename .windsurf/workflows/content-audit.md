---
description: Four-Lens Content Project Audit Checklist — use selectively when building, reviewing, or auditing content pages
auto_execution_mode: 3
---

# Four-Lens Content Project Audit Checklist

Load only the sections needed for the user's request.

---

## 1. User Lens

**Goal:** A real visitor can complete the job that brought them to the page.

### Core checks

- The page answers one concrete user question or job.
- The top section gives a direct answer before background explanation.
- The page provides a next action: check, compare, decide, troubleshoot, contact, update, or continue reading.
- Navigation reflects user tasks, not internal content taxonomy only.
- The page avoids vague "learn more" paths where the user needs a decision.
- Tables, checklists, calculators, filters, matrices, or static decision tools exist where they reduce user work.
- Safety, eligibility, limitations, and uncertainty are visible when wrong action could cause harm.
- Mobile layout keeps headings, controls, tables, cards, and CTA text readable without overlap.
- The page does not claim first-hand testing, official status, or current availability unless evidence supports it.
- Trust paths exist: About, methodology, editorial policy, contact/correction, privacy, terms.

### Strong page signals

- "Short answer" or equivalent visible near the top.
- Requirements table or decision matrix for compatibility topics.
- Troubleshooting order that avoids destructive or risky steps first.
- "Confirmed vs possible" separation for rollout and product availability topics.
- Clear dates that reflect meaningful updates, not fake freshness.

### Accessibility & interaction (P0–P1 supplement)

- Color contrast meets WCAG AA: 4.5:1 for body text, 3:1 for large text and UI components.
- The page is fully usable with keyboard-only navigation; focus-visible outlines are present.
- Screen-reader landmarks, heading hierarchy, and alt text convey page structure and meaning.
- Interactive controls meet minimum touch target size (44 × 44 CSS px).
- Hover-only interactions have touch/keyboard equivalents.

### Empty states & edge cases (P1–P2 supplement)

- Tools, checkers, and filters show a helpful message when there is no result, not a blank screen.
- Content older than the defined review threshold shows a visible staleness warning or review flag.
- Page bottom provides an exit path: back to hub, related pages, or site-wide navigation.

---

## 2. Google Crawler & Audit Lens

**Goal:** Googlebot can find, fetch, parse, canonicalize, and understand the intended public page.

### Core checks

- Public pages return HTTP 200 in production.
- Robots.txt does not block intended indexable pages.
- Sitemap contains canonical indexable URLs and matches the deployed host and slash policy.
- Canonical tags are absolute, stable, and point to the preferred URL.
- Internal links use crawlable `<a href>` links for key routes.
- Main content is present in generated HTML or renderable without fragile client-only behavior.
- Each indexable page has a unique title, meta description, H1, visible body, and canonical URL.
- Structured data is JSON-LD, valid, representative of visible page content, and not misleading.
- Article dates, FAQ content, breadcrumbs, images, author/publisher, and mainEntityOfPage match visible content.
- No accidental noindex, X-Robots-Tag, duplicate canonical, broken sitemap path, soft 404, or redirect loop.
- Images have stable URLs, reasonable size, dimensions where practical, and useful alt text when informative.
- Build output is checked directly for search-visible truth.

### Performance & indexing signals (P1–P2; P0 only when main content is blocked)

- Core Web Vitals targets: LCP < 2.5 s, INP < 200 ms, CLS < 0.1. CWV is a ranking signal, not an indexing gate. Escalate to P0 only when poor performance makes main content invisible or unusable (e.g., layout shift hides the answer, LCP asset never loads).
- Mobile rendering delivers the same content as desktop (mobile-first indexing).
- Sitemap `<lastmod>` reflects real content change dates, not build timestamps.
- No orphan pages: every indexable page has at least one internal link pointing to it.
- No redirect chains deeper than one hop; trailing-slash policy is consistent site-wide.
- HTTPS enforced; no mixed content warnings.

### Discovery & feeds (P2 supplement)

- When the project publishes updates, articles, or changelog-style content, an RSS/Atom feed exists and is discoverable via `<link rel="alternate" type="application/rss+xml">`. Not required for purely static reference sites.
- Staging/preview environments use noindex or auth; robots.txt and canonical do not leak to production.

### Useful Google references

- Helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Crawling and indexing: https://developers.google.com/search/docs/crawling-indexing
- Technical requirements: https://developers.google.com/search/docs/essentials/technical
- SEO starter guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Structured data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies

---

## 3. Product Manager Lens

**Goal:** The content site behaves like a coherent public product.

### Core checks

- The site has a narrow product promise and avoids topic drift.
- Homepage routes users to task paths, not just recent articles.
- Hubs organize decisions and workflows, not only keyword clusters.
- Content types have clear jobs: hub, how-to, troubleshooting, compatibility, comparison, command library, update tracker, policy, contact.
- The site has an operating model for updates, corrections, source changes, and page retirement.
- Trust pages explain who publishes the content, how claims are checked, and what the site is not.
- Monetization does not undermine user trust or layout stability.
- Data structures support page-specific judgment rather than generic template output.
- The product can grow without mass-producing near-duplicate pages.
- Success metrics are tied to useful pages: indexed pages, impressions, clicks, pages with query data, updated pages, AdSense approval, and search-visible quality.

### Strong product signals

- Compatibility checker or decision hub for ambiguous user paths.
- Update tracker that changes guide pages first, news summaries second.
- Source confidence labels and correction intake.
- Explicit scope exclusions that prevent low-quality feature creep.

### Lifecycle & operations (P1 supplement)

- Content review cadence is defined; pages not updated beyond threshold are flagged automatically.
- Correction intake has a defined response path and turnaround target.
- A pre-publish QA gate checks canonical, schema, mobile rendering, and internal links before deploy.

### Reliability (P2–P3 supplement)

- Analytics events (GA4, GSC) are verified firing in production, not just configured. For early-stage or pre-launch projects, treat as recommended rather than blocking.
- The site can roll back to the last known-good deploy within minutes.
- Competitive SERP landscape is monitored for core topics.

---

## 4. SEO Lens

**Goal:** Each page deserves to exist in search because it satisfies intent better than a generic result.

### Core checks

- The target query maps to one dominant search intent.
- The page provides information gain beyond official docs and existing SERP summaries.
- The content is not a thin rewrite, listicle shell, or keyword-swapped template.
- Page titles and H1s are descriptive, non-clickbait, and aligned with the content.
- Related pages have distinct purposes and do not cannibalize each other.
- Internal links create useful topical paths and reinforce hubs.
- Dates reflect real changes.
- "Best", "vs", "requirements", and "not working" pages include evidence, decision criteria, and user-specific next steps.
- Future/status pages do not imply unconfirmed products exist.
- The site avoids scaled content abuse: many pages with the same structure, same claims, and only swapped entities.
- E-E-A-T is supported through sourcing, expertise signals, methodology, author/site background, correction paths, and transparent limitations.

### High-risk patterns

- Dozens of brand/city/model pages with identical text.
- Ranking pages that only summarize product websites.
- "Latest" pages without current source verification.
- Schema that marks up content hidden from users.
- Fake review/testing language.
- A page that forces users back to Google to finish the task.

### AI search & SERP features (P1 supplement)

- The page offers value that an AI Overview cannot fully replicate: decision tools, interactive tables, personalized paths, or unique editorial judgment. First principle: the user can complete their task faster here than elsewhere. Do not add complexity solely to resist AI extraction.
- Key answer blocks are structured for featured snippet eligibility (paragraph ≤ 50 words, list, or table).
- FAQ content aligns with observed People Also Ask queries for the target topic.
- Search appearance is monitored in GSC: title rewrites, description usage, rich result display rate.

### Content health (P1–P2 supplement)

- Pages with declining impressions or clicks are flagged for content refresh.
- Core topics have complete entity coverage forming a topical cluster, not isolated pages.
- Images use semantic file names, modern formats (WebP/AVIF), and are included in image sitemap if valuable.

---

## 5. Cross-Cutting Principles

These apply across all four lenses and should be checked on every project.

### Performance budget (P0)

- Total page weight budget is defined (HTML + CSS + fonts + images + JS).
- Fonts use `display=swap` and are subset or limited to required weights.
- Images are lazy-loaded below the fold; hero/LCP image is eagerly loaded with fetchpriority.
- No render-blocking third-party script loads before main content.

### Accessibility (P0–P1)

- Heading hierarchy is sequential (h1 → h2 → h3), no skipped levels.
- All form inputs have associated labels.
- Color is not the sole means of conveying information (icons, text labels, patterns).
- Skip-to-content link exists and works.

### Security & environment (P0)

- API keys, tokens, and secrets are in environment variables, never in client bundle.
- Staging and production differ only by env vars; no hardcoded host leaks.
- CSP, X-Frame-Options, or equivalent headers are present where applicable.

### AI content & attribution (P2)

- If AI-assisted writing is used, the content is editorially reviewed and factually verified.
- Quoted or paraphrased official documentation includes source attribution.
- No content implies first-hand experience that does not exist.

### Multi-environment consistency (P2)

- robots.txt, canonical, and schema are verified in production build output, not just dev.
- Preview/staging deploys do not accidentally become indexable.

---

## Priority Guide

| Priority | Scope |
|----------|-------|
| **P0** | Indexing/crawl block (robots, noindex, broken sitemap), wrong canonical, main content not renderable, HTTPS failure, misleading structured data, accessibility hard failures (no keyboard access, contrast below 3:1), unsupported safety-sensitive claim, deceptive trust signal, secrets in client bundle, CWV so poor that main content is invisible or unusable. |
| **P1** | Intent not satisfied, thin/duplicate content, high template risk, missing evidence for core claim, broken primary path, AI Overview resilience gap, content decay undetected, no pre-publish QA gate, no correction response path, CWV not meeting targets (LCP/INP/CLS), mobile-first content mismatch, orphan indexable pages. |
| **P2** | Weak mobile UX, missing schema opportunity, weak snippets, unclear navigation, accessibility polish, image SEO, CWV minor issues, analytics verification, rollback capability, staging leak risk, AI content disclosure, RSS feed missing for update-style sites. |
| **P3** | Better internal links, monitoring dashboards, future content roadmap, editorial tooling, competitive tracking, PAA alignment, analytics for early-stage projects, nice-to-have polish. |
