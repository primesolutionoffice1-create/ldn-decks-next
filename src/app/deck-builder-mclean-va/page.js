import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import RatingBadge from '@/components/RatingBadge';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-mclean-va',
  title: 'Deck Builder in McLean VA | Trex & Composite | LDN Decks',
  description: 'Top-rated deck builder serving McLean, VA. 5.0★ Google (41 reviews). Custom Trex & TimberTech decks, screened porches, patios. Free estimate. Call (571) 655-7207.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in McLean, VA?", acceptedAnswer: { "@type": "Answer", text: "Deck projects in McLean typically range from $30,000-$75,000+ due to larger lot sizes, premium material preferences, and Fairfax County permitting. Composite decks average $45-$75/sqft installed. McLean homeowners often opt for Trex Transcend or TimberTech AZEK." } },
    { "@type": "Question", name: "Do I need HOA approval for a deck in McLean?", acceptedAnswer: { "@type": "Answer", text: "Many McLean neighborhoods including Langley Forest, Chesterbrook, and the Farms of McLean have HOA or covenant restrictions. We check your specific community's requirements and handle all submissions. Some McLean homes on larger lots have no HOA." } },
    { "@type": "Question", name: "What deck permits does McLean require?", acceptedAnswer: { "@type": "Answer", text: "McLean falls under Fairfax County jurisdiction. Decks require building permits with zoning and structural review. Plan review takes 3-6 weeks. We handle all permitting." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function McLeanDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in McLean, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Premium composite decks, screened porches &amp; outdoor living for McLean homeowners</p>
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
              src="/images/img64.jpeg"
              alt="Luxury custom deck builder services in McLean, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>

          <h2 style={S.h2}>Why McLean Homeowners Choose Loudoun Decks</h2>
          <p style={S.p}>McLean homes demand premium craftsmanship. With home values averaging $1.2M+ and lot sizes that allow expansive outdoor living, McLean deck projects are among our most detailed and rewarding builds. We specialize in the high-end composite and screened porch work that McLean properties deserve.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Premium materials:</strong> Trex Transcend, TimberTech AZEK, and exotic hardwoods not builder-grade products</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Fairfax County expertise:</strong> We know the zoning setbacks, lot coverage rules, and RPA (Resource Protection Area) requirements that affect many McLean lots near the Potomac</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>HOA and covenant compliance:</strong> We work within the guidelines of Langley Forest, Chesterbrook, Salona Village, the Farms, and other McLean communities</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Design complexity:</strong> Multi-level decks, wraparound designs, integrated outdoor kitchens, and screened porches with fireplaces</li>
          </ul>

          <h2 style={S.h2}>What We Build in McLean</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Custom Composite Decks', desc: 'Trex Transcend, TimberTech AZEK — multi-level, wraparound, with premium railings and lighting', link: '/services/new-decks' },
              { title: 'Screened Porches', desc: 'EZE-Breeze, retractable screens, fireplaces, stained ceilings — 3-season and 4-season options', link: '/services/porches' },
              { title: 'Outdoor Kitchens', desc: 'Built-in grills, stone islands, bar counters, pizza ovens — designed for McLean entertaining', link: '/services/fire-pits' },
              { title: 'Pergolas & Covered Structures', desc: 'Freestanding and attached, with optional louvered roofs for adjustable shade', link: '/services/gazebo-pergola' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem', lineHeight: 1.6 }}>{item.desc}</p>
                <Link href={item.link} style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Learn more →</Link>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>McLean Deck Projects What to Expect</h2>
          <p style={S.p}><strong>Typical project range:</strong> $35,000–$85,000. McLean homeowners typically choose premium materials (AZEK, Trex Transcend) with upgraded features (integrated lighting, cable railings, stone elements).</p>
          <p style={S.p}><strong>Permits:</strong> McLean is in Fairfax County. Deck permits require zoning + building review, typically 3–6 weeks. Many McLean lots near the Potomac are in RPA zones with additional environmental review. <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our Fairfax County permit guide</Link>.</p>
          <p style={S.p}><strong>HOA/Covenants:</strong> Some McLean neighborhoods have HOA architectural review; others operate under deed covenants that restrict materials, colors, or structures. We research your specific property&apos;s restrictions before design begins.</p>

          <h2 style={S.h2}>Featured McLean Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$68,000 — 550 sqft Deck + Screened Porch, Langley Forest</h3>
            <p style={{ lineHeight: 1.7 }}>Multi-level TimberTech AZEK deck (350 sqft) in Dark Hickory connected to a screened porch (200 sqft) with retractable screens, tongue-and-groove cedar ceiling, electric heater, and built-in bar counter. Trex Signature railings with integrated post cap lights. Fairfax County RPA review + building permit. HOA approved first submission. 5.5-week build.</p>
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How much does a deck cost in McLean?", a: "$35,000-$85,000+ for most projects. McLean homeowners typically choose Trex Transcend or TimberTech AZEK with upgraded features." },
            { q: "Do I need HOA approval in McLean?", a: "Depends on your neighborhood. Langley Forest, Chesterbrook, and the Farms have restrictions. Some McLean homes on large lots have no HOA. We check for you." },
            { q: "What permits does McLean require?", a: "Fairfax County building permit with zoning + structural review. 3-6 weeks. Lots near the Potomac may need RPA review. We handle everything." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Also Serving Nearby Areas</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {[
              ['/near-you/fairfax-county/great-falls', 'Great Falls'],
              ['/near-you/fairfax-county/vienna', 'Vienna'],
              ['/near-you/fairfax-county/tysons', 'Tysons'],
              ['/near-you/fairfax-county/falls-church', 'Falls Church'],
              ['/near-you/fairfax-county/oakton', 'Oakton'],
              ['/near-you/fairfax-county/reston', 'Reston'],
            ].map(([href, text]) => (
              <li key={href}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 500, padding: '0.25rem 0.75rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}>{text}</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Get Your McLean Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-mclean-va" />
      <ContactHome />
    </>
  );
}
