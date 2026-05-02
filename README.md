# AI Car Assistant Guide

Static-first Astro site for practical English guides about Gemini in cars, ChatGPT in CarPlay, Google built-in, Android Auto AI, compatibility checks, update tracking, and troubleshooting.

## Stack

- Astro static output
- Tailwind CSS
- MDX-ready configuration
- Cloudflare Pages target
- Sitemap and RSS support
- GA4, GSC, and AdSense Auto Ads via environment variables

## Development

```bash
pnpm install
pnpm dev
pnpm build
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
