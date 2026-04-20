import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-fairfax-va',
  title: 'Deck Builder in Fairfax, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Fairfax, VA. 5.0★ Google. Custom Trex & TimberTech decks, screened porches, patios. City of Fairfax + County permits handled. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Fairfax, VA?", acceptedAnswer: { "@type": "Answer", text: "Fairfax deck projects range from $22,000-$55,000. Composite decks average $35-$65/sqft installed. The City of Fairfax and surrounding Fairfax County areas have moderate lot sizes with strong demand for deck replacements and screened porches." } },
    { "@type": "Question", name: "City of Fairfax vs Fairfax County — which permit do I need?", acceptedAnswer: { "@type": "Answer", text: "The City of Fairfax (independent city) has its own building department. Properties in the 22030/22031/22032 zip codes may be in either the City or the County — they overlap. We determine your exact jurisdiction and handle the correct permitting process." } },
  ],
};

export default function FairfaxDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Fairfax, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks, screened porches &amp; outdoor living for Fairfax City &amp; County homeowners</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</a>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>★★★★★ 5.0 on Google · 41 reviews · Licensed &amp; Insured · 5-Year Warranty</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Serving Fairfax City &amp; Surrounding County</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The Fairfax area is a hub of established single-family neighborhoods with mature lots — many with original decks from the 1990s-2000s that are ready for replacement. We specialize in transforming these aging wood decks into modern, maintenance-free composite outdoor living spaces.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>City + County jurisdiction expertise:</strong> City of Fairfax and Fairfax County have separate building departments — we navigate both</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Established neighborhoods:</strong> Fairfax Station, Burke, Kings Park, Mantua, Mosby Woods, Fairfax Hills</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Deck replacement specialists:</strong> Hundreds of Fairfax homes need their 20+ year old decks upgraded</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Close to HQ:</strong> Adjacent to our Centreville office — responsive service</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Fairfax</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Custom Composite Decks', range: '$22k–$55k', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', range: '$12k–$28k', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: '$25k–$60k', link: '/services/porches' },
              { title: 'Pergolas & Gazebos', range: '$10k–$28k', link: '/services/gazebo-pergola' },
              { title: 'Patios', range: '$8k–$22k', link: '/services/patios' },
              { title: 'Fencing', range: '$5k–$14k', link: '/services/fence' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Fairfax Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$38,000 — 420 sqft Multi-Level Deck, Kings Park</h3>
            <p style={{ lineHeight: 1.7 }}>Two-level composite deck on a sloped lot. Upper dining area (280 sqft) off the kitchen, lower lounge (140 sqft) with built-in bench and fire pit pad at grade. Trex Transcend in Havana Gold, Trex Signature railings, 12 integrated stair lights. City of Fairfax building permit. 3.5-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>City of Fairfax vs Fairfax County Permits</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Important distinction:</strong> The City of Fairfax is an independent city with its own building department, separate from Fairfax County. Properties in the 22030/22031/22032 zip codes can be in either jurisdiction — they overlap geographically.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>City of Fairfax:</strong> Generally faster permit processing (2-3 weeks) and slightly lower fees than the county. Smaller department = more personal service.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>Fairfax County:</strong> Larger department, 3-6 weeks for standard plan review. More complex zoning rules. <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our full Fairfax County permit guide</Link>.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>Not sure which you&apos;re in?</strong> Give us your address and we determine the correct jurisdiction instantly.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Fairfax?", a: "$22,000-$55,000. Composite: $35-$65/sqft installed." },
            { q: "City or County permit?", a: "Depends on exact address — City of Fairfax and Fairfax County overlap in 22030/22031/22032 zip codes. We determine and handle the correct one." },
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
              ['/deck-builder-vienna-va', 'Vienna'],
              ['/near-you/fairfax-county/burke', 'Burke'],
              ['/near-you/fairfax-county/springfield', 'Springfield'],
              ['/near-you/fairfax-county/annandale', 'Annandale'],
              ['/deck-builder-chantilly-va', 'Chantilly'],
              ['/near-you/fairfax-county/oakton', 'Oakton'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Get Your Fairfax Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
