# AI Car Assistant Guide — Production PRD

> Domain: **aicarassistantguide.com**  
> Version: **v1.0 Production Launch PRD**  
> Target market: **English-speaking countries, United States first**  
> Monetization: **Google AdSense Auto Ads only**  
> Deployment: **Cloudflare-first static content site**  
> Core strategy: **direct-answer pages + tool-like reference pages + human-edited AI-assisted content**

---

## Product Principle

AI Car Assistant Guide does not win by publishing more pages.

It wins by making every page work like a small utility: each page must help a driver answer one concrete question, check one compatibility condition, fix one real problem, or make one clear decision.

The site should avoid generic AI-written articles, keyword-stuffed listicles, and repeated templates. Every page must provide direct value even if it receives no Google traffic.

## 0. Executive Summary

AI Car Assistant Guide is an English content site for drivers who want to understand, enable, troubleshoot, and compare AI assistants in cars.

The first production version should focus on **Gemini in cars** and **ChatGPT in CarPlay**, with light future-facing coverage for **Claude in car / Claude CarPlay**.

The site should not be built as a generic AI news blog or AI tools directory. It should be built as a practical driver help site:

> “Can my car use this AI assistant? How do I enable it? Why is it not showing? What can I safely ask it to do while driving?”

The core SEO opportunity comes from the current wave of AI assistants entering the car interface. The site must move fast, but not through low-quality scaled pages. Every page must directly satisfy a specific search intent, provide information gain, and include user-actionable checks, tables, troubleshooting steps, and clear distinction between confirmed facts and unconfirmed assumptions.

---

## 1. Background and Strategic Rationale

### 1.1 Why this site exists now

AI assistants are moving from phones and browsers into the vehicle interface. This creates new search behavior from real drivers:

- “Why is Gemini not showing in my GM car?”
- “Does my Cadillac support Gemini?”
- “How do I use ChatGPT in CarPlay?”
- “ChatGPT CarPlay not working”
- “Can Claude work in CarPlay?”
- “Gemini vs Google Assistant in cars”
- “ChatGPT CarPlay vs Siri”

These are not abstract AI curiosity searches. They are practical, device-and-vehicle-specific searches with high troubleshooting intent.

### 1.2 Core SEO logic

This project follows the “discover trend → build fast → capture search position” model, but with stricter quality controls.

The previous hot-keyword method emphasizes:

- identify a new term early;
- build pages quickly;
- capture long-tail search before competition becomes intense;
- monetize traffic later with AdSense or matched offers.

For this project, the adaptation is:

> Move fast on new AI car assistant keywords, but publish only pages that behave like practical answer pages or mini tools, not mass-produced keyword pages.

### 1.3 Algorithm risk and content quality principle

The site must be built against the post-2026 Google content environment:

- avoid middleman summary pages;
- avoid generic “best X” listicles as the main strategy;
- avoid pages that only rewrite official announcements;
- avoid repeating one template across dozens of brand/model pages;
- avoid publishing AI drafts without human editorial judgment;
- prioritize direct answers, information gain, experience signals, and usefulness.

The editorial target is:

> Fewer pages, stronger pages, faster updates.

---

## 2. Product Positioning

### 2.1 Product name

**AI Car Assistant Guide**

### 2.2 Domain

**aicarassistantguide.com**

### 2.3 One-line positioning

**Practical guides for Gemini in cars, ChatGPT in CarPlay, Google built-in, Android Auto AI, and voice assistants on the road.**

### 2.4 User-facing promise

**We help drivers understand which AI assistants work in their cars, how to enable them, what they can do, and how to fix common setup problems.**

### 2.5 What the site is

- A practical English driver guide site.
- A troubleshooting and compatibility resource.
- A fast-updating AI car assistant knowledge base.
- A search-first, content-first AdSense site.
- A US-first English site.

### 2.6 What the site is not

- Not a generic AI news site.
- Not a broad AI tools directory.
- Not a car review site.
- Not a forum.
- Not a SaaS product in v1.
- Not an affiliate-first site.
- Not a fake testing/review site.
- Not an official website of Google, OpenAI, Apple, GM, Polestar, Anthropic, or any automaker.

---

## 3. Goals and Success Metrics

### 3.1 Business goal

Build a production-ready English SEO content site that can quickly capture long-tail traffic around AI assistants in vehicles and monetize through Google AdSense Auto Ads.

### 3.2 Launch goals

The first production launch should include:

- polished homepage;
- topic hub pages;
- at least 40 high-quality content pages;
- compatibility reference hub;
- update tracker;
- methodology page;
- privacy policy;
- terms of use;
- contact page;
- editorial policy;
- sitemap.xml;
- robots.txt;
- analytics integration;
- Google Search Console verification support;
- AdSense Auto Ads support, but no manual ad placement.

### 3.3 30-day KPIs

- 40 indexed pages submitted via sitemap.
- 1,000+ Google Search Console impressions.
- 50+ organic clicks.
- 5+ pages receiving impressions.
- No thin-content indexation warnings.
- Average page load under 2 seconds on mobile for US users.
- 80+ Lighthouse performance score on key templates.

### 3.4 90-day KPIs

