import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceVisual from '@/components/ServiceVisual';

export const metadata = {
  title: "Custom Gazebos and Pergolas | Loudoun Decks",
  description: "Add shade and character to your outdoor space with custom gazebos and pergolas in Northern Virginia. Designed and built by Loudoun Decks."
};

const inclusions = [
  {
    title: "Custom Design",
    desc: "Gazebos and pergolas tailored to the layout of your property and your outdoor goals."
  },
  {
    title: "Freestanding or Attached",
    desc: "Structures designed to complement decks and patios or act as standalone garden features."
  },
  {
    title: "Quality Construction",
    desc: "Built with a focus on clean design, proper installation, and long-lasting results."
  }
];

const faqs = [
  {
    q: "What is the main difference between a gazebo and a pergola?",
    a: "A gazebo typically has a solid roof and provides full shade, while a pergola has an open-beam design that provides partial shade."
  },
  {
    q: "Do you build custom gazebos and pergolas?",
    a: "Yes. Our gazebos and pergolas are planned based on your outdoor space and preferences."
  },
  {
    q: "Where do you offer gazebo and pergola services?",
    a: "We serve Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. We provide free estimates for gazebo and pergola projects."
  }
];

export default function GazeboPergolaPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Our Services"
        title="Custom Gazebos and Pergolas"
        description="Loudoun Decks designs and builds custom gazebos and pergolas for homeowners in Loudoun County, Fairfax County, and Prince William County, creating functional and visually appealing outdoor living spaces."
      />

      <ServiceMain 
        subtitle="Shade & Structure"
        title="Custom Structures for Your Outdoor Space"
        description="Gazebos and pergolas add structure, shade, and character to outdoor living areas. Whether placed over a patio, deck, or garden space, these structures help define how outdoor areas are used and enjoyed."
        listTitle="Choosing Your Structure:"
        listItems={[
          "Gazebos provide a solid roof for full shade",
          "Pergolas offer partial shade with an open-beam design",
          "Both options enhance the visual definition of your space",
          "Custom builds integrate perfectly with existing decks"
        ]}
        image1="/images/img23.jpeg"
        image2="/images/img25.jpeg"
      />

      <ServiceVisual image="/images/img26.jpeg" />

      <ServiceInclusions 
        title="Our Services"
        description="We offer professional installation for custom outdoor features built to match your property layout."
        items={inclusions}
      />

      <ServicesFAQ 
        title="Gazebos and Pergolas FAQs"
        faqs={faqs}
      />

      <ContactHome />
    </main>
  );
}
