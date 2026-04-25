import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceVisual from '@/components/ServiceVisual';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import { buildMetadata } from '@/lib/seo';

export const metadata = {
  ...buildMetadata({
    path: '/deck-replacement',
    title: 'Deck Replacement Services | Professional Teardown & Rebuild',
    description: 'Complete deck replacement from $25k. Teardown, permits & HOA handled, 2–4 week build. Trex & TimberTech certified. Free estimate in Loudoun, Fairfax & Prince William.',
  }),
  alternates: {
    canonical: 'https://www.ldndecks.com/services/deck-replacement',
  },
};

export default function DeckReplacementPage() {
  return (
    <main>
      <ServiceSchema name="Deck Replacement" description="Complete deck demolition and rebuild. Wood to composite upgrades. Permits handled." price="25000" />
      <ServicesHeader
        subtext="Projects from $25,000+"
        title="Full Deck Replacement Services"
        description="Replace your worn-out, unsafe deck with a modern composite sanctuary. Permits & HOA handled. Typical timeline: 2–4 weeks."
      />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>Project Minimum: $5,000+</strong>
            <br />
            We specialize in <strong style={{ color: '#111' }}>full builds and large scale projects</strong> only. 
            We do <strong style={{ color: '#111' }}>NOT</strong> offer small repairs or minor fixes.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Fresh Start"
        title="Professional Deck Teardown & Rebuild"
        description="When repairs aren't enough, a full replacement is the safest and most cost-effective long-term solution. Our team handles everything from safely dismantling your old structure to designing and building your dream deck."
        listTitle="Our Replacement Process:"
        listItems={[
          "Safe demolition and removal of old materials",
          "Foundation and ledger board inspection/repair",
          "New structural framing to modern codes",
          "Premium composite decking (Trex / TimberTech / AZEK)",
          "All county permits + HOA approvals handled",
          "Typical build: 2–4 weeks from permit approval"
        ]}
        image1="/images/img08.jpeg"
        image2="/images/img09.jpeg"
      />

      <ServiceVisual image="/images/img22.jpeg" />

      <ServiceInclusions
        title="The Teardown-to-Build Process"
        description="We minimize disruption to your property while we transform your outdoor area."
        items={[
          { title: "Permits & HOA Handled", desc: "We manage all county permits and HOA architectural review submissions you don't lift a finger." },
          { title: "Modern Safety Standards", desc: "Your new deck will meet all current building codes, often far exceeding the standards of your old deck." },
          { title: "Design Upgrades", desc: "Replacement is the perfect time to change the shape, size, or layout of your deck." },
          { title: "Before & After Results", desc: "See real transformations from our Loudoun, Fairfax, and Prince William County projects in our gallery." }
        ]}
      />

      <ProcessSteps />

      <ServicesCallToAction />

      <RelatedGuides currentPath="/deck-replacement" />
      <ContactHome />
    </main>
  );
}