- 100+ published pages, but only if editorial quality is maintained.
- 20,000+ monthly impressions.
- 1,000+ monthly organic clicks.
- AdSense approval achieved.
- First AdSense revenue.
- At least 10 pages ranking for long-tail troubleshooting queries.
- At least 5 pages updated based on Search Console query data.

---

## 4. Target Users

### 4.1 Primary user

US driver or vehicle owner who has a car with Google built-in, CarPlay, Android Auto, or connected voice assistant support.

Typical examples:

- GM owner with a 2022+ Cadillac, Chevrolet, Buick, or GMC vehicle.
- Polestar owner in the US using Google built-in.
- iPhone user using Apple CarPlay.
- EV owner interested in AI navigation, charging, messaging, and road trip planning.
- Early adopter following Gemini, ChatGPT, Claude, Siri, and Google Assistant updates.

### 4.2 Secondary user

- Automotive tech enthusiasts.
- AI enthusiasts interested in real-world AI applications.
- Car dealership staff explaining AI features to customers.
- Used-car buyers checking whether a vehicle supports AI assistant features.

### 4.3 Geography

Production v1 focuses on:

1. United States
2. Canada
3. United Kingdom
4. Australia

However, content should be written in **US English**, with **US search intent first**.

Do not create separate localized pages for Canada, UK, or Australia in v1 unless there is a clearly different feature rollout or search intent.

---

## 5. Core Product Scope

### 5.1 Included in v1

#### Public pages

- Homepage
- Gemini in Cars hub
- ChatGPT in CarPlay hub
- Google built-in hub
- Compatibility checker hub
- Update tracker
- Troubleshooting pages
- Comparison pages
- Command/prompt library pages
- Claude future-status pages
- Editorial policy
- Methodology page
- About page
- Contact page
- Privacy policy
- Terms of use

#### Technical features

- Static page generation
- MDX content support
- Reusable SEO components
- Reusable tables and checklists
- JSON-LD structured data
- Sitemap generation
- RSS feed
- Cloudflare deployment
- GA4 support
- Google Search Console verification
- AdSense Auto Ads script configuration
- Responsive design
- Fast mobile performance
- Dark-mode optional, but not required

#### Content operations

- Keyword strategy
- Page briefs
- AI-assisted article generation prompt
- Human editorial checklist
- Source log per page
- Last updated date
- Confirmed vs possible information sections

### 5.2 Excluded from v1

- User accounts
- Paid membership
- Database-backed CMS
- Comments
- Forum/community
- Manual ad placement blocks
- Affiliate banners
- Product checkout
- Multi-language pages
- AI chatbot embedded on site
- User-generated vehicle reports
- Automated scraping without review

---

## 6. Deployment and Technical Architecture

### 6.1 Recommended stack

Use a static-first stack:

- Framework: **Astro**
- Content: **MDX**
- Styling: **Tailwind CSS**
- Deployment: **Cloudflare Pages** for static output
- Optional future server logic: **Cloudflare Workers**
- Package manager: **pnpm**
- Analytics: **GA4**
- Search: optional client-side static search later
- No database in v1

Why Astro:

- Excellent for content-heavy sites.
- Low JavaScript by default.
- Fast static pages.
- Good MDX support.
- Suitable for SEO content and documentation-style hubs.

### 6.2 Deployment target

Primary deployment target:

```txt
Cloudflare Pages
```

Build configuration:

```txt
Build command: pnpm build
Output directory: dist
Node version: latest stable LTS supported by Cloudflare
```

If the chosen Astro/Cloudflare adapter changes in future, keep the production site static and deploy the generated `dist` output to Cloudflare Pages. Use Cloudflare Workers only for future dynamic features.

### 6.3 Environment variables

```txt
PUBLIC_SITE_URL=https://aicarassistantguide.com
PUBLIC_SITE_NAME=AI Car Assistant Guide
PUBLIC_GA4_ID=
PUBLIC_ADSENSE_CLIENT_ID=
PUBLIC_GSC_VERIFICATION=
```

AdSense should remain inactive until approval. The code should support enabling Auto Ads by setting `PUBLIC_ADSENSE_CLIENT_ID`, but the UI should not include fixed ad slots.

### 6.4 Repository structure

```txt
aicarassistantguide/
  package.json
  pnpm-lock.yaml
  astro.config.mjs
  tailwind.config.mjs
  src/
    components/
      Header.astro
      Footer.astro
      SEO.astro
      Breadcrumbs.astro
      TableOfContents.astro
      StatusBadge.astro
      RequirementTable.astro
      TroubleshootingChecklist.astro
      ComparisonTable.astro
      SourceList.astro
      LastUpdated.astro
      AutoAds.astro
    content/
      config.ts
      pages/
        gemini-in-cars/
        chatgpt-carplay/
        google-built-in/
        troubleshooting/
        comparisons/
        commands/
        future/
        policies/
    data/
      vehicleUpdates.json
      assistantSupportMatrix.json
      sources.json
      keywordMap.json
    layouts/
      BaseLayout.astro
      ArticleLayout.astro
      HubLayout.astro
      ToolLayout.astro
    pages/
      index.astro
      gemini-in-cars.astro
      chatgpt-carplay.astro
      compatibility-checker.astro
      update-tracker.astro
      about.astro
      contact.astro
      privacy-policy.astro
      terms.astro
      editorial-policy.astro
      methodology.astro
  public/
    robots.txt
    favicon.svg
```

