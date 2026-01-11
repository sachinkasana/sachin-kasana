export async function GET() {
    const baseUrl = 'https://sachinkasana-dev.vercel.app';
  
    const routes = [
      '', 
      '/resume', 
      '/tools',
      '/tools/json-prettifier', 
      '/tools/regex-tester',
      '/tools/devutil',
      '/tools/js-event-loop-visualizer',
      '/tools/node-event-loop-visualizer',
      '/tools/dsa-visualizer'
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${baseUrl}${route}</loc>
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
  
