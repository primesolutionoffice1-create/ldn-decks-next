import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import RatingBadge from '@/components/RatingBadge';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-chantilly-va',
  title: 'Deck Builder in Chantilly, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder serving Chantilly, VA. 5.0★ Google. Trex & TimberTech decks, screened porches. Fairfax County permits handled. Free estimate. (571) 655-7207.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Chantilly, VA?", acceptedAnswer: { "@type": "Answer", text: "Chantilly deck projects range from $22,000-$55,000. Composite decks average $35-$60/sqft installed. Chantilly has a good mix of single-family homes and townhomes, with projects ranging from compact 200 sqft builds to 500+ sqft multi-level designs." } },
    { "@type": "Question", name: "Do I need a permit in Chantilly?", acceptedAnswer: { "@type": "Answer", text: "Yes Chantilly is in Fairfax County. Building permits required with zoning + structural review, typically 3-6 weeks. We handle all submissions and inspections." } },
  ],
};

export default function ChantillyDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Chantilly, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks, screened porches &amp; outdoor living for Chantilly homeowners</p>
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
              src="/images/img35.jpeg"
              alt="Premium custom deck built by LDN Decks in Chantilly, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Chantilly Premier Outdoor Transformations</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Chantilly sits at the crossroads of Loudoun and Fairfax counties, and we serve both sides. From the Chantilly Highlands and Brookfield communities to the newer developments near Dulles Airport, we build custom outdoor living spaces that match the quality of Chantilly homes.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Minutes from HQ:</strong> Chantilly is adjacent to our Centreville headquarters fastest response times</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Neighborhood expertise:</strong> Chantilly Highlands, Brookfield, Poplar Tree, Stone Road, Fair Lakes, Greenbriar</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Fairfax County permitting:</strong> We know the Chantilly-area zoning requirements and setbacks</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>HOA handled:</strong> Every Chantilly HOA submission prepared and tracked by us</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Chantilly Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$33,000 360 sqft Trex Transcend Deck, Chantilly Highlands</h3>
            <p style={{ lineHeight: 1.7 }}>Single-level deck with wrap-around step on two sides. Trex Transcend in Spiced Rum, Trex Select railings in white, 8 LED stair lights. Replaced a faded, splintering 10-year-old PT wood deck. Fairfax County permit. HOA approved first submission. 2.5-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Chantilly?", a: "$22,000-$55,000. Composite: $35-$60/sqft installed." },
            { q: "Permit needed?", a: "Yes Fairfax County. Plan review 3-6 weeks. We handle everything." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-centreville-va', 'Centreville'],
              ['/near-you/fairfax-county/fairfax', 'Fairfax'],
              ['/deck-builder-herndon-va', 'Herndon'],
              ['/near-you/loudoun-county/south-riding', 'South Riding'],
              ['/near-you/loudoun-county/stone-ridge', 'Stone Ridge'],
              ['/deck-builder-vienna-va', 'Vienna'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Get Your Chantilly Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-chantilly-va" />
      <ContactHome />
    </>
  );
}