### 6.5 Page types

#### 1. Hub pages

Purpose: organize topic clusters and guide users to the right article.

Examples:

- `/gemini-in-cars/`
- `/chatgpt-carplay/`
- `/google-built-in/`

#### 2. Troubleshooting pages

Purpose: solve one concrete problem.

Examples:

- `/why-is-gemini-not-showing-in-my-gm-car/`
- `/chatgpt-carplay-not-showing/`

#### 3. Compatibility pages

Purpose: help users determine whether their car/device may support a feature.

Examples:

- `/gm-gemini-supported-vehicles/`
- `/polestar-gemini-requirements/`

#### 4. Comparison pages

Purpose: help users choose or understand differences.

Examples:

- `/gemini-vs-google-assistant-in-cars/`
- `/chatgpt-carplay-vs-siri/`

#### 5. Command library pages

Purpose: provide practical prompts and voice commands.

Examples:

- `/gemini-car-commands/`
- `/chatgpt-carplay-prompts-for-driving/`

#### 6. Future-status pages

Purpose: capture early search demand while clearly stating uncertainty.

Examples:

- `/claude-carplay/`
- `/claude-in-car/`

These pages must be careful and must not imply features exist when they are not confirmed.

---

## 7. UX and UI Requirements

### 7.1 Design direction

The site should feel:

- clean;
- trustworthy;
- practical;
- fast;
- readable;
- slightly technical but not developer-heavy;
- friendly to drivers and car owners.

Avoid:

- dark crypto-style design;
- exaggerated AI gradients everywhere;
- low-trust “AI tools directory” design;
- intrusive popups;
- fake urgency;
- cluttered ad-like blocks.

### 7.2 Homepage structure

```txt
Hero:
  H1: AI Car Assistant Guide
  Subtitle: Practical guides for Gemini in cars, ChatGPT in CarPlay, Google built-in, Android Auto AI, and voice assistants on the road.
  Primary CTA: Check AI assistant support
  Secondary CTA: Browse troubleshooting guides

Section 1: What can we help you with?
  Cards:
    - Gemini in cars
    - ChatGPT in CarPlay
    - Google built-in
    - Troubleshooting
    - AI voice commands
    - Future AI assistants

Section 2: Latest AI car assistant updates
  Pull from update tracker.

Section 3: Popular troubleshooting guides
  List high-intent pages.

Section 4: Compatibility and requirements
  Static support matrix.

Section 5: Safety note
  Use voice-first features responsibly. Do not interact with screens while driving.

Section 6: Editorial method
  We separate confirmed information from possible reasons and update pages when rollout details change.
```

### 7.3 Article page requirements

Each article page must include:

- H1
- short answer box at top
- last updated date
- status badge:
  - Confirmed
  - Partially confirmed
  - Not confirmed yet
  - Rollout in progress
- table of contents
- direct answer
- requirements table if relevant
- checklist if relevant
- troubleshooting steps if relevant
- confirmed information section
- possible reasons or likely causes section
- FAQ
- sources/methodology notes
- related articles
- safety disclaimer where relevant

### 7.4 Mobile requirements

Most users will likely search from phone. Mobile UX must be prioritized:

- readable font size;
- sticky but compact header;
- no intrusive popups;
- wide tables should become cards or horizontal scroll;
- checklist should be easy to scan;
- CTA buttons must not interfere with content;
- no manual ad slots.

### 7.5 AdSense requirements

Use **AdSense Auto Ads only**.

Do not create:

- fixed ad slots;
- fake “sponsored” boxes;
- placeholder ad blocks;
- ad-heavy sidebar;
- sticky bottom ad manually;
- in-content ad placeholders.

Implementation rule:

```txt
If PUBLIC_ADSENSE_CLIENT_ID is configured, load Google AdSense Auto Ads script globally.
If not configured, do nothing.
```

---

## 8. Content and SEO Strategy

## 8.1 Core SEO thesis

The site should target practical driver questions created by new AI assistant rollouts.

Do not compete head-on with broad AI media or automaker press releases. Instead, build pages that answer what official announcements usually do not answer clearly:

- “Does this apply to my vehicle?”
- “Why do I not see it yet?”
- “What setting should I check?”
- “Is this Google built-in or Android Auto?”
- “Is this available in the US only?”
- “Does language setting matter?”
- “Can I use it safely while driving?”
- “How is it different from the old assistant?”

## 8.2 Keyword priority framework

Score each keyword from 1 to 5 on these dimensions:

| Factor | Description | Weight |
|---|---|---:|
| Freshness | Is this tied to a recent rollout or new feature? | 25% |
| Practical intent | Does the user need an answer or fix now? | 25% |
| Competition gap | Are current results mostly news, forums, or thin pages? | 20% |
| Content depth potential | Can we add tables, checklists, comparison, or update tracking? | 20% |
| Monetization fit | Is the traffic likely US, English, and AdSense-friendly? | 10% |

Priority formula:

```txt
Priority Score = Freshness*0.25 + PracticalIntent*0.25 + CompetitionGap*0.20 + ContentDepth*0.20 + MonetizationFit*0.10
```

Publish pages with score 4.0+ first.

## 8.3 Keyword clusters

### Cluster A: Gemini in Cars — first priority

Primary intent: drivers trying to understand or troubleshoot Gemini in vehicles.

