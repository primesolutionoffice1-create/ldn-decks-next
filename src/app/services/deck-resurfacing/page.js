import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceVisual from '@/components/ServiceVisual';

export const metadata = {
  title: "Deck Resurfacing Services | Loudoun Decks",
  description: "Professional deck resurfacing for residential homes in Northern Virginia. Refresh and extend the life of your existing deck."
};

const inclusions = [
  {
    title: "Condition Review",
    desc: "We start by reviewing the structural condition of your existing deck to ensure it is a safe candidate for resurfacing."
  },
  {
    title: "Appearance Update",
    desc: "Planning specific updates to improve the appearance and function of your outdoor space."
  },
  {
    title: "Surface Refresher",
    desc: "Refreshing the deck surface with modern materials to extend its overall use and durability."
  }
];

const resurfacingFAQs = [
  {
    q: "What is deck resurfacing?",
    a: "Deck resurfacing focuses on updating the surface and appearance of an existing deck rather than building a completely new structure from scratch."
  },
  {
    q: "Do you inspect the deck before resurfacing?",
    a: "Yes. We conduct a thorough review of the existing deck structure during our consultation to ensure it is structurally sound."
  },
  {
    q: "What areas do you serve for deck resurfacing?",
    a: "We provide deck resurfacing services throughout Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. We offer free consultations for homeowners considering a refresh of their existing deck surface."
  }
];

export default function DeckResurfacingPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Our Services"
        title="Deck Resurfacing Services"
        description="Loudoun Decks provides professional deck resurfacing for homeowners in Northern Virginia, helping refresh and improve existing outdoor spaces without the cost of a full rebuild."
      />

      <ServiceMain 
        subtitle="Refresh & Renew"
        title="Refresh Your Existing Outdoor Space"
        description="If your deck structure is still usable but the surface has aged or worn over time, deck resurfacing is a practical, value-driven option. We help homeowners update their decks to improve both appearance and usability."
        listTitle="When to Consider Resurfacing:"
        listItems={[
          "The main structure is still functional and safe",
          "The surface boards show signs of wear or aging",
          "You want to upgrade to composite materials",
          "You want to improve your home's value quickly"
        ]}
        image1="/images/img06.jpeg"
        image2="/images/img10.jpeg"
      />

      <ServiceVisual image="/images/img12.jpeg" />

      <ServiceInclusions 
        title="Our Resurfacing Process"
        description="Our deck resurfacing service focuses on maximizing the life of your existing investment with modern, durable finishes."
        items={inclusions}
      />

      <ServiceInclusions 
        title="Why Choose Resurfacing"
        description="Many homeowners choose resurfacing as a way to refresh their outdoor space efficiently and economically."
        items={[
          { title: "Cost Effective", desc: "Saves the significant expense of rebuilding a perfectly good structure from scratch." },
          { title: "Faster Project", desc: "Resurfacing typically takes less time than a full installation, getting you back to your deck sooner." },
          { title: "Material Upgrade", desc: "An excellent opportunity to transition from wood to low-maintenance composite materials." }
        ]}
      />

      <ServicesFAQ 
        title="Deck Resurfacing FAQs"
        faqs={resurfacingFAQs}
      />

      <ContactHome />
    </main>
  );
}
