import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-herndon-va',
  title: 'Deck Builder in Herndon, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Herndon, VA. 5.0★ Google. Custom Trex & TimberTech decks, screened porches, patios. Serving Herndon & Reston area. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Herndon, VA?", acceptedAnswer: { "@type": "Answer", text: "Most Herndon deck projects range from $22,000-$55,000. Composite decks average $35-$60/sqft installed. Herndon's mix of established neighborhoods (Fox Mill, Reflection Lake) and newer communities provides diverse project sizes." } },
    { "@type": "Question", name: "Do I need a permit for a deck in Herndon?", acceptedAnswer: { "@type": "Answer", text: "The Town of Herndon has its own building department for properties within town limits. Properties outside town limits fall under Fairfax County. We determine which applies and handle all permitting." } },
  ],
};

export default function HerndonDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Herndon, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks, screened porches &amp; outdoor living for Herndon homeowners</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</a>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>★★★★★ 5.0 on Google · 41 reviews · Licensed &amp; Insured · 5-Year Warranty</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img26.jpeg"
              alt="Premium custom deck built by LDN Decks in Herndon, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Herndon — Where Innovation Meets Outdoor Living</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Herndon offers a mix of established neighborhoods with mature trees and newer developments near the Dulles Toll Road corridor. Whether you&apos;re upgrading an aging wood deck in Fox Mill Estates or building new in the Worldgate area, we deliver quality craftsmanship that Herndon homeowners expect.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Town of Herndon + Fairfax County permitting:</strong> We know which jurisdiction covers your property</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Tree-heavy lots:</strong> Many Herndon properties have significant tree canopy — we design around root zones and shade patterns</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>HOA expertise:</strong> Fox Mill, Reflection Lake, McNair Farms, and other Herndon HOAs — we handle submissions</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Proximity:</strong> 15 minutes from our Centreville office — fast site visits and responsive service</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Herndon Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$31,000 — 340 sqft Trex Transcend Deck, Fox Mill Estates</h3>
            <p style={{ lineHeight: 1.7 }}>Replacing a 14-year-old pressure-treated deck. Trex Transcend in Foggy Wharf (lighter color to stay cool under partial shade). Aluminum railings in black, integrated stair lights, and new concrete landing pad at grade. Town of Herndon building permit. 2.5-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a deck cost in Herndon?", a: "$22,000-$55,000 for most projects. Composite: $35-$60/sqft installed." },
            { q: "Do I need a permit?", a: "Town of Herndon or Fairfax County depending on location. We determine and handle everything." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving Nearby</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-reston-va', 'Reston'],
              ['/near-you/loudoun-county/sterling', 'Sterling'],
              ['/near-you/fairfax-county/chantilly', 'Chantilly'],
              ['/deck-builder-vienna-va', 'Vienna'],
              ['/near-you/fairfax-county/oakton', 'Oakton'],
              ['/near-you/fairfax-county/tysons', 'Tysons'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Get Your Herndon Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
