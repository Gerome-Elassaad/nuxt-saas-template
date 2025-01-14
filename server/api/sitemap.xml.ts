import { defineEventHandler } from 'h3';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://repo-booster.com';

  const staticRoutes: string[] = [
    '/',
    '/blog',
    '/docs',
    '/login',
    '/pricing',
    '/signup',
  ];

  const blogRoutes = await serverQueryContent(event)
    .where({ _path: { $regex: '^/blog/' } })
    .find()
    .then((posts) =>
      posts
        .filter((post) => post._path)
        .map((post) => post._path as string)
    );

  const docsRoutes = await serverQueryContent(event)
    .where({ _path: { $regex: '^/docs/' } })
    .find()
    .then((docs) =>
      docs
        .filter((doc) => doc._path)
        .map((doc) => doc._path as string)
    );

  const allRoutes = [...new Set([...staticRoutes, ...blogRoutes, ...docsRoutes])];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map(
          (route) => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`
        )
        .join('')}
    </urlset>
  `.trim();

  event.node.res.setHeader('Content-Type', 'application/xml');
  return sitemap;
});
