# AI Car Assistant Guide

Static-first Astro site for practical English guides about Gemini in cars, ChatGPT in CarPlay, Google built-in, Android Auto AI, compatibility checks, update tracking, and troubleshooting.

## Stack

- Astro static output
- Tailwind CSS
- MDX-ready configuration
- Cloudflare Workers static assets target
- Sitemap and RSS support
- GA4, GSC, and AdSense Auto Ads via environment variables

## Development

```bash
pnpm install
pnpm dev
pnpm build
```

## Cloudflare deployment

This is a static Astro site deployed through Cloudflare Workers static assets.

```bash
pnpm build
pnpm run deploy:cloudflare
```

Cloudflare's Workers Builds deploy command can remain:

```bash
npx wrangler deploy
```

## Environment variables

Copy `.env.example` to `.env` and set values as needed.

```txt
PUBLIC_SITE_URL=https://aicarassistantguide.com
PUBLIC_SITE_NAME=AI Car Assistant Guide
PUBLIC_GA4_ID=
PUBLIC_ADSENSE_CLIENT_ID=
PUBLIC_GSC_VERIFICATION=
```

AdSense is Auto Ads only. The site does not include manual ad slots.
