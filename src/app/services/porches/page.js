import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceVisual from '@/components/ServiceVisual';

export const metadata = {
  title: "Custom Porch Design and Construction | Loudoun Decks",
  description: "Create a comfortable outdoor living space with custom porch design and construction in Northern Virginia. Built to integrate with your home."
};

const inclusions = [
  {
    title: "New Construction",
    desc: "Designing and building new porches that extend your indoor living space beautifully."
  },
  {
    title: "Porch Additions",
    desc: "Seamlessly adding structural porches to existing homes to improve functionality and value."
  },
  {
    title: "Integrated Design",
    desc: "Porches designed to complement existing decks, patios, and the layout of your property."
  }
];

const faqs = [
  {
    q: "Do you build porches for residential homes?",
    a: "Yes. Loudoun Decks provides professional porch construction services for residential properties."
  },
  {
    q: "Where do you offer porch construction services?",
    a: "We serve Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you offer free estimates for porch projects?",
    a: "Yes. We provide free, no-obligation estimates for porch construction."
  },
  {
    q: "Can a porch be added to an existing home?",
    a: "Yes. Porches can be planned and built as additions to existing homes or during new home construction."
  }
];

export default function PorchesPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Our Services"
        title="Custom Porch Design and Construction"
        description="Loudoun Decks provides professional porch design and construction for homeowners in Northern Virginia, creating comfortable and functional outdoor living spaces."
      />

      <ServiceMain 
        subtitle="Relax & Enjoy"
        title="Custom Porches for Your Residential Home"
        description="A porch extends your living space and creates a welcoming transition between your home and the outdoors. Loudoun Decks offers custom porch construction tailored to your home's layout and outdoor space."
        listTitle="Why Add a Porch:"
        listItems={[
          "Creates a comfortable transition to the outdoors",
          "Significantly improves your home's exterior aesthetic",
          "Provides a protected space for relaxing or entertaining",
          "Tailored specifically to your home's unique layout"
        ]}
        image1="/images/img16.jpeg"
        image2="/images/img20.jpeg"
      />

      <ServiceVisual image="/images/img22.jpeg" />

      <ServiceInclusions 
        title="Our Porch Services"
        description="We focus on proper planning, solid construction, and porches that integrate naturally with your home's existing structure."
        items={inclusions}
      />

      <ServicesFAQ 
        title="Porch Construction FAQs"
        faqs={faqs}
      />

      <ContactHome />
    </main>
  );
}
