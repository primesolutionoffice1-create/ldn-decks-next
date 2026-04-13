import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceVisual from '@/components/ServiceVisual';

export const metadata = {
  alternates: {
    canonical: "https://ldndecks.com/services/porches/front-porch"
  },
  title: "Front Porch Construction | Curb Appeal Upgrades",
  description: "Transform your home's entrance with a custom front porch. Professional design and construction services in Northern Virginia."
};

const inclusions = [
  {
    title: "Curb Appeal Design",
    desc: "We focus on creating an entrance that complements your home's architecture and adds immediate value."
  },
  {
    title: "Durable Materials",
    desc: "Using weather-resistant wood or composite materials that look great and last for decades."
  },
  {
    title: "Structural Integration",
    desc: "Seamlessly connecting the new porch to your home's foundation and roofline."
  }
];

const faqs = [
  {
    q: "Does a front porch add value to my home?",
    a: "Yes, a well-designed front porch is one of the highest ROI outdoor projects, significantly improving curb appeal."
  },
  {
    q: "Can you add a roof to my existing front steps?",
    a: "In many cases, yes. We can design a portico or a full front porch roof that integrates with your current structure."
  }
];

export default function FrontPorchPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Porch Services"
        title="Custom Front Porch Construction"
        description="Create a welcoming entrance to your home with a custom-designed front porch built for style and durability."
      />

      <ServiceMain 
        subtitle="Welcoming Entrances"
        title="Professional Front Porch Design & Build"
        description="Your front porch is the face of your home. We specialize in creating high-impact front entries that combine functionality with beautiful aesthetics, serving homeowners across Loudoun and Fairfax."
        listTitle="Front Porch Options:"
        listItems={[
          "Traditional covered front porches",
          "Modern minimalist porticos",
          "Wrap-around front porches",
          "Steps and railing integration"
        ]}
        image1="/images/img22.jpeg"
        image2="/images/img23.jpeg"
      />

      <ServiceVisual image="/images/img31.jpeg" />

      <ServiceInclusions 
        title="What's Included"
        description="From the initial drawing to the final coat of paint or stain, we handle every detail."
        items={inclusions}
      />

      <ProcessSteps />

      <ServicesFAQ 
        title="Front Porch FAQs"
        faqs={faqs}
      />

      <ContactHome />
    </main>
  );
}
