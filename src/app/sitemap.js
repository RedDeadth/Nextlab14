import { NextResponse } from 'next/server';

export async function GET() {
  const BASE_URL = "http://localhost:3000";
  const urls = ["/", "/blog", "/contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => `
      <url>
        <loc>${BASE_URL}${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`)
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      'encoding': 'UTF-8'
    },
  });
}
