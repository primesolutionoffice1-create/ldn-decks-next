import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/fire-pit-builder-northern-virginia',
  title: 'Fire Pit Builder in Northern Virginia | Custom Gas & Wood Fire Pits',
  description: 'Custom fire pits in Northern Virginia from $3,000-$20,000. Gas fire pits, wood-burning, fire tables, stone surrounds. Combine with deck or patio. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a fire pit cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Custom fire pits in Northern Virginia: portable gas/wood fire bowls $500-$2,000, built-in gas fire pit $3,000-$8,000, stone surround fire pit with seating wall $8,000-$15,000, fire pit + patio combo $12,000-$25,000. Gas fire pits require a gas line ($1,000-$3,000 additional if not existing)." } },
    { "@type": "Question", name: "Can I put a fire pit on a composite deck?", acceptedAnswer: { "@type": "Answer", text: "Not directly open flame or extreme heat will damage composite decking. Options: gas fire pit on a non-combustible pad (stone/tile insert in the deck), fire pit on an adjacent patio at grade level, or a fire table with a glass wind guard (minimal radiant heat). We design safe fire feature integration for every project." } },
    { "@type": "Question", name: "Gas fire pit vs wood-burning which is better?", acceptedAnswer: { "@type": "Answer", text: "Gas: instant on/off, no smoke/sparks, clean, adjustable flame, no wood storage needed. Better for decks and close-neighbor properties. Wood: authentic crackle/smell, no gas line needed, lower install cost. Better for larger lots away from structures. Most Northern Virginia HOAs prefer gas for safety." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function FirePitBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img64.jpeg"
              alt="Custom outdoor fire pit and entertainment area built by LDN Decks"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Fire Pits The Heart of Your Outdoor Living Space</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Custom gas &amp; wood-burning fire pits standalone, built-in, and deck-integrated designs</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</a>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Fire Pit Options &amp; Pricing</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Type', 'Price Range', 'Fuel', 'Best For'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Portable fire bowl/table', '$500–$2,000', 'Propane/gas', 'Flexibility, rentals, small spaces'],
                  ['Built-in gas fire pit', '$3,000–$8,000', 'Natural gas line', 'Clean, instant, deck-adjacent'],
                  ['Stone surround (wood-burning)', '$5,000–$12,000', 'Wood logs', 'Large lots, campfire experience'],
                  ['Fire pit + seating wall', '$8,000–$18,000', 'Gas or wood', 'Gathering spot, entertaining'],
                  ['Fire pit + paver patio combo', '$12,000–$25,000', 'Gas or wood', 'Complete outdoor room at grade'],
                  ['Fire table (rectangular)', '$2,000–$6,000', 'Propane/natural gas', 'Dining integration, modern look'],
                  ['Deck-integrated gas feature', '$4,000–$10,000', 'Natural gas', 'Built into deck with non-combustible pad'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Gas vs Wood-Burning Fire Pit</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#fff3e0', border: '2px solid var(--color-primary)', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-primary)' }}>Gas Fire Pit (Recommended for NoVA)</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>Instant on/off no startup or cleanup</li>
                <li style={{ marginBottom: '0.4rem' }}>No smoke, no sparks, no ash</li>
                <li style={{ marginBottom: '0.4rem' }}>Adjustable flame height</li>
                <li style={{ marginBottom: '0.4rem' }}>Safe near deck/house structures</li>
                <li style={{ marginBottom: '0.4rem' }}>HOA-preferred (most allow gas, restrict wood)</li>
                <li style={{ marginBottom: '0.4rem' }}>No wood storage or hauling</li>
                <li style={{ marginBottom: '0.4rem' }}>Cost: $3k–$10k + gas line ($1k–$3k if new)</li>
              </ul>
            </div>
            <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem' }}>Wood-Burning Fire Pit</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>Authentic campfire experience (crackle, smell)</li>
                <li style={{ marginBottom: '0.4rem' }}>No gas line required lower install cost</li>
                <li style={{ marginBottom: '0.4rem' }}>Higher heat output</li>
                <li style={{ marginBottom: '0.4rem' }}>Requires 15+ ft from structures (fire code)</li>
                <li style={{ marginBottom: '0.4rem' }}>Smoke can bother neighbors on small lots</li>
                <li style={{ marginBottom: '0.4rem' }}>Some HOAs prohibit wood-burning</li>
                <li style={{ marginBottom: '0.4rem' }}>Cost: $5k–$12k (no gas line needed)</li>
              </ul>
            </div>
          </div>

          <h2 style={S.h2}>Fire Pit + Deck Integration</h2>
          <p style={S.p}><strong>Can I put a fire pit on my composite deck?</strong> Not directly but we have safe solutions:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Non-combustible pad:</strong> We build a stone/tile insert into the deck surface (2x2 to 3x3 ft) where the gas fire pit sits. Protects the composite from heat.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Fire table with glass guard:</strong> Rectangular gas fire tables produce minimal radiant heat safe on composite with a heat shield underneath.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Adjacent ground-level:</strong> Fire pit on a paver/stone pad at the base of deck stairs. Most popular separates the fire zone from the deck surface.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Multi-level design:</strong> Upper deck for dining, lower stone patio with built-in fire pit. <Link href="/multi-level-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>See multi-level deck options</Link>.</li>
          </ul>

          <h2 style={S.h2}>Real Fire Pit Projects</h2>
          {[
            { price: '$6,500', desc: 'Built-in Gas Fire Pit, Ashburn', detail: 'Round stone-surround gas fire pit on existing paver patio. Natural stone cap, fire glass media, gas line run from house. Broadlands HOA approved.' },
            { price: '$14,000', desc: 'Fire Pit + Seating Wall, Leesburg', detail: 'Custom stone fire pit with 180-degree seating wall (seats 8). Flagstone cap. Gas-powered. Integrated into existing landscape. Loudoun County permit for gas line.' },
            { price: '$22,000', desc: 'Fire Pit + Paver Patio, Centreville', detail: '250 sqft paver patio with centered fire pit and surrounding Adirondack seating area. Gas line, landscape lighting, and planting beds. Complete backyard transformation.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Fire pit cost in NoVA?", a: "Gas built-in: $3k-$8k. Stone surround: $5k-$12k. Fire pit + patio combo: $12k-$25k. Gas line adds $1k-$3k if new." },
            { q: "Can I put one on my deck?", a: "Not directly on composite. Options: non-combustible pad insert, fire table with heat shield, or adjacent ground-level patio." },
            { q: "Gas vs wood?", a: "Gas: clean, instant, safe near structures, HOA-friendly. Wood: authentic, no gas line needed. Most NoVA HOAs prefer gas." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/services/fire-pits', 'Fire Pit Services'],
              ['/outdoor-kitchen-builder-northern-virginia', 'Outdoor Kitchen Builder'],
              ['/deck-vs-patio-which-is-right', 'Deck vs Patio'],
              ['/deck-design-ideas-2026', 'Deck Design Ideas'],
              ['/multi-level-deck-builder-northern-virginia', 'Multi-Level Decks'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Design Your Fire Feature" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
