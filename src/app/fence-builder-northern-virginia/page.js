import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/fence-builder-northern-virginia',
  title: 'Fence Builder in Northern Virginia',
  description: 'Custom fencing in Northern Virginia $4,000-$15,000. Privacy, composite, vinyl, wood, aluminum. HOA-compliant. Permits handled. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a fence cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Fencing in Northern Virginia costs $25-$75 per linear foot installed depending on material. Wood privacy: $25-$40/ft. Vinyl: $30-$50/ft. Composite: $40-$65/ft. Aluminum ornamental: $35-$55/ft. A typical 150 linear ft yard: $4,000-$11,000." } },
    { "@type": "Question", name: "Do I need a permit for a fence in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "It varies by county. Loudoun County: fences under 7 feet typically don't need permits but DO need HOA approval. Fairfax County: similar. However, fences in setback zones, corner lots, or near easements may need permits. We check your specific property." } },
    { "@type": "Question", name: "Can you build a fence and deck together?", acceptedAnswer: { "@type": "Answer", text: "Yes bundling a fence with a deck project saves 15-25% compared to hiring separately. Shared mobilization, site prep, and material delivery reduce costs. Many clients add privacy fencing when building a new deck." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function FenceBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img21.jpeg"
              alt="Premium custom fencing by LDN Decks in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Fencing The Perfect Complement to Your New Deck</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Privacy fencing, composite, vinyl, wood &amp; aluminum HOA-compliant, permits handled</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</a>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Fencing Options &amp; Pricing</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Material', 'Cost/linear ft', '150 ft Yard', 'Lifespan', 'Maintenance'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['PT Wood (privacy 6ft)', '$25–$40', '$3,750–$6,000', '15–20 yrs', 'Stain every 2-3 yrs'],
                  ['Cedar (privacy 6ft)', '$30–$50', '$4,500–$7,500', '20–25 yrs', 'Seal every 2-3 yrs'],
                  ['Vinyl (privacy 6ft)', '$30–$50', '$4,500–$7,500', '25–30 yrs', 'Wash occasionally'],
                  ['Composite', '$40–$65', '$6,000–$9,750', '25–50 yrs', 'Wash occasionally'],
                  ['Aluminum ornamental', '$35–$55', '$5,250–$8,250', '30+ yrs', 'None'],
                  ['Chain link (4ft)', '$15–$25', '$2,250–$3,750', '20+ yrs', 'None'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Most Popular Fence Styles in Northern Virginia</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Board-on-Board Privacy', desc: 'Overlapping boards with no gaps complete privacy from neighbors. Most popular in HOA communities. Available in wood, vinyl, or composite.', range: '$30–$55/ft' },
              { title: 'Horizontal Slat Modern', desc: 'Horizontal boards with small gaps modern aesthetic that complements contemporary homes. Often paired with cable railing decks.', range: '$35–$60/ft' },
              { title: 'Aluminum Ornamental', desc: 'Open picket design for security without blocking views. Pool-code compliant. Zero maintenance. Popular for front yards and pool areas.', range: '$35–$55/ft' },
              { title: 'Composite Privacy', desc: 'Same technology as composite decking zero maintenance, won\'t rot, fade, or warp. 25-50 year lifespan. Premium investment.', range: '$40–$65/ft' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{item.range}</p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Bundle: Fence + Deck = Save 15-25%</h2>
          <p style={S.p}>Building a fence and deck at the same time saves money through shared mobilization, site prep, material delivery, and dumpster costs. Many homeowners add privacy fencing when they build or replace their deck.</p>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Example: 350 sqft Deck + 120 ft Privacy Fence</h3>
            <p style={{ marginBottom: '0.5rem' }}>Separate projects: $30,000 (deck) + $6,000 (fence) = $36,000</p>
            <p style={{ marginBottom: '0.5rem' }}>Bundled together: $30,500 total <strong>saves $5,500 (15%)</strong></p>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Same materials, same quality, same warranty just smarter scheduling.</p>
          </div>

          <h2 style={S.h2}>HOA Fence Guidelines</h2>
          <p style={S.p}>Nearly every Northern Virginia HOA has fence restrictions. Common rules:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Maximum height: typically 6 ft rear/side, 4 ft front</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Materials: many restrict chain link, require wood/vinyl/composite</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Colors: earth tones required (white, tan, brown, gray, black)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Style: some mandate specific profiles (board-on-board, picket)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Setbacks: typically 1-3 ft from property line (not ON the line)</li>
          </ul>
          <p style={S.p}>We check your HOA guidelines before design and handle all ARC submissions. <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our HOA guide</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Fence cost in Northern Virginia?", a: "Wood: $25-$40/ft. Vinyl: $30-$50/ft. Composite: $40-$65/ft. Aluminum: $35-$55/ft. Typical 150 ft yard: $4k-$11k." },
            { q: "Permit needed?", a: "Usually no for standard residential fences under 7 ft. HOA approval almost always required. Corner lots and setback zones may need permits." },
            { q: "Bundle with deck?", a: "Yes save 15-25% by building fence + deck together. Shared mobilization and delivery." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/services/fence', 'Fence Services'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Rules'],
              ['/services/fence-cleaning', 'Fence Cleaning'],
              ['/deck-design-ideas-2026', 'Deck Design Ideas'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Get Your Fence Quote" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
