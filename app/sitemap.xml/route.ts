import { getBlogPosts } from '@/lib/getBlogPosts';

export async function GET() {
  const baseUrl = 'https://sachinkasana-dev.vercel.app';
  const today = new Date().toISOString().slice(0, 10);

  const staticRoutes = [
    { path: '', lastmod: today },
    { path: '/blog', lastmod: today },
    { path: '/resume', lastmod: today },
    { path: '/tools', lastmod: today },
    { path: '/tools/json-prettifier', lastmod: today },
    { path: '/tools/regex-tester', lastmod: today },
    { path: '/tools/devutil', lastmod: today },
    { path: '/tools/js-event-loop-visualizer', lastmod: today },
    { path: '/tools/node-event-loop-visualizer', lastmod: today },
    { path: '/tools/dsa-visualizer', lastmod: today },
  ];

  const blogRoutes = getBlogPosts().map((post) => ({
    path: `/blog/${post.slug}`,
    lastmod: post.date || today,
  }));

  const routes = [...staticRoutes, ...blogRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${baseUrl}${route.path}</loc>
          <lastmod>${route.lastmod}</lastmod>
        </url>`
        )
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
