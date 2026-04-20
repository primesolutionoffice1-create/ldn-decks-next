import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-woodbridge-va',
  title: 'Deck Builder in Woodbridge, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder serving Woodbridge, VA & Dale City. 5.0★ Google. Trex & TimberTech decks, screened porches. Prince William County permits handled. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Woodbridge, VA?", acceptedAnswer: { "@type": "Answer", text: "Woodbridge deck projects range from $16,000-$40,000. Composite decks average $28-$50/sqft installed. Prince William County offers some of the best deck value in Northern Virginia — same quality materials, lower labor costs than Fairfax/Loudoun." } },
    { "@type": "Question", name: "Do I need a permit in Woodbridge?", acceptedAnswer: { "@type": "Answer", text: "Yes — Woodbridge is in Prince William County. Building permits required, typically 2-4 weeks for plan review. We handle all submissions and inspections." } },
  ],
};

export default function WoodbridgeDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Woodbridge, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks, screened porches &amp; outdoor living for Woodbridge &amp; Dale City homeowners</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</a>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>★★★★★ 5.0 on Google · 41 reviews · Licensed &amp; Insured · 5-Year Warranty</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Best Value Deck Building in Prince William County</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Woodbridge and Dale City offer some of the best outdoor living value in Northern Virginia. Larger lots, lower permitting costs, and competitive labor rates mean your budget goes 10-20% further than in Loudoun or Fairfax — with the same premium materials and craftsmanship.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Best value in NoVA:</strong> Same Trex/TimberTech materials, 10-20% lower project costs</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Larger lots:</strong> More room for bigger decks, patios, and outdoor kitchens</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Fast permitting:</strong> PW County typically 2-4 weeks (faster than Fairfax)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Neighborhoods served:</strong> Dale City, Lake Ridge, Montclair, Potomac Shores, Occoquan, Yorkshire</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Woodbridge</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Composite Decks', range: '$16k–$40k', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', range: '$8k–$20k', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: '$20k–$50k', link: '/services/porches' },
              { title: 'Patios (Pavers)', range: '$6k–$18k', link: '/services/patios' },
              { title: 'Fencing', range: '$4k–$10k', link: '/services/fence' },
              { title: 'Pergolas', range: '$8k–$22k', link: '/services/gazebo-pergola' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Woodbridge Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$24,000 — 320 sqft Trex Enhance Deck, Dale City</h3>
            <p style={{ lineHeight: 1.7 }}>Budget-smart composite deck for a family of four. Trex Enhance in Clam Shell, aluminum railings, 6 stair lights. Replaced a failing 12-year-old PT wood deck. PW County permit approved in 12 business days. 2-week build. Client got a 25-year warranty deck for the price of a high-end wood deck elsewhere.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "How much for a deck in Woodbridge?", a: "$16,000-$40,000 for most projects. Composite: $28-$50/sqft. 10-20% better value than Fairfax/Loudoun." },
            { q: "Do I need a permit?", a: "Yes — Prince William County. Plan review 2-4 weeks. We handle everything." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/near-you/prince-william-county/lake-ridge', 'Lake Ridge'],
              ['/near-you/prince-william-county/montclair', 'Montclair'],
              ['/near-you/prince-william-county/dumfries', 'Dumfries'],
              ['/near-you/prince-william-county/dale-city', 'Dale City'],
              ['/near-you/prince-william-county/occoquan', 'Occoquan'],
              ['/deck-builder-manassas-va', 'Manassas'],
              ['/near-you/stafford-county/stafford', 'Stafford'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Best Deck Value in Northern Virginia" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