Core keywords:

```txt
gemini in cars
google gemini in cars
google built-in gemini
gemini car assistant
gemini vehicle assistant
gemini in GM cars
GM gemini update
Cadillac gemini update
Chevrolet gemini update
GMC gemini update
Buick gemini update
Polestar gemini
Polestar google gemini
gemini not showing in car
why is gemini not showing in my GM car
how to enable gemini in car
gemini vs google assistant in car
does gemini work with android auto
does gemini require google built-in
gemini car commands
```

Search intent types:

- compatibility
- rollout status
- troubleshooting
- comparison
- how-to
- command examples

### Cluster B: ChatGPT in CarPlay — second priority

Primary intent: iPhone users trying to use ChatGPT in CarPlay.

Core keywords:

```txt
chatgpt carplay
chatgpt in carplay
how to use chatgpt in carplay
chatgpt carplay not showing
chatgpt carplay not working
chatgpt carplay voice not working
chatgpt carplay ios 26.4
chatgpt carplay requirements
chatgpt carplay vs siri
can chatgpt replace siri in carplay
chatgpt carplay prompts
chatgpt while driving
```

Search intent types:

- setup
- troubleshooting
- requirements
- comparison
- prompt examples

### Cluster C: Google built-in / Android Auto / CarPlay distinctions

Primary intent: users are confused by vehicle platforms.

Core keywords:

```txt
google built-in vs android auto
google built-in gemini vs android auto
does my car have google built-in
android auto ai assistant
carplay ai assistant
carplay ai apps
google assistant vs gemini in cars
siri vs chatgpt carplay
```

Search intent types:

- education
- comparison
- platform selection
- compatibility

### Cluster D: Claude / future AI assistants — low effort, future option

Primary intent: early searchers looking for availability.

Core keywords:

```txt
claude carplay
claude in car
claude car assistant
can claude work in carplay
anthropic claude car
perplexity carplay
gemini carplay
```

Rule:

- Publish only status pages.
- Clearly state “not confirmed” when appropriate.
- Do not imply product availability.
- Update quickly if official support launches.

### Cluster E: Command and prompt libraries

Primary intent: users want examples.

Core keywords:

```txt
gemini car commands
best gemini commands for driving
chatgpt carplay prompts
chatgpt driving prompts
ai assistant road trip prompts
voice commands for ai car assistant
ai commands for EV road trip
```

Rule:

- Must include safety notes.
- Must prioritize voice-safe use cases.
- Must not encourage distracted driving.

### Cluster F: Update tracker queries

Primary intent: users want rollout status.

Core keywords:

```txt
gemini car update
google built-in gemini rollout
GM gemini rollout
Polestar gemini rollout
chatgpt carplay update
ai car assistant update
```

Rule:

- Maintain one update tracker page.
- Avoid creating one thin update page per small news item.
- Use dated changelog.

---

## 9. Production Launch Page Plan

The launch version should include at least 40 pages. This is not an MVP; it is a complete initial topical authority package.

### 9.1 Foundation pages

| # | URL | Page title | Purpose |
|---:|---|---|---|
| 1 | `/` | AI Car Assistant Guide | Homepage |
| 2 | `/about/` | About AI Car Assistant Guide | Trust page |
| 3 | `/editorial-policy/` | Editorial Policy | E-E-A-T trust |
| 4 | `/methodology/` | How We Check AI Car Assistant Features | Trust + source method |
| 5 | `/contact/` | Contact | AdSense trust |
| 6 | `/privacy-policy/` | Privacy Policy | AdSense trust |
| 7 | `/terms/` | Terms of Use | AdSense trust |
| 8 | `/update-tracker/` | AI Car Assistant Update Tracker | Utility hub |
| 9 | `/compatibility-checker/` | AI Car Assistant Compatibility Guide | Utility hub |

### 9.2 Gemini in Cars pages

| # | URL | Target keyword | Page type | Priority |
|---:|---|---|---|---|
| 10 | `/gemini-in-cars/` | gemini in cars | Hub | P0 |
| 11 | `/google-built-in-gemini/` | google built-in gemini | Explainer | P0 |
| 12 | `/gm-gemini-update/` | GM gemini update | Compatibility | P0 |
| 13 | `/why-is-gemini-not-showing-in-my-gm-car/` | why is gemini not showing in my GM car | Troubleshooting | P0 |
| 14 | `/how-to-enable-gemini-in-your-car/` | how to enable gemini in car | How-to | P0 |
| 15 | `/gm-gemini-supported-vehicles/` | GM gemini supported vehicles | Compatibility | P0 |
| 16 | `/cadillac-gemini-update/` | Cadillac gemini update | Brand guide | P1 |
| 17 | `/chevrolet-gemini-update/` | Chevrolet gemini update | Brand guide | P1 |
| 18 | `/gmc-gemini-update/` | GMC gemini update | Brand guide | P1 |
| 19 | `/buick-gemini-update/` | Buick gemini update | Brand guide | P1 |
| 20 | `/polestar-gemini-update/` | Polestar gemini update | Brand guide | P0 |
| 21 | `/polestar-gemini-not-showing/` | Polestar gemini not showing | Troubleshooting | P1 |
| 22 | `/gemini-vs-google-assistant-in-cars/` | gemini vs google assistant in cars | Comparison | P1 |
| 23 | `/does-gemini-work-with-android-auto/` | does gemini work with android auto | Explainer | P1 |
| 24 | `/does-gemini-require-google-built-in/` | does gemini require google built-in | Explainer | P1 |
| 25 | `/gemini-car-commands/` | gemini car commands | Command library | P1 |
| 26 | `/gemini-live-in-car/` | gemini live in car | Explainer | P2 |

