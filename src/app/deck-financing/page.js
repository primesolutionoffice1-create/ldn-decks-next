import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import Breadcrumbs from '@/components/Breadcrumbs';
import EnhancifyWidget from '@/components/EnhancifyWidget';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-financing',
  title: 'Deck Financing in Northern Virginia | 0% APR | Loudoun Decks',
  description: 'Finance your custom deck with flexible monthly payments. 0% APR options, fast pre-qualification, no impact on credit score. Apply online in 60 seconds.',
});

const faqs = [
  { q: "Does applying for deck financing affect my credit score?", a: "No. Pre-qualification is a soft credit check that does not impact your credit score. You'll see your real rates and monthly payment options before any hard inquiry." },
  { q: "What loan amounts are available for deck projects?", a: "Financing is available from $5,000 to $100,000+, covering small deck repairs through premium multi-level composite builds with screened porches and outdoor kitchens." },
  { q: "Are 0% APR options really available?", a: "Yes — promotional 0% APR financing is offered for qualified borrowers, typically on terms of 12, 18, or 24 months. Standard fixed-rate loans up to 15 years are also available." },
  { q: "How fast is approval?", a: "Most homeowners receive a pre-qualification decision within 60 seconds. Once approved and you accept a loan offer, funds are typically available before your project starts." },
  { q: "Can I use deck financing for a Trex or TimberTech composite project?", a: "Yes. Financing applies to any deck project we build, including Trex composite, TimberTech AZEK, screened porches, pergolas, and deck replacement." },
  { q: "Is there a prepayment penalty?", a: "Most loan products through our financing partner have no prepayment penalty, meaning you can pay off the loan early without extra fees." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ldndecks.com/" },
    { "@type": "ListItem", "position": 2, "name": "Deck Financing", "item": "https://www.ldndecks.com/deck-financing" }
  ]
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', marginTop: '2.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
};

const benefits = [
  { title: '0% APR Options', desc: 'Promotional 0% APR available for qualified borrowers on terms up to 24 months.' },
  { title: 'No Credit Score Impact', desc: 'Pre-qualification uses a soft credit check. See your rates without affecting your score.' },
  { title: 'Fast Pre-Approval', desc: 'Get a decision in 60 seconds. Funds available before your project starts.' },
  { title: 'Flexible Terms', desc: 'Loans from $5,000 to $100,000+ with terms up to 15 years.' },
  { title: 'No Prepayment Penalty', desc: 'Pay off your loan early without extra fees on most products.' },
  { title: 'Trusted Partner', desc: 'Powered by Enhancify, a leading home improvement financing platform.' },
];

const useCases = [
  { project: 'Composite Deck Replacement', range: '$18,000 – $35,000', monthly: 'From ~$200/mo*' },
  { project: 'Custom Trex Transcend Build', range: '$28,000 – $45,000', monthly: 'From ~$310/mo*' },
  { project: 'Multi-Level Deck + Pergola', range: '$45,000 – $75,000', monthly: 'From ~$500/mo*' },
  { project: 'Screened Porch + Composite Deck', range: '$50,000 – $85,000', monthly: 'From ~$555/mo*' },
];

