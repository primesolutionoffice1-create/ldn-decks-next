import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/pergola-builder-northern-virginia',
  title: 'Pergola Builder in Northern Virginia | Custom Pergolas & Shade Structures',
  description: 'Custom pergolas in Northern Virginia from $8,000-$35,000. Attached, freestanding, louvered roof options. Composite, vinyl, wood. Free design consultation.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a pergola cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Pergolas in Northern Virginia cost $8,000-$35,000+ depending on size, material, and features. Basic 10x10 PT wood: $8k-$12k. Standard 12x14 composite/vinyl: $12k-$20k. Premium louvered roof 14x16: $20k-$35k+. Attached to a deck costs less than freestanding." } },
    { "@type": "Question", name: "Do I need a permit for a pergola in Virginia?", acceptedAnswer: { "@type": "Answer", text: "It depends on your county and the pergola size. Generally: attached pergolas and those over 200 sqft need permits. Freestanding pergolas under 200 sqft may be exempt in some counties. We determine requirements and handle permitting." } },
    { "@type": "Question", name: "What is a louvered pergola?", acceptedAnswer: { "@type": "Answer", text: "A louvered pergola has adjustable roof slats that rotate open (for sun/airflow) or closed (for rain/shade). Motorized versions open and close with a remote. They provide the flexibility of a pergola with near-solid-roof rain protection when closed. Cost: $20k-$35k+ in Northern Virginia." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function PergolaBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img15.jpeg"
              alt="Premium custom pergola built by LDN Decks in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Pergolas Architectural Shade and Style</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Custom pergolas &amp; shade structures attached, freestanding, louvered, and traditional</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</a>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Pergola Options &amp; Pricing</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Type', 'Size Range', 'Material', 'Price Range', 'Best For'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Basic attached', '8x10 to 12x14', 'Pressure-treated wood', '$8k–$14k', 'Budget shade over deck'],
                  ['Standard attached', '10x12 to 14x16', 'Vinyl/composite/cedar', '$12k–$22k', 'Most popular low maintenance'],
                  ['Freestanding', '10x10 to 16x20', 'Vinyl/composite/wood', '$14k–$28k', 'Garden focal point, patio shade'],
                  ['Louvered roof (motorized)', '10x12 to 16x20', 'Aluminum + composite', '$20k–$35k+', 'Adjustable shade + rain protection'],
                  ['Pergola + deck combo', 'Varies', 'Matches deck material', '$30k–$55k total', 'Complete outdoor room'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Pergola Styles We Build</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Traditional Rafter Pergola', desc: 'Open rafters providing partial shade and architectural interest. Climbing vines optional for natural coverage. Classic look for any home style.', range: '$8k–$20k' },
              { title: 'Louvered Roof Pergola', desc: 'Adjustable aluminum louvers rotate from open (full sun) to closed (rain protection). Motorized remote control. Near-solid-roof when closed.', range: '$20k–$35k+' },
              { title: 'Shade Sail Pergola', desc: 'Structural posts with retractable or fixed fabric shade sails. Modern aesthetic, lightweight, excellent UV protection. Most affordable shade solution.', range: '$6k–$15k' },
              { title: 'Attached Deck Pergola', desc: 'Integrated with your deck structure shares posts and framing. Provides a defined dining or lounge zone. Often combined with string lights.', range: '$10k–$22k' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{item.range}</p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Why Add a Pergola to Your Deck?</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Shade without walls:</strong> Reduces deck surface temperature by 10-20°F while maintaining open-air feeling</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Define outdoor rooms:</strong> Creates a visual ceiling that makes the space feel like a room, not just a platform</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>String light mounting:</strong> Pergola rafters are the perfect anchor for overhead bistro/string lights</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Vine support:</strong> Wisteria, clematis, grape vines natural shade that improves yearly</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Home value:</strong> Pergolas add 50-65% ROI at resale buyers see a finished outdoor space</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Fan mounting:</strong> Pergola beams support outdoor ceiling fans for air circulation on hot days</li>
          </ul>

          <h2 style={S.h2}>Permits for Pergolas in Northern Virginia</h2>
          <p style={S.p}><strong>Attached pergolas:</strong> Usually require building permits (connected to the house structure). Same process as a deck permit.</p>
          <p style={S.p}><strong>Freestanding under 200 sqft:</strong> May be exempt in some counties we confirm with your specific jurisdiction.</p>
          <p style={S.p}><strong>Freestanding over 200 sqft:</strong> Typically requires a permit.</p>
          <p style={S.p}><strong>HOA:</strong> Most HOAs require architectural review for any pergola. We handle all submissions.</p>

          <h2 style={S.h2}>Real Pergola Projects</h2>
          {[
            { price: '$14,000', desc: '10x14 Attached Pergola, Ashburn', detail: 'Vinyl pergola attached to existing Trex deck. White vinyl to match home trim. Overhead string lights pre-wired. Loudoun County permit. 1-week build.' },
            { price: '$28,000', desc: '14x16 Louvered Roof, McLean', detail: 'Motorized aluminum louvered roof pergola over outdoor dining area. Adjustable from full-sun to full-coverage with remote. Integrated rain gutters. Fairfax County permit. 2-week build.' },
            { price: '$42,000', desc: '350 sqft Deck + 12x14 Pergola, Centreville', detail: 'New Trex Transcend deck with integrated attached pergola. Pergola defines the dining zone. Ceiling fan, string lights, 2 retractable shade panels. Combined project saved $5k vs separate builds.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Pergola cost in Northern Virginia?", a: "Basic: $8k-$14k. Standard: $12k-$22k. Louvered: $20k-$35k+. Depends on size, material, attached vs freestanding." },
            { q: "Permit needed?", a: "Attached: usually yes. Freestanding under 200 sqft: may be exempt. We determine and handle." },
            { q: "What is a louvered pergola?", a: "Adjustable roof slats open for sun/airflow, closed for rain/shade. Motorized remote control. $20k-$35k+." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/services/gazebo-pergola', 'Pergola & Gazebo Services'],
              ['/deck-design-ideas-2026', 'Deck Design Ideas 2026'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/screened-porch-cost-northern-virginia', 'Screened Porch (Full Coverage Option)'],
              ['/deck-lighting-ideas-northern-virginia', 'Deck Lighting Ideas'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Design Your Perfect Pergola" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