### 9.3 ChatGPT in CarPlay pages

| # | URL | Target keyword | Page type | Priority |
|---:|---|---|---|---|
| 27 | `/chatgpt-carplay/` | chatgpt carplay | Hub | P0 |
| 28 | `/how-to-use-chatgpt-in-carplay/` | how to use chatgpt in carplay | How-to | P0 |
| 29 | `/chatgpt-carplay-not-showing/` | chatgpt carplay not showing | Troubleshooting | P0 |
| 30 | `/chatgpt-carplay-not-working/` | chatgpt carplay not working | Troubleshooting | P1 |
| 31 | `/chatgpt-carplay-requirements/` | chatgpt carplay requirements | Requirements | P1 |
| 32 | `/chatgpt-carplay-voice-not-working/` | chatgpt carplay voice not working | Troubleshooting | P1 |
| 33 | `/chatgpt-carplay-vs-siri/` | chatgpt carplay vs siri | Comparison | P1 |
| 34 | `/can-chatgpt-replace-siri-in-carplay/` | can chatgpt replace siri in carplay | Explainer | P1 |
| 35 | `/chatgpt-carplay-prompts-for-driving/` | chatgpt carplay prompts | Command library | P1 |
| 36 | `/chatgpt-carplay-vs-gemini-in-cars/` | chatgpt carplay vs gemini cars | Comparison | P2 |

### 9.4 Platform distinction pages

| # | URL | Target keyword | Page type | Priority |
|---:|---|---|---|---|
| 37 | `/google-built-in-vs-android-auto/` | google built-in vs android auto | Explainer | P1 |
| 38 | `/carplay-vs-android-auto-ai-assistants/` | carplay vs android auto ai assistants | Comparison | P2 |
| 39 | `/ai-assistant-for-road-trips/` | AI assistant for road trips | Practical guide | P2 |
| 40 | `/ai-voice-assistant-safety-while-driving/` | AI voice assistant driving safety | Safety guide | P2 |

### 9.5 Future option pages

| # | URL | Target keyword | Page type | Priority |
|---:|---|---|---|---|
| 41 | `/claude-carplay/` | claude carplay | Future status | P2 |
| 42 | `/claude-in-car/` | claude in car | Future status | P2 |
| 43 | `/perplexity-carplay/` | perplexity carplay | Future status | P3 |
| 44 | `/best-ai-assistants-for-carplay/` | best ai assistants for carplay | Curated guide | P3 |
| 45 | `/best-ai-assistants-for-cars/` | best ai assistants for cars | Curated guide | P3 |

Important: pages 44 and 45 must not be generic listicles. They should be decision guides with status matrix, availability, requirements, and confirmed limitations.

---

## 10. Content Page Requirements

Every content page must include the following fields in frontmatter:

```yaml
title:
description:
slug:
cluster:
primaryKeyword:
secondaryKeywords:
pageType:
status: confirmed | partially-confirmed | not-confirmed | rollout-in-progress
lastUpdated:
reviewedBy:
sources:
  - title:
    url:
    sourceType: official | reputable-media | forum-signal | product-doc
confirmedFacts:
  - 
uncertainAreas:
  -
```

### 10.1 Required article structure

```txt
1. Short answer
2. What is confirmed
3. What may be happening / possible reasons
4. Requirements table
5. Step-by-step checklist
6. Common mistakes
7. What to do next
8. FAQ
9. Sources and update notes
10. Related guides
```

Not every page needs all sections, but every page must have:

- direct answer;
- user-actionable next step;
- confirmed vs uncertain distinction;
- information gain beyond official press release.

### 10.2 “Short answer” requirement

The first visible content block after H1 must directly answer the user.

Bad:

```txt
Artificial intelligence is rapidly changing how we interact with our cars...
```

Good:

```txt
If Gemini is not showing in your GM car yet, the most likely reason is that the rollout has not reached your vehicle, your vehicle does not have Google built-in, your region/language settings are not eligible, or the software update has not been installed. Start by checking model year, Google built-in availability, region, language, and system updates.
```

### 10.3 Confirmed vs possible labels

Use visible labels:

- **Confirmed**
- **Possible**
- **Not confirmed**
- **Rollout in progress**

This protects trust and reduces hallucination risk.

### 10.4 No fake experience rule

Do not write:

```txt
We tested this in a 2024 Cadillac Lyriq...
```

unless actually tested.

Allowed:

```txt
Based on official rollout information and platform requirements, these are the checks most owners should make first.
```

### 10.5 Source standard

Prefer sources in this order:

1. Official automaker source
2. Official AI/platform source
3. Official app/help page
4. Reputable automotive or tech media
5. Forum/Reddit only as signal, never as confirmed fact

Each page must include a “Sources checked” section.

---

## 11. AI Article Generation Prompt

Use this base prompt for every article. Replace only the page topic and source pack.

