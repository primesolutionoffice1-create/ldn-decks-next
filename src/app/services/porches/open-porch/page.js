import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceVisual from '@/components/ServiceVisual';

export const metadata = {
  title: "Open Porch Design & Construction | Outdoor Living | Loudoun Decks",
  description: "Expand your living area with a custom open porch. Enjoy the outdoors with protection from the sun and elements in Northern Virginia."
};

const inclusions = [
  {
    title: "Seamless Flow",
    desc: "We design open porches that feel like a natural extension of your indoor living area."
  },
  {
    title: "Weather Protection",
    desc: "High-quality roofing systems designed to shed water and provide shade on hot summer days."
  },
  {
    title: "Electrical Integration",
    desc: "Optional ceiling fans, lighting, and outlet placement to maximize your comfort."
  }
];

const faqs = [
  {
    q: "Can I convert an existing deck into an open porch?",
    a: "In many cases, yes. We can evaluate your deck's structure to see if it can support a roof system."
  },
  {
    q: "What materials do you use for the ceiling?",
    a: "We offer various finishes including tongue-and-groove cedar, beadboard, and low-maintenance VPC."
  }
];

export default function OpenPorchPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Porch Services"
        title="Custom Open Porch Design"
        description="Enjoy the perfect balance of fresh air and shade with an open porch custom-built for your home."
      />

      <ServiceMain 
        subtitle="Outdoor Lounging"
        title="Professional Open Porch Construction"
        description="An open porch provides a beautiful, airy space to relax and entertain without worrying about direct sun or light rain. We build custom open porches that perfectly match your home's style across Northern Virginia."
        listTitle="Open Porch Features:"
        listItems={[
          "Custom roof styles (Gable, Shed, Hip)",
          "Integrated lighting and ceiling fans",
          "Premium flooring options",
          "Architectural columns and railings"
        ]}
        image1="/images/img19.jpeg"
        image2="/images/img17.jpeg"
      />

      <ServiceVisual image="/images/img26.jpeg" />

      <ServiceInclusions 
        title="What Our Team Provides"
        description="We handle the structural engineering, permitting, and construction from start to finish."
        items={inclusions}
      />

      <ProcessSteps />

      <ServicesFAQ 
        title="Open Porch FAQs"
        faqs={faqs}
      />

      <ContactHome />
    </main>
  );
}
