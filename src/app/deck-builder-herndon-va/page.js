import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-herndon-va',
  title: 'Deck Builder in Herndon, VA | Trex Certified | Loudoun Decks',
  description: 'Herndon deck builder serving Sugarland Run, Chandon, Hunters Creek and Coppermine. Trex Certified composite decks, screened porches and Town of Herndon permitting.',
  image: '/images/img26.jpeg',
});

const herndonFAQs = [
  {
    q: "Do you build decks in Sugarland Run or Chandon?",
    a: "Yes. Sugarland Run and Chandon are two of our more frequent neighborhoods in Herndon. Both have active HOAs with deck submission requirements, and we handle the architectural packet for each, including elevation drawings, board color samples and railing specs."
  },
  {
    q: "How long does the Town of Herndon permit process take?",
    a: "Town of Herndon runs its own building department separate from Fairfax County, and standard residential deck plan review takes about 3 to 4 weeks. Properties just outside town limits fall under Fairfax County, where review currently runs 4 to 5 weeks. We confirm jurisdiction up front based on your address."
  },
  {
    q: "What's the typical cost for a composite deck in Herndon?",
    a: "Most Herndon composite deck builds land between $22,000 and $45,000 for a 350 to 500 sqft footprint with aluminum or composite railings. Trex Enhance Naturals projects start near the bottom of that range, and TimberTech AZEK Vintage with cable rail typically runs to the upper end."
  },
  {
    q: "Can you handle HOA approvals for Hunters Creek or Coppermine?",
    a: "Yes. We've submitted to Sugarland Run HOA, Chandon HOA, the Hunters Creek association and the Coppermine community board. Each has its own approved color palette and railing requirements, and we keep current on what each board accepts so we can pre-qualify designs before you commit."
  },
  {
    q: "Do you replace old wood decks in Herndon's 1980s neighborhoods?",
    a: "Constantly. Folly Lick, Hunters Creek and the older Sugarland Run sections were largely built in the late 70s and 80s, which means we're now seeing pressure-treated decks that are 35 to 40 years old. In most cases the framing is past its useful life and the right move is a full structural replacement rather than a resurface."
  },
  {
    q: "Is composite or wood better for Herndon's climate?",
    a: "For Herndon's tree-canopy lots, composite wins decisively. The shaded, often damp microclimates around mature oaks in Hunters Creek and Folly Lick promote mildew and rot on uncapped wood within a few seasons. Capped composite ignores the moisture and won't cup or splinter under the freeze-thaw swings we see between January and March."
  }
];

const herndonFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": herndonFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const herndonServices = [
  { title: 'New Composite Decks', range: 'From $22k', link: '/services/new-decks' },
  { title: 'Deck Resurfacing', range: 'From $12k', link: '/services/deck-resurfacing' },
  { title: 'Screened Porches', range: 'From $25k', link: '/services/porches' },
  { title: 'Pergolas & Gazebos', range: 'From $9k', link: '/services/gazebo-pergola' },
  { title: 'Paver Patios', range: 'From $9k', link: '/services/patios' },
  { title: 'Privacy Fencing', range: 'From $5k', link: '/services/fence' },
];

const herndonNeighborhoods = [
  { name: 'Sugarland Run', desc: 'Large planned community west of downtown Herndon with one of the more active HOAs in the area. Mature lots with significant tree cover, which drives our composite color recommendations toward lighter tones to manage shade staining.' },
  { name: 'Chandon', desc: 'Established subdivision near Worldgate with a clear architectural standard. Composite decks in warm browns and grays dominate the approved palette, and the HOA prefers black aluminum railings on rear elevations.' },
  { name: 'Hunters Creek', desc: 'Wooded 70s and 80s community with a high concentration of original pressure-treated decks now reaching end of life. Sloped lots are common, which makes multi-level walkout designs the most requested layout here.' },
  { name: 'Coppermine', desc: 'Townhome and single-family enclave near the Town of Herndon golf course. Smaller footprints favor compact 200 to 300 sqft single-level builds with integrated planter boxes or built-in benches.' },
  { name: 'Folly Lick', desc: 'Older established neighborhood along the Folly Lick stream corridor. Heavy tree cover and damp microclimates make capped composite the only sensible long-term decking choice on these lots.' },
  { name: 'Mainstreet Herndon & Town Center', desc: 'Walkable downtown core with mixed-era housing. Smaller urban yards benefit from screened porch additions and compact deck-pergola combinations that maximize usable outdoor square footage.' },
];