```txt
你是英文 SEO 编辑、汽车科技产品经理、Google Helpful Content 审核专家。

请为 AI Car Assistant Guide 生成一篇英文页面。

页面主题：Why Is Gemini Not Showing in My GM Car?

要求：
1. 第一屏直接回答用户问题，不要写长背景。
2. 页面目标是解决问题，不是泛泛介绍。
3. 必须区分 confirmed information 和 possible reasons。
4. 必须包含排查 checklist。
5. 必须包含 supported requirements 表格。
6. 必须包含常见错误原因。
7. 必须包含 FAQ。
8. 不要使用模板化废话。
9. 不要堆关键词。
10. 不要写虚假体验，不确定的地方要写 clearly not confirmed。
11. 每一节都要给用户一个具体判断或动作。
12. 内容要比官方新闻稿多出信息增量。
13. 语气自然，像一个懂车机和 AI 产品的人在解释。
```

### 11.1 Extended production prompt

For actual production, use this extended version:

```txt
你是英文 SEO 编辑、汽车科技产品经理、Google Helpful Content 审核专家。

请为 AI Car Assistant Guide 生成一篇英文页面。

页面主题：{PAGE_TOPIC}

目标关键词：
- Primary keyword: {PRIMARY_KEYWORD}
- Secondary keywords: {SECONDARY_KEYWORDS}

目标用户：
美国英语用户为主。用户通常是车主、iPhone/CarPlay 用户、Google built-in 用户、EV 车主或汽车科技爱好者。用户希望马上知道自己的车能不能用、为什么不能用、怎么开启、怎么排查。

资料包：
{SOURCE_PACK}

要求：
1. 第一屏直接回答用户问题，不要写长背景。
2. 页面目标是解决问题，不是泛泛介绍。
3. 必须区分 confirmed information、possible reasons、not confirmed yet。
4. 必须包含排查 checklist。
5. 必须包含 supported requirements 表格。
6. 必须包含 common mistakes。
7. 必须包含 FAQ。
8. 不要使用模板化废话。
9. 不要堆关键词。
10. 不要写虚假体验，不确定的地方要写 clearly not confirmed。
11. 每一节都要给用户一个具体判断或动作。
12. 内容要比官方新闻稿多出信息增量。
13. 语气自然，像一个懂车机和 AI 产品的人在解释。
14. 不要声称本站是官方来源。
15. 不要鼓励用户开车时操作屏幕。
16. 必须加入安全提醒：use voice-first features responsibly and avoid interacting with screens while driving.
17. 输出格式为 Markdown/MDX。
18. 结尾必须包含 Sources checked 和 Related guides。
19. 如果资料包没有证明某功能已上线，必须写 not confirmed。
20. 不要编造车型、发布日期、价格、地区、系统版本。
```

---

## 12. Pre-Publish Quality Checklist

Every page must pass these 10 questions before publishing:

```txt
1. 这个页面是不是直接解决一个问题？
2. 第一屏有没有给明确答案？
3. 有没有原创表格、流程、判断标准？
4. 有没有比官方资料更多的信息增量？
5. 有没有明显 AI 废话？
6. 有没有和其他页面结构太像？
7. 有没有用户能马上执行的步骤？
8. 有没有区分确认信息和推测信息？
9. 有没有避免硬塞 affiliate 链接？
10. 这个页面如果没有 Google 流量，用户看了还觉得有用吗？
```

Additional production checks:

```txt
11. 是否有 sources checked？
12. 是否有 last updated？
13. 是否有 safety note？
14. 是否没有虚假测试体验？
15. 是否没有夸大官方未确认功能？
16. 是否标题和 H1 匹配搜索意图？
17. 是否 meta description 能回答用户问题？
18. 是否内链到相关 hub？
19. 是否页面加载快？
20. 是否移动端表格可读？
```

---

## 13. Content Anti-Template Rules

Do not mass-produce pages by replacing only brand or model names.

Bad pattern:

```txt
What is Gemini in [Brand]?
How to use Gemini in [Brand]?
Benefits of Gemini in [Brand]
FAQ
```

Correct pattern:

- GM page focuses on rollout scale, 2022+ model year, Google built-in, US eligibility.
- Cadillac page focuses on Cadillac owner use cases and likely luxury/EV models, but only where confirmed.
- Chevrolet page focuses on mainstream owner questions and practical update checks.
- Polestar page focuses on US + Google built-in + US English language setting.
- Troubleshooting pages focus on concrete user problems.
- Comparison pages focus on platform distinctions.
- Command pages focus on practical safe voice use cases.

Each page needs a different job.

---

## 14. Information Gain Requirements

Every page should include at least two of the following:

- a requirements matrix;
- a troubleshooting decision tree;
- a “confirmed vs not confirmed” table;
- a rollout status table;
- a user checklist;
- a common mistakes table;
- a comparison matrix;
- a safety note specific to the feature;
- a “what to do next” section;
- an update log;
- a source confidence rating;
- a “who this does not apply to” section.

Example page enhancement for “Why Is Gemini Not Showing in My GM Car?”:

```txt
Information gain:
- Requirement table: 2022+ GM vehicle, Google built-in, US rollout, software update, Google account.
- Reason matrix: rollout not reached, no Google built-in, region/language not supported, software update pending, feature not yet enabled by GM.
- Owner checklist: check model year, check infotainment system, check updates, check account sign-in, check language, wait for phased rollout.
- Clear distinction: confirmed rollout vs possible reasons.
```

