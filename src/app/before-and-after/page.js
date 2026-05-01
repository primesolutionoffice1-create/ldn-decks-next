import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/before-and-after',
  title: 'Before & After Deck Projects | Northern Virginia | LDN Decks',
  description: 'See real before and after deck transformations across Loudoun, Fairfax & Prince William counties. Composite decks, resurfacing, screened porches & more by LDN Decks.',
  image: '/images/img04.jpeg',
});

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Before & After Deck Projects LDN Decks",
  "description": "Real before and after deck transformation photos from Loudoun Decks projects across Northern Virginia.",
  "url": "https://ldndecks.com/before-and-after",
  "publisher": {
    "@type": "LocalBusiness",
    "name": "Loudoun Decks",
    "@id": "https://ldndecks.com/#business",
    "telephone": "+15716557207"
  },
  "about": {
    "@type": "Service",
    "serviceType": "Deck Building & Renovation",
    "provider": { "@type": "LocalBusiness", "name": "Loudoun Decks" }
  },
  "image": [
    { "@type": "ImageObject", "url": "https://ldndecks.com/images/img04.jpeg", "name": "Deck resurfacing before and after Sterling, VA", "description": "Worn pressure-treated wood deck transformed with Trex composite resurfacing in Sterling, Virginia." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/images/img10.jpeg", "name": "New composite deck build Ashburn, VA", "description": "Bare backyard transformed into a custom Trex Transcend composite deck in Ashburn, Virginia." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/images/img01.jpeg", "name": "Custom deck installation Reston, VA", "description": "Custom multi-level composite deck installation in Reston, Virginia." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/images/img05.jpeg", "name": "Balcony reconstruction Chantilly, VA", "description": "Deteriorating balcony fully reconstructed with composite decking in Chantilly, Virginia." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/images/img03.jpeg", "name": "Deck construction Manassas, VA", "description": "New deck construction replacing an old wooden structure in Manassas, Virginia." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/images/img07.jpeg", "name": "New deck build Manassas, VA", "description": "Complete new deck build with composite decking and aluminum railings in Manassas, Virginia." },
  ]
};

