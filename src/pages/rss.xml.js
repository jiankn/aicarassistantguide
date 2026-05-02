import rss from '@astrojs/rss';
import { pages } from '../data/pages';
import { site } from '../data/site';

export async function GET(context) {
  const feedPages = pages
    .filter((page) => page.cluster !== 'Trust' && page.slug !== 'compatibility-checker')
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());

  return rss({
    title: site.name,
    description: site.description,
    site: context.site || site.url,
    items: feedPages.map((page) => ({
      title: page.title,
      description: page.description,
      pubDate: new Date(page.lastUpdated),
      link: `/${page.slug}/`
    }))
  });
}