---

## 15. Internal Linking Strategy

### 15.1 Hub-based internal linking

Every article must link upward to its hub:

- Gemini pages → `/gemini-in-cars/`
- ChatGPT pages → `/chatgpt-carplay/`
- Platform pages → `/google-built-in-vs-android-auto/` or `/compatibility-checker/`
- Future pages → `/update-tracker/`

### 15.2 Related page blocks

Each page should include 3 to 5 related guides.

Example for `/why-is-gemini-not-showing-in-my-gm-car/`:

- GM Gemini Update: Supported Vehicles and Requirements
- How to Enable Gemini in Your Car
- Does Gemini Require Google built-in?
- Gemini vs Google Assistant in Cars
- AI Car Assistant Update Tracker

### 15.3 Avoid orphan pages

No page should be published unless linked from:

- one hub page;
- one related article;
- sitemap.

---

## 16. Structured Data Requirements

Use JSON-LD where appropriate.

### 16.1 Article schema

For normal articles:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "datePublished": "...",
  "dateModified": "...",
  "author": {
    "@type": "Organization",
    "name": "AI Car Assistant Guide Editorial Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI Car Assistant Guide"
  }
}
```

### 16.2 FAQ schema

Use only if FAQs are genuinely visible and useful on page. Do not spam FAQ schema on every page if it does not help users.

### 16.3 Breadcrumb schema

Use on all pages.

### 16.4 WebSite schema

Use on homepage.

---

## 17. Trust, Safety, and Compliance

### 17.1 Disclaimer

Footer disclaimer:

```txt
AI Car Assistant Guide is an independent informational website. We are not affiliated with Google, OpenAI, Apple, GM, Polestar, Anthropic, or any automaker. Feature availability can vary by vehicle, region, language, software version, and rollout timing. Always follow local laws and avoid interacting with screens while driving.
```

### 17.2 Safety note on relevant pages

Use:

```txt
Safety note: Use voice-first features responsibly. Do not read, type, or interact with your vehicle screen while driving. Pull over safely if a task requires visual attention.
```

### 17.3 Editorial policy

The editorial policy must state:

- AI may assist with drafting and structure.
- Pages are reviewed before publication.
- Confirmed information is separated from possible explanations.
- Official sources are preferred.
- User safety matters.
- The site corrects and updates pages when new rollout details appear.

### 17.4 Methodology page

The methodology page should explain:

- how sources are selected;
- how rollout claims are verified;
- how “confirmed,” “possible,” and “not confirmed” labels are used;
- how update dates work;
- how readers can submit corrections.

---

## 18. AdSense Readiness Requirements

To improve approval chances, the site should launch with:

- original useful content;
- at least 40 substantial pages;
- no empty category pages;
- no placeholder pages;
- no copied official content;
- About page;
- Contact page;
- Privacy Policy;
- Terms;
- Editorial Policy;
- clear navigation;
- fast loading;
- mobile friendly;
- no manual ad slots before approval.

AdSense script behavior:

```txt
Before approval:
- no script or disabled script.

