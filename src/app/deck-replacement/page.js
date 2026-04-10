import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceVisual from '@/components/ServiceVisual';

export const metadata = {
  title: "Deck Replacement Services | Professional Teardown & Rebuild | Loudoun Decks",
  description: "Is your old deck beyond repair? We provide complete deck replacement services, handling the teardown and building a beautiful new outdoor space."
};

export default function DeckReplacementPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Deck Restoration"
        title="Full Deck Replacement Services"
        description="Replace your worn-out, unsafe deck with a modern, high-quality outdoor sanctuary."
      />

      <ServiceMain 
        subtitle="Fresh Start"
        title="Professional Deck Teardown & Rebuild"
        description="When repairs aren't enough, a full replacement is the safest and most cost-effective long-term solution. Our team handles everything from safely dismantling your old structure to designing and building your dream deck."
        listTitle="Our Replacement Process:"
        listItems={[
          "Safe demolition and removal of old materials",
          "Foundation and ledger board inspection/repair",
          "New structural framing to modern codes",
          "Premium decking surfaces and railings"
        ]}
        image1="/images/img08.jpeg"
        image2="/images/img09.jpeg"
      />

      <ServiceVisual image="/images/img22.jpeg" />

      <ServiceInclusions 
        title="The Teardown-to-Build Process"
        description="We minimize disruption to your property while we transform your outdoor area."
        items={[
          { title: "Permit Management", desc: "We handle all the necessary county permits for the demolition and new construction." },
          { title: "Modern Safety Standards", desc: "Your new deck will meet all current building codes, often far exceeding the standards of your old deck." },
          { title: "Design Upgrades", desc: "Replacement is the perfect time to change the shape, size, or layout of your deck." }
        ]}
      />

      <ProcessSteps />

      <ContactHome />
    </main>
  );
}
