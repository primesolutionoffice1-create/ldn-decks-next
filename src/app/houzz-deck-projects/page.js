import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/houzz-deck-projects',
  title: 'Loudoun Decks on Houzz | Deck Projects in Northern Virginia',
  description: 'View Loudoun Decks projects on Houzz, including custom decks, screened porches, patios, and outdoor living spaces across Northern Virginia.',
});

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Loudoun Decks Houzz Projects",
  "description": "Showcase of Loudoun Decks outdoor living projects on Houzz.",
  "publisher": {
    "@type": "LocalBusiness",
    "name": "Loudoun Decks",
    "url": "https://www.ldndecks.com"
  }
};

const S = {
  h2: { fontSize: '2.25rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.02em' },
  p: { marginBottom: '1.25rem', lineHeight: 1.75, fontSize: '1.1rem', color: '#4b5563' },
  card: { background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }
};

export default function HouzzProjectsPage() {
  return (
    <>
      <JsonLd data={pageSchema} />

      {/* Hero Section */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '6rem 0 5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Background Image with Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image src="/images/img27.jpeg" alt="Loudoun Decks Custom Project" fill style={{ objectFit: 'cover', opacity: 0.15 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4))' }}></div>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            See Loudoun Decks Projects on Houzz
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '1.25rem', lineHeight: 1.6, maxWidth: 700, margin: '0 auto 2.5rem' }}>
            Explore our portfolio of custom decks, screened porches, and full backyard transformations built for homeowners across Northern Virginia.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://www.houzz.com/pro/webuser-782541997/loudoun-decks" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ background: 'var(--color-primary)', color: '#fff', padding: '1.25rem 2.5rem', borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', transition: 'transform 0.2s', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
            >
              View Our Houzz Profile
            </a>
            <Link 
              href="/contact" 
              style={{ background: 'transparent', color: '#fff', padding: '1.25rem 2.5rem', borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)' }}
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={S.h2}>Design Inspiration & Real-World Results</h2>
              <p style={S.p}>
                Loudoun Decks showcases completed deck, porch, patio, and outdoor living projects on Houzz so homeowners can view real examples of our work before starting their own project.
              </p>
              <p style={S.p}>
                Our Houzz profile includes project photos, design inspiration, and examples of custom outdoor spaces built for homes across Northern Virginia.
              </p>
              <p style={S.p}>
                If you are planning a new deck, deck replacement, screened porch, or patio, you can explore our Houzz portfolio and then contact our team for a free consultation.
              </p>
            </div>
            <div style={{ position: 'relative', height: 450, borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', border: '1px solid #eee' }}>
               <Image 
                src="/images/img67.webp" 
                alt="Loudoun Decks Houzz Portfolio Showcase" 
                fill 
                style={{ objectFit: 'cover' }}
               />
               <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, background: 'rgba(255,255,255,0.95)', padding: '1.25rem', borderRadius: 12, textAlign: 'center', backdropFilter: 'blur(4px)' }}>
                  <p style={{ margin: 0, fontWeight: 800, color: '#111', fontSize: '1.1rem' }}>Top Rated Professional on Houzz</p>
                  <p style={{ margin: '0.25rem 0 0', color: 'var(--color-primary)', fontWeight: 700 }}>5.0 ★★★★★</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ ...S.h2, textAlign: 'center', marginBottom: '3rem' }}>Explore Our Expertise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={S.card}>
              <div style={{ height: 180, position: 'relative', margin: '-2rem -2rem 1.5rem', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                <Image src="/images/img13.jpeg" alt="Custom Decks" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Decks</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                Composite deck building, deck replacement, and outdoor living upgrades using premium materials like Trex and TimberTech.
              </p>
            </div>
            <div style={S.card}>
              <div style={{ height: 180, position: 'relative', margin: '-2rem -2rem 1.5rem', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                <Image src="/images/img14.jpeg" alt="Screened Porches" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Screened Porches</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                Comfortable covered outdoor spaces designed for Northern Virginia homes, featuring EZE-Breeze windows and custom ceilings.
              </p>
            </div>
            <div style={S.card}>
              <div style={{ height: 180, position: 'relative', margin: '-2rem -2rem 1.5rem', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                <Image src="/images/img11.jpeg" alt="Patios & Outdoor Living" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Patios & Outdoor Living</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                Patio integration, hardscape planning, and full backyard transformations including fire pits and outdoor kitchens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Houzz Gallery CTA */}
      <section style={{ padding: '5rem 0', background: '#f3f4f6', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={S.h2}>Ready to See More?</h2>
          <p style={{ ...S.p, margin: '0 auto 3rem' }}>
            Browse hundreds of project photos and get inspiration for your own outdoor oasis on our official Houzz page.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
             {[30, 31, 32, 33, 34, 35].map(num => (
               <div key={num} style={{ height: 180, position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                 <Image src={`/images/img${num}.jpeg`} alt={`Loudoun Decks Project ${num}`} fill style={{ objectFit: 'cover' }} />
               </div>
             ))}
          </div>
          <a 
            href="https://www.houzz.com/pro/webuser-782541997/loudoun-decks" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#4DBC15', color: '#fff', padding: '1.1rem 2.5rem', borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 10px 20px rgba(77, 188, 21, 0.2)' }}
          >
            View More on Houzz
          </a>
        </div>
      </section>

      <SimpleCTA 
        title="Ready to build your outdoor space?" 
        subtitle="Call/Text: (571) 655-7207" 
        buttonText="Request Free Estimate" 
        link="/contact" 
      />
      
      <RelatedGuides currentPath="/houzz-deck-projects" />
      <ContactHome />
    </>
  );
}