const projects = [
  {
    id: 1,
    title: 'Deck Resurfacing Wood to Trex Composite',
    location: 'Sterling, VA',
    county: 'Loudoun County',
    date: 'December 2024',
    beforeImg: '/images/img09.jpeg',
    afterImg: '/images/img04.jpeg',
    beforeAlt: 'Faded and splintering pressure-treated wood deck before resurfacing in Sterling VA',
    afterAlt: 'Same deck after Trex composite resurfacing with new railings in Sterling VA',
    material: 'Trex Enhance Naturals Toasted Sand',
    size: '320 sqft',
    duration: '8 days',
    cost: '$19,000',
    description: 'This 12-year-old pressure-treated wood deck had extensive splintering, gray discoloration, and soft spots near the ledger board. The homeowner wanted a zero-maintenance upgrade without the cost of a full tear-down. We inspected the subframe, replaced 4 compromised joists, applied butyl joist tape, and resurfaced with Trex Enhance Naturals boards and new aluminum railings.',
    highlight: 'Saved ~$8,000 vs full rebuild by reusing the existing subframe.',
  },
  {
    id: 2,
    title: 'New Composite Deck Bare Yard to Outdoor Living Room',
    location: 'Ashburn, VA',
    county: 'Loudoun County',
    date: 'October 2024',
    beforeImg: '/images/img17.jpeg',
    afterImg: '/images/img10.jpeg',
    beforeAlt: 'Empty grass backyard before deck construction in Ashburn VA',
    afterAlt: 'Finished Trex Transcend composite deck with furniture in Ashburn VA',
    material: 'Trex Transcend Havana Gold',
    size: '400 sqft',
    duration: '2.5 weeks',
    cost: '$32,000',
    description: 'New construction on a Brambleton home with a walkout basement. The homeowner wanted a large entertaining deck accessible from the kitchen. We engineered helical piers on the slope, built a single-level 400 sqft deck with picture-frame border, Trex Signature composite railings, and integrated LED post cap lighting. HOA approved in one submission.',
    highlight: 'Brambleton HOA architectural review passed on first attempt with our CAD plans.',
  },
  {
    id: 3,
    title: 'Custom Multi-Level Deck Build',
    location: 'Reston, VA',
    county: 'Fairfax County',
    date: 'February 2025',
    beforeImg: '/images/img18.jpeg',
    afterImg: '/images/img01.jpeg',
    beforeAlt: 'Old small wooden deck before replacement in Reston VA',
    afterAlt: 'New custom multi-level composite deck after completion in Reston VA',
    material: 'Trex Transcend Lineage Biscayne',
    size: '480 sqft (two levels)',
    duration: '3 weeks',
    cost: '$44,000',
    description: 'The original 180 sqft wood deck was undersized for this family of five. We demolished the old structure and built a two-level composite deck: upper dining level off the kitchen and a lower fire pit lounge stepping down toward the yard. Wide cascading stairs connect both levels with integrated riser lighting.',
    highlight: 'Went from 180 sqft to 480 sqft nearly 3x the usable outdoor space.',
  },
  {
    id: 4,
    title: 'Balcony Reconstruction Rotted Framing to Composite',
    location: 'Chantilly, VA',
    county: 'Fairfax County',
    date: 'November 2024',
    beforeImg: '/images/img19.jpeg',
    afterImg: '/images/img05.jpeg',
    beforeAlt: 'Deteriorating wooden balcony with rotted framing in Chantilly VA before reconstruction',
    afterAlt: 'Fully reconstructed composite balcony with new railings in Chantilly VA',
    material: 'TimberTech Pro Dark Roast',
    size: '160 sqft',
    duration: '10 days',
    cost: '$22,000',
    description: 'This second-story balcony had severe structural rot in the ledger board and 3 supporting joists a safety hazard the homeowner discovered during a routine inspection. We performed a full tear-down, installed new flashing and a code-compliant ledger connection, rebuilt the subframe with pressure-treated lumber, and surfaced with TimberTech Pro composite boards.',
    highlight: 'Structural rot discovered during our $350 inspection likely prevented a collapse.',
  },
  {
    id: 5,
    title: 'Complete Deck Replacement PT Wood to AZEK',
    location: 'Manassas, VA',
    county: 'Prince William County',
    date: 'November 2024',
    beforeImg: '/images/img20.jpeg',
    afterImg: '/images/img03.jpeg',
    beforeAlt: 'Old warped pressure-treated deck before full replacement in Manassas VA',
    afterAlt: 'Brand new AZEK Vintage composite deck after replacement in Manassas VA',
    material: 'TimberTech AZEK Vintage English Walnut',
    size: '350 sqft',
    duration: '2 weeks',
    cost: '$38,000',
    description: 'A 20-year-old pressure-treated deck that had been stained 8+ times but was beyond saving multiple boards were soft, the stairs were wobbly, and the railing posts had separated from the frame. Full demolition, new concrete footings, rebuilt subframe, and premium AZEK polymer decking with cable railing for an unobstructed backyard view.',
    highlight: 'AZEK\'s full PVC construction zero wood content means this deck will outlast the house.',
  },
  {
    id: 6,
    title: 'New Deck Build with Pergola',
    location: 'Manassas, VA',
    county: 'Prince William County',
    date: 'November 2024',
    beforeImg: '/images/img21.jpeg',
    afterImg: '/images/img07.jpeg',
    beforeAlt: 'Grass yard with old concrete pad before deck construction in Manassas VA',
    afterAlt: 'Completed new composite deck with attached cedar pergola in Manassas VA',
    material: 'Trex Transcend Spiced Rum + Cedar Pergola',
    size: '420 sqft deck + 12x14 pergola',
    duration: '3 weeks',
    cost: '$48,000',
    description: 'New construction combining a 420 sqft Trex Transcend deck with an attached 12x14 rough-sawn cedar pergola. The homeowner wanted distinct zones: a covered dining area under the pergola and an open sunning area beyond. Included low-voltage string light posts, built-in planter boxes, and wide stairs to grade.',
    highlight: 'Bundling the pergola with the deck saved ~$4,000 vs building them separately.',
  },
  {
    id: 7,
    title: 'Screened Porch Conversion',
    location: 'Centreville, VA',
    county: 'Fairfax County',
    date: 'January 2025',
    beforeImg: '/images/img22.jpeg',
    afterImg: '/images/img23.jpeg',
    beforeAlt: 'Open composite deck before screened porch conversion in Centreville VA',
    afterAlt: 'Completed screened porch with EZE-Breeze windows and ceiling fan in Centreville VA',
    material: 'Trex Transcend floor + EZE-Breeze windows',
    size: '280 sqft',
    duration: '4 weeks',
    cost: '$52,000',
    description: 'The homeowners had a 3-year-old composite deck that they loved but couldn\'t use after 6pm in summer due to mosquitoes. We added a structural roof tied into the home\'s existing roofline, EZE-Breeze sliding vinyl windows, tongue-and-groove pine ceiling with recessed lighting, two ceiling fans, and multiple GFCI outlets. The result is a 3-season room usable from March through November.',
    highlight: 'Extended usable outdoor season from 5 months to 9 months.',
  },
  {
    id: 8,
    title: 'Pool Deck Replacement',
    location: 'Great Falls, VA',
    county: 'Fairfax County',
    date: 'March 2025',
    beforeImg: '/images/img24.jpeg',
    afterImg: '/images/img25.jpeg',
    beforeAlt: 'Damaged wood pool deck before replacement in Great Falls VA',
    afterAlt: 'New AZEK pool deck with glass railings in Great Falls VA',
    material: 'TimberTech AZEK Harvest Slate Gray',
    size: '500 sqft',
    duration: '3 weeks',
    cost: '$58,000',
    description: 'The existing wood pool deck was warped, splintering, and a splinter hazard for barefoot kids. We replaced it with AZEK polymer decking specifically chosen because its full PVC construction resists pool chemical splash, chlorine damage, and moisture penetration that destroys wood and even some composite boards. Glass panel railings maintain the sight line to the pool.',
    highlight: 'AZEK\'s PVC core resists chlorine splash critical for pool-adjacent installations.',
  },
];

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
};

