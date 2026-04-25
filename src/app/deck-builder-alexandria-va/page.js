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
  path: '/deck-builder-alexandria-va',
  title: 'Deck Builder in Alexandria, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Alexandria, VA. 5.0★ Google. Custom Trex decks, screened porches. Old Town to West End. City + Fairfax County permits. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Alexandria, VA?", acceptedAnswer: { "@type": "Answer", text: "Alexandria deck projects range from $25,000-$65,000. Composite decks: $40-$70/sqft installed. Alexandria's historic districts (Old Town) may have additional design restrictions. West End and Kingstowne properties offer more flexibility." } },
    { "@type": "Question", name: "City of Alexandria vs Fairfax County which permit?", acceptedAnswer: { "@type": "Answer", text: "The City of Alexandria is independent with its own building department and historic preservation office. Many 'Alexandria' addresses (22303, 22306, 22309, 22315) are actually in Fairfax County. We determine your jurisdiction and handle permitting." } },
  ],
};

export default function AlexandriaDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Alexandria, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks &amp; screened porches for Alexandria Old Town to Kingstowne</p>
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
              src="/images/img10.jpeg"
              alt="Premium custom deck installation by LDN Decks in Alexandria, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Alexandria Historic Charm Meets Modern Outdoor Living</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Alexandria ranges from the historic rowhouses of Old Town to the established neighborhoods of Del Ray, Seminary Hill, and West End, to the newer developments in Kingstowne and Franconia. Each area has distinct lot sizes, architectural styles, and permitting requirements and we navigate all of them.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Historic district expertise:</strong> Old Town and Parker-Gray have Board of Architectural Review (BAR) requirements we design within historic guidelines</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Compact lot design:</strong> Del Ray and Rosemont lots are small we maximize every square foot with creative multi-level and L-shaped designs</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Two jurisdictions:</strong> City of Alexandria (independent) vs Fairfax County many &quot;Alexandria&quot; addresses are actually in the County</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Premium materials:</strong> Alexandria homeowners appreciate quality Trex Transcend and TimberTech AZEK are our most-specified products here</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Alexandria Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$46,000 350 sqft Deck + 160 sqft Screened Porch, Seminary Hill</h3>
            <p style={{ lineHeight: 1.7 }}>L-shaped composite deck connecting to a screened porch on a narrow but deep lot. Trex Transcend in Tiki Torch with Trex Signature railings. EZE-Breeze panels on the porch with ceiling fan and recessed lights. City of Alexandria building permit (no BAR review needed outside historic district). 3.5-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Alexandria Neighborhoods</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Old Town', 'Del Ray', 'Seminary Hill', 'Rosemont', 'West End', 'Kingstowne', 'Franconia', 'Belle Haven', 'Hollin Hills', 'Mount Vernon', 'Fort Hunt', 'Huntington'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Alexandria?", a: "$25,000-$65,000. Composite: $40-$70/sqft. Historic districts may add design requirements." },
            { q: "Which permit City or County?", a: "City of Alexandria is independent. Many 'Alexandria' zip codes (22303, 22306, 22309, 22315) are Fairfax County. We determine jurisdiction." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/near-you/arlington-county/arlington', 'Arlington'],
              ['/deck-builder-falls-church-va', 'Falls Church'],
              ['/near-you/fairfax-county/springfield', 'Springfield'],
              ['/near-you/fairfax-county/annandale', 'Annandale'],
              ['/near-you/fairfax-county/lorton', 'Lorton'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Get Your Alexandria Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-alexandria-va" />
      <ContactHome />
    </>
  );
}
