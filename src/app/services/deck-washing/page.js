import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceProcessHorizontal from '@/components/ServiceProcessHorizontal';

export const metadata = {
  title: "Deck Washing Services | Loudoun Decks",
  description: "Professional deck washing for residential homes in Northern Virginia. Clean, refresh, and restore the look of your outdoor deck."
};

const washingSteps = [
  {
    title: "Free Estimate",
    desc: "We discuss your deck washing needs and schedule a visit."
  },
  {
    title: "Design & Planning",
    desc: "We evaluate your deck's condition on site."
  },
  {
    title: "Professional Construction",
    desc: "Controlled washing is applied to safely clean the deck surface."
  }
];

const inclusions = [
  {
    title: "Debris Removal",
    desc: "Lifting dirt, pollen, and dust that has accumulated over the seasons."
  },
  {
    title: "Mildew Removal",
    desc: "Safely removing mold and mildew buildup that can make surfaces slippery."
  },
  {
    title: "Surface Prep",
    desc: "Improving surface appearance and preparing the deck for maintenance or finishing."
  }
];

const deckWashingFAQs = [
  {
    q: "What is deck washing?",
    a: "Deck washing uses pressure and cleaning solutions to remove dirt, mildew, and buildup from deck surfaces."
  },
  {
    q: "Do you wash all types of deck surfaces?",
    a: "Yes. We provide deck washing for residential wood and composite decks as part of our outdoor cleaning services."
  },
  {
    q: "Where do you serve deck washing?",
    a: "We serve Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you offer free estimates for deck washing?",
    a: "Yes. We offer free estimates to homeowners considering professional deck washing."
  }
];

export default function DeckWashingPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Our Services"
        title="Deck Washing Services"
        description="Loudoun Decks offers professional deck washing for homeowners in Northern Virginia to clean and refresh deck surfaces, restoring appearance and preparing for maintenance."
      />

      <ServiceMain 
        subtitle="Professional Clean"
        title="Professional Deck Washing for Residential Homes"
        description="Over time, deck surfaces can accumulate dirt, grime, mildew, and organic buildup that affect appearance and traction. Loudoun Decks provides services designed to safely remove buildup and restore your outdoor deck."
        listTitle="Why Choose Professional Washing:"
        listItems={[
          "Ensures the right water pressure for wood or composite",
          "Helps protect the surface from damage during cleaning",
          "Improves surface preparation for future treatments",
          "Enhances your deck’s appearance and curb appeal"
        ]}
        image1="/images/img01.jpeg"
        image2="/images/img02.jpeg"
      />

      <ServiceProcessHorizontal 
        title="Our Deck Washing Process"
        steps={washingSteps}
      />

      <ServiceInclusions 
        title="What Deck Washing Involves"
        description="Deck washing is a cleaning method that uses controlled pressure and solutions to remove contaminants from deck boards."
        items={inclusions}
      />

      <ServicesFAQ 
        title="Deck Washing FAQs"
        faqs={deckWashingFAQs}
      />

      <ContactHome />
    </main>
  );
}