export default function BeforeAndAfterPage() {
  return (
    <>
      <JsonLd data={imageGallerySchema} />
      <ArticleSchema
        title="Before & After Deck Projects Northern Virginia"
        description="Real before and after deck transformation photos from LDN Decks projects across Loudoun, Fairfax & Prince William counties."
        path="/before-and-after"
        image="/images/img04.jpeg"
        datePublished="2026-04-21"
        dateModified="2026-04-23"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Before &amp; After Deck Transformations</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Real projects from Loudoun, Fairfax &amp; Prince William counties with costs, materials, and timelines</p>
          <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>5.0 on Google &middot; 41 reviews &middot; Trex Platinum Partner &middot; 2-Year Workmanship Warranty</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>100+</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Projects completed</span></div>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>10+</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Years experience</span></div>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>5.0</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Google rating</span></div>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>2yr</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Workmanship warranty</span></div>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <p style={S.p}>Every deck project starts somewhere sometimes a bare backyard, sometimes a rotting 20-year-old structure that&apos;s become a safety hazard. Below are real transformations from our builds across Northern Virginia. Each project includes the materials used, total cost, timeline, and what made it unique.</p>
          <p style={{ ...S.p, marginBottom: '3rem' }}>Want to see your backyard on this page? <a href="tel:+15716557207" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</a> for a free design consultation.</p>

          {/* Project Cards */}
          {projects.map((project, idx) => (
            <section key={project.id} style={{ marginBottom: '4rem', paddingBottom: '3rem', borderBottom: idx < projects.length - 1 ? '1px solid #e5e5e5' : 'none' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>{project.title}</h2>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{project.location} &middot; {project.county} &middot; {project.date}</p>

              {/* Before/After Image Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ position: 'relative', width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image src={project.beforeImg} alt={project.beforeAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 50vw, 440px" />
                    <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>BEFORE</span>
                  </div>
                </div>
                <div>
                  <div style={{ position: 'relative', width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image src={project.afterImg} alt={project.afterAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 50vw, 440px" />
                    <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'var(--color-primary)', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>AFTER</span>
                  </div>
                </div>
              </div>

              {/* Project Details Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', background: '#f9f9f9', borderRadius: '8px', padding: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Material</p>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{project.material}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Size</p>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{project.size}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Timeline</p>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{project.duration}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Total Cost</p>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-primary)' }}>{project.cost}</p>
                </div>
              </div>

              {/* Description */}
              <p style={{ lineHeight: 1.7, marginBottom: '0.75rem' }}>{project.description}</p>
              <p style={{ lineHeight: 1.7, fontSize: '0.9rem', color: '#555', fontStyle: 'italic', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', padding: '0.75rem 1rem' }}>{project.highlight}</p>
            </section>
          ))}

          {/* Summary Stats */}
          <div style={{ background: 'var(--color-dark)', color: '#fff', borderRadius: '12px', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Projects at a Glance</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>$18k–$58k</p>
                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Project range shown</p>
              </div>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>160–500 sqft</p>
                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Size range</p>
              </div>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>8 days–4 wks</p>
                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Build time range</p>
              </div>
            </div>
          </div>

          {/* What You Can Expect */}
          <h2 style={S.h2}>What to Expect From Your Deck Transformation</h2>
          <p style={S.p}>Every project on this page followed the same process and yours will too:</p>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: 2, marginBottom: '2rem' }}>
            <li><strong>Free on-site consultation</strong> we measure, photograph, and discuss your vision in person.</li>
            <li><strong>3D design rendering</strong> you see exactly what your deck will look like before we break ground.</li>
            <li><strong>Itemized written quote</strong> materials, labor, permits, timeline, and warranty terms in writing.</li>
            <li><strong>Permit management</strong> we submit plans, coordinate HOA review, and schedule inspections.</li>
            <li><strong>Professional build</strong> our in-house crew (never subcontracted) builds your deck on schedule.</li>
            <li><strong>Final walkthrough</strong> we inspect every detail with you before the project is marked complete.</li>
            <li><strong>2-year workmanship warranty</strong> on all labor plus 25–50 year manufacturer warranty on materials.</li>
          </ol>

          {/* Types of Transformations */}
          <h2 style={S.h2}>Types of Deck Transformations We Build</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'New Deck Construction', desc: 'Bare yard to custom outdoor living space.', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', desc: 'New composite surface on existing frame. Save 25-40%.', link: '/services/deck-resurfacing' },
              { title: 'Full Deck Replacement', desc: 'Complete tear-down and rebuild with modern materials.', link: '/deck-resurfacing-vs-replacement' },
              { title: 'Screened Porch Conversion', desc: 'Open deck to bug-free 3-season room.', link: '/services/porches/screened-porch' },
              { title: 'Pool Deck Replacement', desc: 'Chlorine-resistant AZEK for poolside safety.', link: '/pool-deck-builder-northern-virginia' },
              { title: 'Multi-Level Builds', desc: 'Tiered decks for entertaining and defined zones.', link: '/multi-level-deck-builder-northern-virginia' },
            ].map(({ title, desc, link }) => (
              <Link key={link} href={link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1.25rem', textDecoration: 'none', color: 'inherit', border: '1px solid #e5e5e5', transition: 'border-color 0.2s' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>{desc}</p>
              </Link>
            ))}
          </div>

          {/* Related Guides */}
          <h2 style={S.h2}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia (2026)'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/deck-resurfacing-vs-replacement', 'Resurfacing vs Full Replacement'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood 15-Year Cost Analysis'],
              ['/showcase', 'Full Project Gallery'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Ready to Transform Your Deck?" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/before-and-after" />
      <ContactHome />
    </>
  );
}