export default function HerndonDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={herndonFaqSchema} />
      <Breadcrumbs />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Builder in Herndon, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Trex Certified composite decks, screened porches and outdoor living for Herndon, Sugarland Run, Chandon and the Town of Herndon.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</a>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
        </div>
      </section>

      <article style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ borderLeft: '4px solid var(--color-primary)', background: '#fff8f1', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Quick Answer</strong>
            <p style={{ margin: 0, lineHeight: 1.65 }}>A custom composite deck in Herndon typically costs $22,000 to $45,000 installed. Town of Herndon permits average 3 to 4 weeks; Fairfax County addresses run 4 to 5 weeks. We're Trex Certified and submit directly to Sugarland Run, Chandon and Hunters Creek HOAs.</p>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
            <Image
              src="/images/img26.jpeg"
              alt="Custom Trex composite deck built by Loudoun Decks in Herndon, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Custom Deck Builder Serving Herndon Homeowners</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Herndon is one of the more interesting outdoor-living markets we work in. The Town of Herndon footprint sits inside Fairfax County but operates its own building department, which means addresses two blocks apart can fall under entirely different plan review processes. Add to that the mix of 1980s wooded subdivisions like Hunters Creek and Folly Lick alongside newer Town Center infill, and every Herndon project starts with a jurisdictional and architectural read before we ever talk materials.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>The homeowners we work with in Herndon tend to be deliberate. Many work in the tech corridor running from Dulles toward Reston, and they research materials, warranties and contractors before they pick up the phone. Our pitch is straightforward: we're Trex Certified, we know the Town of Herndon plan reviewers, we've been through every major HOA submission process here, and we'd rather build one excellent deck than three average ones. That's the standard the neighborhood expects.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Trex and TimberTech Composite Decks in Herndon</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Herndon's tree canopy drives most of our material conversations. Properties in Hunters Creek, Folly Lick and the older Sugarland Run sections sit under heavy oak and maple cover, which means decks here see filtered sun and prolonged surface moisture. Trex Enhance Naturals in Foggy Wharf and Trex Transcend in Tiki Torch are our most-installed boards because their lighter, cooler tones don't telegraph leaf staining and pollen the way darker boards do under partial shade.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>For homeowners who want a premium grain pattern and the deepest authentic wood-look on the market, we step up to TimberTech AZEK Vintage. The PVC core resists moisture absorption almost completely, which matters in Folly Lick where lots back to a stream corridor and stay damp into late spring. Every Trex and TimberTech deck we build in Herndon ships with hidden fasteners, butyl flashing tape at the ledger, and stainless connectors at every load-critical junction.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Deck Replacement and Resurfacing in Herndon, VA</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>A meaningful share of our Herndon work is deck replacement rather than new construction. Hunters Creek and the older sections of Sugarland Run were built in the late 70s and 80s, and the original pressure-treated decks on these homes are now 35 to 40 years old. At that age, framing rot, ledger separation, and undersized footings are the rule rather than the exception. Resurfacing with composite over compromised joists is unsafe and we won't quote it.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Where we do recommend resurfacing is on later-build Chandon and Coppermine homes from the late 90s and early 2000s, where the framing is often still structurally sound but the surface boards and railings have weathered out. A Trex Transcend resurface on intact framing typically runs $14,000 to $22,000 in Herndon and produces a deck that performs like a full new build for two-thirds the cost. We'll send photos of the framing condition and our structural assessment with every quote.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Outdoor Living Services in Herndon</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {herndonServices.map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1.1rem', textDecoration: 'none', color: 'inherit', border: '1px solid #ececec' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.35rem', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, margin: 0 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Neighborhoods We Serve in Herndon</h2>
          <div style={{ marginBottom: '2.5rem' }}>
            {herndonNeighborhoods.map((n) => (
              <div key={n.name} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #ececec' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>{n.name}</h3>
                <p style={{ margin: 0, lineHeight: 1.65, color: '#444' }}>{n.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Why Homeowners in Herndon Choose Loudoun Decks</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Town of Herndon plan-review fluency.</strong> The town's building department is its own animal, separate from Fairfax County. We know what their reviewers flag and how to clear it on the first submission.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Tree-canopy design experience.</strong> Building under mature oak and maple cover requires color choices and drainage design most contractors get wrong. We don't.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Trex Certified, full-line installer.</strong> Enhance, Transcend, Signature and the full TimberTech AZEK lineup are all in our standard catalog.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>HOA-ready submissions.</strong> Sugarland Run, Chandon, Hunters Creek and Coppermine each have current packet requirements we keep on file.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Honest framing assessments.</strong> If your existing structure can be safely resurfaced, we'll tell you. If it can't, we'll show you the photos.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Permits, HOA and Planning Support in Herndon</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Town of Herndon properties go through the town's own building department, and the current timeline is 3 to 4 weeks for a residential deck plan review. Our submissions include sealed structural drawings, ledger details, footing depths matched to the soils on your lot, and the full setback verification the town's reviewers expect. Because the town runs a smaller department, we usually get a single point of contact and faster turnaround on revision requests than we'd see in the county.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Addresses just outside town limits fall under Fairfax County's Building Development Division, which currently runs 4 to 5 weeks. HOA approval typically runs in parallel with the permit process. Sugarland Run and Chandon both maintain published architectural guidelines we can pre-screen designs against, and we submit the architectural packet on your behalf the same week we file the permit application.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Recent Deck Projects Near Herndon</h2>
          <p style={{ marginBottom: '2.5rem', lineHeight: 1.7 }}>Typical Herndon projects we help with include 380 to 480 sqft Trex Transcend builds for Sugarland Run homeowners replacing original 80s pressure-treated decks, screened porch additions in Chandon for families wanting bug-free outdoor living from April through October, and multi-level walkout deck designs for Hunters Creek homes built on sloped wooded lots where a single-level deck can't reach grade. In Folly Lick we've also handled compact replacement decks where the new build had to navigate root protection zones around heritage oaks the homeowner wanted to preserve.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Herndon Deck Builder FAQs</h2>
          {herndonFAQs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.1rem 1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.02rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '0.85rem', lineHeight: 1.7, color: '#444', marginBottom: 0 }}>{faq.a}</p>
            </details>
          ))}

        </div>
      </article>

      <SimpleCTA title="Build Your Herndon Deck With a Trex Certified Team" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-herndon-va" />
      <ContactHome />
    </main>
  );
}
