import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceVisual from '@/components/ServiceVisual';

export const metadata = {
  title: "Custom Patio Design and Construction | Loudoun Decks",
  description: "Create functional and inviting hardscapes with custom patio design and construction in Northern Virginia. Built to complement your home."
};

const inclusions = [
  {
    title: "New Patio Construction",
    desc: "Designing and building custom patios that provide a dedicated outdoor space for entertaining."
  },
  {
    title: "Hardscape Expansion",
    desc: "Patio additions and outdoor living expansions that integrate with your existing decks and porches."
  },
  {
    title: "Inviting Layouts",
    desc: "Outdoor patio layouts planned around your property size and intended lifestyle uses."
  }
];

const faqs = [
  {
    q: "Do you build patios for residential homes?",
    a: "Yes. Loudoun Decks provides professional patio design and construction services for residential properties."
  },
  {
    q: "Where do you offer patio construction services?",
    a: "We serve homeowners in Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you offer free estimates for patio projects?",
    a: "Yes. We provide free, no-obligation estimates for all patio construction projects."
  },
  {
    q: "Can a patio be built near a deck or porch?",
    a: "Yes. Patios can be planned to integrate seamlessly with decks, porches, and other existing outdoor features."
  }
];

export default function PatiosPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Our Services"
        title="Custom Patio Design and Construction"
        description="Loudoun Decks provides professional patio design and construction for homeowners in Northern Virginia, helping create functional and inviting outdoor living areas."
      />

      <ServiceMain 
        subtitle="Invite & Entertain"
        title="Custom Patios for Modern Outdoor Living"
        description="A patio creates a dedicated outdoor space for relaxing, entertaining, and everyday use. Loudoun Decks offers custom patio construction tailored to your property and outdoor goals."
        listTitle="Why Choose Our Patios:"
        listItems={[
          "Local experience with Northern Virginia homes",
          "Patio designs that fit your property's specific layout",
          "Clean construction and proper hardscape planning",
          "Patios that bridge the gap between home and garden"
        ]}
        image1="/images/img24.jpeg"
        image2="/images/img27.jpeg"
      />

      <ServiceVisual image="/images/img28.jpeg" />

      <ServiceInclusions 
        title="Our Patio Services"
        description="We focus on proper layout, durable construction, and patios that integrate naturally with decks and other outdoor features."
        items={inclusions}
      />

      <ServicesFAQ 
        title="Patio Construction FAQs"
        faqs={faqs}
      />

      <ContactHome />
    </main>
  );
}