After approval:
- enable Auto Ads globally using environment variable.
- do not manually insert ad units.
```

---

## 19. Analytics and Search Setup

### 19.1 Required setup

- Google Search Console
- Bing Webmaster Tools
- GA4
- Cloudflare Web Analytics optional
- Sitemap submitted to Google
- Sitemap submitted to Bing

### 19.2 Track weekly

- indexed pages;
- impressions by query;
- clicks by query;
- CTR;
- average position;
- pages with impressions but low CTR;
- pages with impressions but no clicks;
- pages not indexed;
- duplicate or discovered-not-indexed pages.

### 19.3 Search Console improvement loop

Weekly workflow:

1. Export queries with impressions.
2. Identify unexpected queries.
3. Update matching pages with missing answer sections.
4. Add internal links.
5. Create new page only if query intent is clearly different.
6. Do not create pages for tiny keyword variations.

---

## 20. Launch Content Production Workflow

### Step 1: Create source pack

For each page, collect:

- official source notes;
- rollout dates;
- known requirements;
- unsupported or unclear areas;
- user problem statement.

### Step 2: Generate article brief

Brief must include:

- page intent;
- primary keyword;
- secondary keywords;
- required sections;
- information gain requirement;
- internal links;
- sources.

### Step 3: Generate MDX draft with AI prompt

Use the production prompt in section 11.

### Step 4: Human edit

Remove:

- generic AI intro;
- repeated phrases;
- unsupported claims;
- keyword stuffing;
- vague paragraphs.

Add:

- tables;
- checklists;
- direct action steps;
- confirmed/possible labels;
- sources checked;
- related links.

### Step 5: Pass quality checklist

Do not publish unless it passes the 20 checks.

### Step 6: Publish and submit

- generate sitemap;
- deploy to Cloudflare;
- inspect URL in GSC for P0 pages;
- request indexing for priority pages.

### Step 7: Update based on queries

After 7 to 14 days, improve pages based on real Search Console impressions.

---

## 21. Launch Timeline

### Day 1–2: Build foundation

- setup Astro project;
- setup Cloudflare deployment;
- create layouts and components;
- create homepage;
- create policy pages;
- create sitemap/robots.

### Day 3–5: Publish Gemini P0 pages

- Gemini hub
- Google built-in Gemini
- GM Gemini update
- Why Gemini not showing in GM car
- How to enable Gemini
- GM supported vehicles
- Polestar Gemini update

### Day 6–7: Publish ChatGPT CarPlay P0 pages

- ChatGPT CarPlay hub
- How to use ChatGPT in CarPlay
- ChatGPT CarPlay not showing
- ChatGPT CarPlay requirements

### Week 2: Expand to 40+ pages

- brand pages;
- troubleshooting pages;
- comparison pages;
- command pages;
- future-status pages.

### Week 3: Quality update and indexing push

- improve internal links;
- update source sections;
- add compatibility hub enhancements;
- inspect URLs in Search Console;
- fix pages not indexed.

### Week 4: AdSense preparation

- confirm all policy pages;
- confirm no placeholder pages;
- apply for AdSense when content base is strong enough;
- enable Auto Ads after approval.

---

## 22. Developer Acceptance Criteria

### 22.1 Functional acceptance

- Site deploys successfully to Cloudflare.
- Homepage loads at root domain.
- All content pages render correctly.
- Sitemap includes all canonical pages.
- Robots.txt exists.
- Every article has title, meta description, canonical URL.
- Every article has last updated date.
- Every article supports source list.
- No manual ad slots exist.
- AdSense Auto Ads can be enabled via environment variable.
- Mobile layout is readable.
- Tables are mobile-safe.

### 22.2 SEO acceptance

- Unique title for every page.
- Unique meta description for every page.
- Canonical URL for every page.
- Breadcrumbs on every article.
- JSON-LD for Article and Breadcrumb.
- H1 appears once.
- No empty category pages.
- No noindex on production pages.
- Sitemap submitted and accessible.

### 22.3 Content acceptance

- Each page solves one clear user problem.
- Short answer appears above the fold.
- Confirmed vs possible information is clearly labeled.
- At least one original table/checklist/decision framework per article.
- No fake hands-on testing.
- No unsupported official claims.
- No obvious AI filler.

---

## 23. Recommended First Article: Page Brief

### URL

```txt
/why-is-gemini-not-showing-in-my-gm-car/
```

### H1

```txt
Why Is Gemini Not Showing in My GM Car?
```

### Meta title

```txt
Why Gemini Is Not Showing in Your GM Car: Checks and Fixes
```

### Meta description

```txt
Gemini may not show in your GM car yet because of rollout timing, Google built-in requirements, region, language, or software update status. Here is what to check first.
```

### Target keywords

```txt
Primary:
why is gemini not showing in my GM car

Secondary:
GM Gemini not showing
Gemini not showing in car
GM Gemini update
Google built-in Gemini
how to enable Gemini in GM car
```

### Required sections

```txt
Short answer
Confirmed rollout information
Supported requirements table
Possible reasons Gemini is not showing
Step-by-step checklist
Common mistakes
When to wait
FAQ
Sources checked
Related guides
```

### Information gain target

The page must provide:

- requirement table;
- possible cause matrix;
- troubleshooting checklist;
- clear user next actions;
- confirmed vs possible split.

---

## 24. My Additional Recommendations

### 24.1 Add a “Compatibility Guide” as a pseudo-tool

Even if there is no real database in v1, create a static interactive-looking guide:

```txt
Choose your platform:
- GM with Google built-in
- Polestar with Google built-in
- iPhone with CarPlay
- Android Auto
- Not sure
```

Then show:

- likely assistant;
- requirements;
- page links;
- what to check next.

This makes the site more than an article site.

### 24.2 Add “Update Tracker” early

AI car assistant availability changes quickly. An update tracker gives users a reason to return and gives Google a strong freshness signal.

Suggested fields:

```txt
Date
Assistant
Brand/platform
Region
Status
Source
What changed
Related guide
```

### 24.3 Do not overbuild

Do not build login, CMS, subscription, database, or forum in v1. The only bottleneck that matters is content quality and speed.

### 24.4 Do not publish 200 pages immediately

Even though this is a production launch, do not mass publish hundreds of pages. Launch with 40 to 45 strong pages, then expand from Search Console data.

### 24.5 Treat every page as a product

Each page should have a job:

- answer;
- diagnose;
- compare;
- check compatibility;
- explain requirements;
- track updates.

If a page has no job, do not publish it.

---

## 25. Source Notes for Initial Research

Use these sources as initial references during content creation. Always verify before publishing:

- GM official announcement: Gemini rolling out to eligible 2022+ Cadillac, Chevrolet, Buick, and GMC vehicles with Google built-in in the US.
- Polestar official announcement: Gemini rolling out to US Polestar models with Google built-in and US English language setting.
- OpenAI Help: ChatGPT is available in Apple CarPlay on supported iPhone models running iOS 26.4 or later.
- Google Search documentation: helpful, reliable, people-first content.
- Google Search spam policies: scaled content abuse.
- Cloudflare documentation: Cloudflare Pages / Astro deployment.

---

## 26. Final Production Principle

The site should not try to win by having the most pages.

It should win by being the fastest useful independent guide when a driver searches:

> “Why does this AI assistant not work in my car yet?”

That is the whole product.
