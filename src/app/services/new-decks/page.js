import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import WhyChooseDetails from '@/components/WhyChooseDetails';
import ServiceVisual from '@/components/ServiceVisual';

export const metadata = {
  title: "Deck Installation Services | Loudoun Decks",
  description: "Professional deck installation for residential homes in Northern Virginia. Custom deck designs tailored to your family and lifestyle."
};

const inclusions = [
  {
    title: "Planning & Layout",
    desc: "We start by planning the deck layout and size to ensure it works perfectly with your property."
  },
  {
    title: "Seamless Connection",
    desc: "Expertly reviewing how the deck connects to your home for structural integrity and flow."
  },
  {
    title: "Structural Excellence",
    desc: "Building a new deck structure explicitly designed and certified for residential use."
  }
];

const newDeckFAQs = [
  {
    q: "Do you install new decks for residential homes?",
    a: "Yes. We provide complete deck installation services for residential properties across Northern Virginia."
  },
  {
    q: "Do you offer custom deck designs?",
    a: "Yes. Every deck is planned as a custom build based on your home's architecture and your family's needs."
  },
  {
    q: "What areas do you serve for deck installation?",
    a: "We serve Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. We offer free, no-obligation consultations for homeowners considering a new deck installation."
  }
];

export default function NewDecksPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Our Services"
        title="Deck Installation Services"
        description="Loudoun Decks provides professional deck installation for homeowners in Loudoun County, Fairfax County, and Prince William County, helping create functional outdoor living spaces."
      />

      <ServiceMain 
        subtitle="Custom Decks"
        title="Professional Deck Installation for Residential Homes"
        description="A new deck can transform how you use your outdoor space. Loudoun Decks specializes in residential deck installation, working with homeowners across Northern Virginia to plan and build decks that fit their home and lifestyle."
        listTitle="Our Deck Installation May Include:"
        listItems={[
          "Custom deck layout and size planning",
          "Seamless home-to-deck connections",
          "New structural builds for long-term durability",
          "Integration with patios, porches, or pergolas"
        ]}
        image1="/images/img03.jpeg"
        image2="/images/img18.jpeg"
      />

      <ServiceVisual image="/images/img24.jpeg" />

      <ServiceInclusions 
        title="What Our Service Includes"
        description="Our deck installation service focuses on building new, custom decks designed around your specific space and needs."
        items={inclusions}
      />

      <ProcessSteps />

      <ServiceInclusions 
        title="Why Choose Loudoun Decks"
        description="Homeowners contact us for deck installation because they are looking for a reliable, local partner who values quality and clarity."
        items={[
          { title: "Local Expert", desc: "A local deck builder who understands Northern Virginia's specific building codes and environment." },
          { title: "Clear Communication", desc: "Transparent planning and progress updates from the first consultation to the final walkthrough." },
          { title: "Tailored Designs", desc: "We don't do 'cookie-cutter'. Every deck is designed explicitly for the home and family it serves." }
        ]}
      />

      <ServicesFAQ 
        title="Deck Installation FAQs"
        faqs={newDeckFAQs}
      />

      <ContactHome />
    </main>
  );
}
