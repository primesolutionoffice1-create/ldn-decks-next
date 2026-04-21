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
  path: '/deck-builder-vienna-va',
  title: 'Deck Builder in Vienna VA | Custom Decks | LDN Decks',
  description: 'Top-rated deck builder serving Vienna, VA. 5.0★ Google (41 reviews). Custom Trex & TimberTech decks, screened porches. Free estimate. Call (571) 655-7207.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Vienna, VA?", acceptedAnswer: { "@type": "Answer", text: "Most Vienna deck projects range from $25,000-$65,000. Composite decks average $40-$65/sqft installed. Vienna's mix of townhomes and single-family homes means project sizes vary widely from 200 sqft townhome decks to 500+ sqft estate builds." } },
    { "@type": "Question", name: "Do I need a permit for a deck in Vienna?", acceptedAnswer: { "@type": "Answer", text: "The Town of Vienna has its own building department (separate from Fairfax County) for properties within town limits. Properties in the Vienna zip code but outside town limits fall under Fairfax County. We determine which jurisdiction applies and handle all permitting." } },
    { "@type": "Question", name: "Do Vienna HOAs allow composite decks?", acceptedAnswer: { "@type": "Answer", text: "Most Vienna HOAs allow and even prefer composite decking because it maintains a consistent appearance over time. We check your specific HOA guidelines before material selection." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function ViennaDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img37.jpeg"
              alt="Premium custom deck built by LDN Decks in Vienna, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Vienna Luxury Outdoor Living in the Heart of Fairfax</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks, screened porches &amp; outdoor living for Vienna homeowners</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</a>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>★★★★★ 5.0 on Google · 41 reviews · Licensed &amp; Insured · 5-Year Warranty</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Why Vienna Homeowners Choose Loudoun Decks</h2>
          <p style={S.p}>Vienna combines established neighborhoods with newer developments, creating diverse outdoor living needs. Whether you&apos;re replacing an aging wood deck in Tysons Woods or building a new composite deck in a Vienna single-family home, we deliver the quality and attention to detail that Vienna properties deserve.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Town of Vienna + Fairfax County expertise:</strong> We know which jurisdiction applies to your property and handle permitting accordingly</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Neighborhood familiarity:</strong> We&apos;ve built in Tysons Woods, Vienna Woods, Windover Heights, Country Creek, and many other Vienna communities</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Right-sized projects:</strong> From compact townhome decks (200 sqft) to spacious single-family builds (500+ sqft)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Premium materials:</strong> Trex Transcend, TimberTech, AZEK composite decking that matches Vienna&apos;s well-maintained aesthetic</li>
          </ul>

          <h2 style={S.h2}>Services in Vienna</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'New Composite Decks', range: '$20k–$50k', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', range: '$12k–$30k', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: '$25k–$60k', link: '/services/porches' },
              { title: 'Pergolas & Gazebos', range: '$10k–$30k', link: '/services/gazebo-pergola' },
              { title: 'Fencing', range: '$5k–$15k', link: '/services/fence' },
              { title: 'Deck Staining', range: '$600–$2,000', link: '/deck-staining-northern-virginia' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={S.h2}>Featured Vienna Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$36,000 380 sqft Trex Transcend Deck, Vienna Woods</h3>
            <p style={{ lineHeight: 1.7 }}>Single-level composite deck replacing a 15-year-old pressure-treated original. Trex Transcend in Spiced Rum with Trex Signature railings in Charcoal Black, 6 integrated stair lights, and a built-in planter box. Town of Vienna building permit. HOA approved in one submission. 3-week build.</p>
          </div>

          <h2 style={S.h2}>Vienna Permitting</h2>
          <p style={S.p}><strong>Town of Vienna:</strong> Properties within the Town of Vienna limits have their own building department at Vienna Town Hall. Plan review is typically faster than Fairfax County 1-3 weeks for standard deck plans.</p>
          <p style={S.p}><strong>Fairfax County:</strong> Properties in the 22180/22182 zip codes but outside town limits fall under Fairfax County&apos;s building department. Plan review: 3-6 weeks. <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our Fairfax County permit guide</Link>.</p>
          <p style={S.p}><strong>Not sure which applies?</strong> Tell us your address we&apos;ll determine jurisdiction and handle everything.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a deck cost in Vienna?", a: "$25,000-$65,000 for most projects. Composite decks: $40-$65/sqft installed." },
            { q: "Do I need a permit?", a: "Yes. Town of Vienna or Fairfax County depending on your exact location. We determine which and handle everything." },
            { q: "Do HOAs allow composite?", a: "Most Vienna HOAs prefer composite for consistent appearance. We check your specific guidelines." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Also Serving Nearby</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-mclean-va', 'McLean'],
              ['/deck-builder-great-falls-va', 'Great Falls'],
              ['/near-you/fairfax-county/oakton', 'Oakton'],
              ['/near-you/fairfax-county/fairfax', 'Fairfax'],
              ['/near-you/fairfax-county/tysons', 'Tysons'],
              ['/near-you/fairfax-county/falls-church', 'Falls Church'],
              ['/near-you/fairfax-county/reston', 'Reston'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Get Your Vienna Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-vienna-va" />
      <ContactHome />
    </>
  );
}
