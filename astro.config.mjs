import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { pages } from './src/data/pages.ts';

import cloudflare from "@astrojs/cloudflare";

const site = process.env.PUBLIC_SITE_URL || 'https://aicarassistantguide.com';
const isoDateToUtc = (date) => new Date(`${date}T00:00:00.000Z`);
const indexablePageDates = new Map([
  ['/', '2026-05-02'],
  ...pages.map((page) => [`/${page.slug}/`, page.lastUpdated])
]);
const latestContentDate = Array.from(indexablePageDates.values()).sort().at(-1) || '2026-05-02';
const sitemapExcludedPaths = new Set(['/contact/', '/privacy-policy/', '/terms/']);

const normalizedPathname = (url) => {
  const pathname = new URL(url).pathname;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
};

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',

  integrations: [
    mdx(),
    sitemap({
      lastmod: isoDateToUtc(latestContentDate),
      filter: (page) => !sitemapExcludedPaths.has(normalizedPathname(page)),
      serialize: (item) => {
        const pathname = normalizedPathname(item.url);
        const lastmod = indexablePageDates.get(pathname) || latestContentDate;
        return {
          ...item,
          lastmod: isoDateToUtc(lastmod)
        };
      }
    })
  ],

  adapter: cloudflare()
});