import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-manassas-va',
  title: 'Deck Builder in Manassas, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Manassas, VA. 5.0★ Google. Custom Trex decks, screened porches, patios. Serving Manassas & Prince William County. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Manassas, VA?", acceptedAnswer: { "@type": "Answer", text: "Manassas deck projects typically range from $18,000-$45,000. Composite decks average $30-$55/sqft installed. Prince William County generally offers slightly lower pricing than Loudoun or Fairfax due to lower lot costs, but quality and materials are identical." } },
    { "@type": "Question", name: "Do I need a permit for a deck in Manassas?", acceptedAnswer: { "@type": "Answer", text: "The City of Manassas has its own building department. Manassas Park also has its own. Properties in unincorporated Prince William County use the county building department. We determine jurisdiction and handle all permitting — typically 2-4 weeks for plan review." } },
  ],
};

export default function ManassasDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Manassas, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks, screened porches &amp; outdoor living for Manassas &amp; Prince William County</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</a>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>★★★★★ 5.0 on Google · 41 reviews · Licensed &amp; Insured · 5-Year Warranty</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Serving Manassas &amp; All of Prince William County</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>From our second location near Manassas, we serve the entire Prince William County corridor — Manassas, Manassas Park, Gainesville, Haymarket, Bristow, Woodbridge, and beyond. Prince William offers excellent value for outdoor living projects with slightly lower costs than Fairfax and Loudoun while maintaining the same quality materials and craftsmanship.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Three jurisdictions:</strong> City of Manassas, Manassas Park, and Prince William County each have their own building departments — we know them all</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Larger lots:</strong> PW County properties often have bigger yards = bigger deck potential at better per-sqft value</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>HOA variety:</strong> From Dominion Valley estates to Signal Hill townhomes — we handle every HOA type</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Warehouse nearby:</strong> Our Manassas-area warehouse means faster material delivery to PW County jobs</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Manassas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'New Composite Decks', range: '$18k–$45k', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', range: '$10k–$25k', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: '$22k–$55k', link: '/services/porches' },
              { title: 'Pergolas & Gazebos', range: '$8k–$25k', link: '/services/gazebo-pergola' },
              { title: 'Patios (Pavers)', range: '$8k–$20k', link: '/services/patios' },
              { title: 'Fencing', range: '$4k–$12k', link: '/services/fence' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Manassas Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$28,000 — 350 sqft Trex Enhance Deck, Signal Hill</h3>
            <p style={{ lineHeight: 1.7 }}>Budget-friendly composite build replacing a rotting wood deck. Trex Enhance in Saddle with aluminum railings and 4 stair lights. Prince William County permit (approved in 2 weeks). HOA submission handled. 2-week build. Client saved $8k vs Transcend while getting a 25-year warranty deck.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a deck cost in Manassas?", a: "$18,000-$45,000 for most projects. Composite: $30-$55/sqft. PW County offers 10-15% better value than Fairfax/Loudoun." },
            { q: "Do I need a permit?", a: "City of Manassas, Manassas Park, or PW County depending on your address. We determine which and handle everything. Typical: 2-4 weeks." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving Nearby</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/near-you/prince-william-county/gainesville', 'Gainesville'],
              ['/near-you/prince-william-county/haymarket', 'Haymarket'],
              ['/near-you/prince-william-county/bristow', 'Bristow'],
              ['/near-you/prince-william-county/woodbridge', 'Woodbridge'],
              ['/near-you/prince-william-county/lake-ridge', 'Lake Ridge'],
              ['/deck-builder-centreville-va', 'Centreville'],
              ['/near-you/fairfax-county/chantilly', 'Chantilly'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Get Your Manassas Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
