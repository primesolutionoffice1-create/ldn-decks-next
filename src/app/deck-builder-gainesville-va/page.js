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
  path: '/deck-builder-gainesville-va',
  title: 'Deck Builder in Gainesville, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Gainesville, VA. 5.0★ Google. Trex & TimberTech decks, porches. Serving Heritage Hunt, Virginia Oaks, Piedmont. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Gainesville, VA?", acceptedAnswer: { "@type": "Answer", text: "Gainesville deck projects range from $18,000-$48,000. Composite decks average $30-$55/sqft installed. Gainesville's newer developments (Heritage Hunt, Virginia Oaks, Piedmont) often have builder-grade decks ready for upgrade." } },
    { "@type": "Question", name: "Do Gainesville HOAs allow composite decks?", acceptedAnswer: { "@type": "Answer", text: "Yes — most Gainesville HOAs prefer composite over wood because it maintains consistent appearance. Heritage Hunt, Virginia Oaks, Piedmont, and University all allow composite. We check specific guidelines before material selection." } },
  ],
};

export default function GainesvilleDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Gainesville, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks &amp; outdoor living for Gainesville — Heritage Hunt, Virginia Oaks, Piedmont</p>
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
              src="/images/img13.jpeg"
              alt="Premium custom deck built by LDN Decks in Gainesville, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Gainesville — Modern Luxury in Prince William County</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Gainesville&apos;s newer communities often come with builder-grade pressure-treated decks that start showing wear within 5-8 years. We specialize in upgrading these to premium composite — transforming basic builder decks into custom outdoor living spaces. Many Gainesville homeowners add screened porches and outdoor kitchens during the upgrade.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Builder-grade upgrades:</strong> Replace your 5-8 year old PT deck with Trex — often keeping the original frame to save cost</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Growing communities:</strong> Heritage Hunt, Virginia Oaks, Piedmont, University, Bull Run — we build in all of them</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>PW County permitting:</strong> Fast 2-4 week plan review. We handle everything.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Great value:</strong> Gainesville offers excellent outdoor living value — larger lots at better per-sqft costs</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Gainesville</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Composite Decks', range: '$18k–$48k', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', range: '$8k–$22k', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: '$20k–$50k', link: '/services/porches' },
              { title: 'Outdoor Kitchens', range: '$15k–$50k', link: '/outdoor-kitchen-builder-northern-virginia' },
              { title: 'Pergolas', range: '$8k–$22k', link: '/services/gazebo-pergola' },
              { title: 'Fencing', range: '$4k–$12k', link: '/services/fence' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Gainesville Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$26,000 — 340 sqft Deck Resurfacing, Heritage Hunt</h3>
            <p style={{ lineHeight: 1.7 }}>Resurfaced a 7-year-old builder-grade PT deck with Trex Transcend (Spiced Rum). Kept the original frame (structurally sound after inspection), replaced all boards, added Trex Select railings and 6 stair lights. Saved $15k vs full rebuild. PW County permit. Heritage Hunt HOA approved. 1.5-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Gainesville Neighborhoods</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Heritage Hunt', 'Virginia Oaks', 'Piedmont', 'University', 'Bull Run', 'Dominion Valley', 'Glenkirk', 'Evergreen', 'Gateway Commons', 'Somerset Crossing'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Gainesville?", a: "$18,000-$48,000. Composite: $30-$55/sqft. Great value in PW County." },
            { q: "HOA allow composite?", a: "Yes — Heritage Hunt, Virginia Oaks, Piedmont all allow and prefer composite. We check your specific guidelines." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/near-you/prince-william-county/haymarket', 'Haymarket'],
              ['/near-you/prince-william-county/bristow', 'Bristow'],
              ['/deck-builder-manassas-va', 'Manassas'],
              ['/deck-builder-centreville-va', 'Centreville'],
              ['/deck-builder-chantilly-va', 'Chantilly'],
              ['/near-you/prince-william-county/nokesville', 'Nokesville'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Upgrade Your Builder Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-gainesville-va" />
      <ContactHome />
    </>
  );
}
