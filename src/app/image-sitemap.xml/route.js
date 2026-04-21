import { showcaseProjects } from '@/lib/showcaseData';
import { SITE_URL } from '@/lib/seo';

// Image Sitemap — helps Google Image Search index all project photos
// Showcase/project photos are high-value for "deck ideas" and "deck design" image searches
// https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps

export async function GET() {
  const entries = [];

  // Showcase project images
  for (const project of showcaseProjects) {
    entries.push(`
    <url>
      <loc>${SITE_URL}/showcase/${project.slug}</loc>
      <image:image>
        <image:loc>${SITE_URL}${project.image}</image:loc>
        <image:title>${escapeXml(project.title)} — ${escapeXml(project.location)}</image:title>
        <image:caption>${escapeXml(project.title)} by Loudoun Decks in ${escapeXml(project.location)}. Professional deck and outdoor living construction in Northern Virginia.</image:caption>
      </image:image>
    </url>`);
  }

  // Homepage hero
  entries.push(`
    <url>
      <loc>${SITE_URL}</loc>
      <image:image>
        <image:loc>${SITE_URL}/home-page-ldn.png</image:loc>
        <image:title>Loudoun Decks — Custom Deck Builder Northern Virginia</image:title>
        <image:caption>Custom composite deck building in Northern Virginia by Loudoun Decks. Trex Platinum Partner.</image:caption>
      </image:image>
    </url>`);

  // Key content page images
  const contentImages = [
    { page: '/how-much-does-a-deck-cost-northern-virginia', image: '/images/img10.jpeg', title: 'Deck Cost Guide Northern Virginia 2026' },
    { page: '/trex-vs-timbertech-vs-azek', image: '/og-default.webp', title: 'Trex vs TimberTech vs AZEK Comparison' },
    { page: '/composite-deck-vs-wood-deck-virginia', image: '/og-default.webp', title: 'Composite Deck vs Wood Deck Virginia' },
    { page: '/deck-design-ideas-northern-virginia-2026', image: '/images/img36.jpeg', title: 'Deck Design Ideas 2026 Northern Virginia' },
    { page: '/screened-porch-cost-northern-virginia', image: '/og-default.webp', title: 'Screened Porch Cost Northern Virginia' },
    { page: '/northern-virginia-deck-building-guide', image: '/og-default.webp', title: 'Complete Deck Building Guide Northern Virginia' },
  ];

  for (const ci of contentImages) {
    entries.push(`
    <url>
      <loc>${SITE_URL}${ci.page}</loc>
      <image:image>
        <image:loc>${SITE_URL}${ci.image}</image:loc>
        <image:title>${escapeXml(ci.title)}</image:title>
        <image:caption>${escapeXml(ci.title)} — Expert guide by Loudoun Decks, Northern Virginia's top-rated deck builder.</image:caption>
      </image:image>
    </url>`);
  }

  // Gallery images from /public/images/ (top 30)
  for (let i = 1; i <= 30; i++) {
    const num = i < 10 ? `0${i}` : `${i}`;
    entries.push(`
    <url>
      <loc>${SITE_URL}/showcase</loc>
      <image:image>
        <image:loc>${SITE_URL}/images/img${num}.jpeg</image:loc>
        <image:title>Custom deck project ${i} by Loudoun Decks</image:title>
        <image:caption>Professional deck construction and outdoor living project in Northern Virginia by Loudoun Decks.</image:caption>
      </image:image>
    </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
