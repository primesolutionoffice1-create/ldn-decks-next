import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import TrustBanner from '@/components/TrustBanner';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-resurfacing-vs-replacement',
  title: 'Deck Resurfacing vs Replacement: Which Saves You Money? (2026)',
  description: 'Resurface for $10k-$25k (keep frame) or replace for $20k-$50k (new everything). When each makes sense, inspection guide, real cost examples from Northern Virginia.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is deck resurfacing?", acceptedAnswer: { "@type": "Answer", text: "Deck resurfacing means removing the old deck boards (and usually railings) but keeping the existing frame joists, beams, posts, and footings. New composite deck boards and railings are installed on the existing structure. This saves 40-60% vs a full rebuild because you're not paying for new framing, footings, or demolition of a sound structure." } },
    { "@type": "Question", name: "When should I resurface vs replace my deck?", acceptedAnswer: { "@type": "Answer", text: "Resurface if: joists are solid (poke test), posts are straight and not rotting, footings aren't shifting, and ledger board is secure. Replace if: joists are soft/rotting, posts are leaning, footings have heaved, deck feels bouncy, or ledger is pulling away from house. We offer free inspections to determine which you need." } },
    { "@type": "Question", name: "How much does deck resurfacing cost vs replacement?", acceptedAnswer: { "@type": "Answer", text: "In Northern Virginia: resurfacing costs $10,000-$25,000 for a typical 300-400 sqft deck. Full replacement costs $20,000-$50,000 for the same size. Resurfacing saves 40-60% when the existing frame is structurally sound." } },
    { "@type": "Question", name: "How long does resurfacing take vs replacement?", acceptedAnswer: { "@type": "Answer", text: "Resurfacing: 1-2 weeks (no footing or framing work needed). Full replacement: 2-4 weeks (includes demolition, new footings, framing, then decking). Permit timeline is the same for both." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function ResurfacingVsReplacementPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Resurfacing vs Replacement</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Save 40-60% by resurfacing or invest in a full rebuild when it&apos;s the smarter choice</p>
        </div>
      </section>
      <TrustBanner />
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Resurface</strong> ($10k–$25k) if your frame is solid saves 40-60%. <strong>Replace</strong> ($20k–$50k) if joists are rotting, posts leaning, or deck feels bouncy. <strong>Not sure?</strong> We offer free inspections we&apos;ll tell you honestly which makes sense.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img26.jpeg"
              alt="Deck resurfacing process in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={S.h2}>Standard vs. Premium Resurfacing Option</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Factor', 'Resurfacing', 'Full Replacement'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['What happens', 'Remove old boards + railings, keep frame, install composite', 'Demolish everything, pour new footings, build from scratch'],
                  ['Cost (300 sqft)', '$10,000–$20,000', '$25,000–$45,000'],
                  ['Cost (500 sqft)', '$16,000–$25,000', '$35,000–$55,000'],
                  ['Savings', '40–60% less than replacement', '—'],
                  ['Build time', '1–2 weeks', '2–4 weeks'],
                  ['Requires', 'Solid frame (joists, posts, footings)', 'Nothing all new'],
                  ['Result', 'Looks 100% new on surface', 'New structure + surface'],
                  ['Permit & HOA', 'Often required we handle permits + HOA approval', 'Always required we handle permits + HOA approval'],
                  ['Warranty', '5-yr workmanship + 25-yr material', '5-yr workmanship + 25-yr material'],
                  ['When to choose', 'Frame is solid, only boards are worn/ugly', 'Structural issues, unsafe, or want new layout'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ ...S.td, fontWeight: i === 1 || i === 2 || i === 3 ? 600 : 400, color: i === 3 ? '#2e7d32' : 'inherit' }}>{row[1]}</td>
                    <td style={S.td}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>How We Determine: Resurface or Replace?</h2>
          <p style={S.p}>We offer <strong>free deck inspections</strong>. During the inspection, we check every structural component:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#e8f5e9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#2e7d32', marginBottom: '0.75rem' }}>RESURFACE ✓ (frame passes)</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Joists: firm, no sag, poke test solid</li>
                <li style={{ marginBottom: '0.5rem' }}>Posts: straight, bases not rotting</li>
                <li style={{ marginBottom: '0.5rem' }}>Footings: stable, not shifting/heaving</li>
                <li style={{ marginBottom: '0.5rem' }}>Ledger: secure, flashing intact</li>
                <li style={{ marginBottom: '0.5rem' }}>Beams: no cracks, no sag</li>
              </ul>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, marginTop: '0.75rem' }}>Cost: $10k–$25k | Time: 1–2 weeks | Permits + HOA handled</p>
            </div>
            <div style={{ background: '#ffebee', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#c62828', marginBottom: '0.75rem' }}>REPLACE ✗ (frame fails)</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Joists: soft, saggy, rotting</li>
                <li style={{ marginBottom: '0.5rem' }}>Posts: leaning, base rot</li>
                <li style={{ marginBottom: '0.5rem' }}>Footings: shifted, cracked, heaved</li>
                <li style={{ marginBottom: '0.5rem' }}>Ledger: pulling away from house</li>
                <li style={{ marginBottom: '0.5rem' }}>Deck: bounces when walked on</li>
              </ul>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, marginTop: '0.75rem' }}>Cost: $20k–$50k | Time: 2–4 weeks | Permits + HOA handled</p>
            </div>
          </div>

          <h2 style={S.h2}>Real Examples from Our Projects</h2>
          {[
            { type: 'Resurfacing', price: '$19,500', loc: 'South Riding', detail: '280 sqft deck, 12 years old. Frame solid after inspection. Removed PT boards, installed Trex Enhance + aluminum railings + stair lights. Saved $14,000 vs full rebuild. 1-week build.' },
            { type: 'Resurfacing', price: '$22,000', loc: 'Brambleton', detail: '300 sqft, 10 years old. Frame inspected OK. Trex Transcend + Trex Select railings. HOA approved. 1.5-week build.' },
            { type: 'Full Replacement', price: '$38,000', loc: 'Leesburg', detail: '480 sqft. 18-year-old deck with rotting joists and shifting footings. Full demolition + new footings + new framing + Trex Transcend + Signature railings + lighting. 3-week build.' },
            { type: 'Full Replacement', price: '$28,000', loc: 'Sterling', detail: '320 sqft. Posts rotting at base, deck bounced when walked on. Unsafe replaced everything. Trex Transcend + aluminum railings. 2.5-week build.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem', borderLeft: `4px solid ${p.type === 'Resurfacing' ? '#2e7d32' : '#c62828'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700, color: p.type === 'Resurfacing' ? '#2e7d32' : '#c62828' }}>{p.type}</span>
                <span style={{ fontWeight: 600 }}>{p.price} {p.loc}</span>
              </div>
              <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "What is deck resurfacing?", a: "Remove old boards/railings, keep the frame, install new composite. Looks 100% new. Saves 40-60% vs full rebuild." },
            { q: "When to resurface vs replace?", a: "Resurface: frame is solid (joists, posts, footings OK). Replace: structural issues (rot, lean, bounce, shifting)." },
            { q: "Cost difference?", a: "Resurface: $10k-$25k. Replace: $20k-$50k. Same size deck the difference is whether the frame stays." },
            { q: "How long?", a: "Resurface: 1-2 weeks. Replace: 2-4 weeks. Permit timeline is the same for both." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/before-and-after', 'Before & After Deck Transformations'],
              ['/services/deck-resurfacing', 'Deck Resurfacing Services'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/how-long-does-a-composite-deck-last', 'How Long Does a Deck Last?'],
              ['/deck-safety-inspection-checklist', 'Deck Safety Inspection Checklist'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <ServicesCallToAction />
      <SimpleCTA title="Free Deck Inspection Resurface or Replace?" buttonText="Schedule Free Inspection" link="/contact" />
      <ContactHome />
    </>
  );
}