export default function DeckFinancingPage() {
  return (
    <>
      <Breadcrumbs />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
            Deck Financing in Northern Virginia
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: 720 }}>
            Build the deck you want now &mdash; pay over time. Loudoun Decks partners with Enhancify to offer flexible financing with <strong style={{ color: '#fff' }}>0% APR options</strong>, <strong style={{ color: '#fff' }}>60-second pre-qualification</strong>, and <strong style={{ color: '#fff' }}>no impact on your credit score</strong>.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div><p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>LOAN AMOUNTS</p><p style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>$5K – $100K+</p></div>
            <div><p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>APR FROM</p><p style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>0%</p></div>
            <div><p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>TERMS UP TO</p><p style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>15 Years</p></div>
            <div><p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>DECISION IN</p><p style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>60 Seconds</p></div>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Pre-qualify without affecting your credit score.</strong> Soft credit check only. See your real rates and monthly payment options before committing.
          </p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={{ ...S.h2, marginTop: 0, textAlign: 'center' }}>Apply for Deck Financing</h2>
          <p style={{ ...S.p, textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
            Click below to begin. Pre-qualification takes under a minute and does not affect your credit score.
          </p>

          <div style={{ background: '#f9f9f9', borderRadius: 12, padding: '2rem', marginBottom: '3rem', border: '1px solid #e5e5e5', textAlign: 'center', minHeight: 200 }}>
            <EnhancifyWidget />
            <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '1.5rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Financing provided by Enhancify, Inc. and partner lenders. Loudoun Decks is not a lender. All loans subject to credit approval. Rates, terms, and loan amounts vary based on creditworthiness.
            </p>
          </div>

          <h2 style={S.h2}>Why Finance Your Deck Through Loudoun Decks?</h2>
          <p style={S.p}>
            A new deck is one of the highest-ROI home improvements you can make &mdash; composite decks recoup 65&ndash;80% at resale in Northern Virginia. But waiting years to save up means missing out on the deck you could be enjoying right now. Financing makes the math work for most homeowners.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {benefits.map((b) => (
              <div key={b.title} style={{ background: '#f9f9f9', borderRadius: 10, padding: '1.25rem', borderLeft: '4px solid var(--color-primary)' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{b.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', margin: 0, lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Sample Monthly Payment Estimates</h2>
          <p style={S.p}>Real-world project sizes and approximate monthly payments. Actual rates depend on your credit profile, loan term, and product selected.</p>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project Type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project Cost</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Estimated Monthly</th>
                </tr>
              </thead>
              <tbody>
                {useCases.map((u, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: 600 }}>{u.project}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>{u.range}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', color: 'var(--color-primary)', fontWeight: 600 }}>{u.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#777', fontStyle: 'italic', marginBottom: '2rem' }}>
            *Monthly estimates based on a 15-year term at sample APRs. Your actual rate, term, and monthly payment will be calculated from your real loan offer.
          </p>

          <h2 style={S.h2}>How Deck Financing Works</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Get a free deck estimate.</strong> We provide an itemized written quote &mdash; materials, labor, permits, timeline.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Click &ldquo;Apply Now&rdquo;</strong> on this page. The Enhancify form takes about 60 seconds.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>See real loan offers</strong> from multiple lenders. Compare APR, term, and monthly payment.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Choose the offer</strong> that fits your budget. A hard credit pull happens only at this step.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Funds released to start your project.</strong> No waiting to save up.</li>
          </ol>

          <div style={{ background: 'var(--color-dark)', borderRadius: 12, padding: '2rem', textAlign: 'center', margin: '3rem 0' }}>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: 0 }}>Ready to Build Your Deck?</h2>
            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Get a free estimate first, then explore financing that fits your budget.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.85rem 1.5rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>Get Free Estimate</Link>
              <a href="tel:+15716557207" style={{ display: 'inline-block', background: 'transparent', color: '#fff', padding: '0.85rem 1.5rem', borderRadius: 8, fontWeight: 600, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>Call (571) 655-7207</a>
            </div>
          </div>

          <h2 style={S.h2}>Financing FAQs</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={S.h2}>Related Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia (2026)'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck Comparison'],
              ['/get-estimate', 'Get Your Free Deck Estimate'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

          <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1.5rem', lineHeight: 1.6 }}>
            <strong>Financing Disclosure:</strong> Loudoun Decks is not a lender. Financing options are provided by Enhancify, Inc. and its network of partner lenders. All loans subject to credit approval. APR, loan amount, term, and monthly payment are determined by the lender based on creditworthiness. Pre-qualification involves a soft credit pull that does not affect your credit score; a hard credit inquiry occurs only if you proceed with formal application after accepting a loan offer.
          </p>

        </div>
      </article>

      <SimpleCTA title="Get a Free Deck Estimate Today" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-financing" />
      <ContactHome />
    </>
  );
}
