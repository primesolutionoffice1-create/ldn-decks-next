import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceVisual from '@/components/ServiceVisual';

export const metadata = {
  title: "Professional Fence Installation | Loudoun Decks",
  description: "Secure and beautify your property with professional residential fence installation in Northern Virginia. Custom fencing by Loudoun Decks."
};

const inclusions = [
  {
    title: "Privacy & Boundary",
    desc: "Yard and property boundary fencing designed to help define how outdoor areas are used."
  },
  {
    title: "Integrated Design",
    desc: "Fences planned to work seamlessly alongside decks, porches, and other outdoor spaces."
  },
  {
    title: "Quality Materials",
    desc: "Clean installation and practical design for long-term functionality and durability."
  }
];

const faqs = [
  {
    q: "Do you install residential fences?",
    a: "Yes. Loudoun Decks provides professional fence installation services for residential properties."
  },
  {
    q: "Where do you offer fence installation services?",
    a: "We serve homeowners in Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you provide free estimates for fencing projects?",
    a: "Yes. We offer free, no-obligation estimates to review your specific fencing needs."
  },
  {
    q: "Can fencing be installed near decks or patios?",
    a: "Yes. Fence placement can be planned to integrate with decks, patios, and other outdoor living spaces."
  }
];

export default function FencePage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Our Services"
        title="Professional Fence Installation"
        description="Loudoun Decks provides professional fence installation for homeowners in Northern Virginia, helping define property boundaries and enhance outdoor security."
      />

      <ServiceMain 
        subtitle="Privacy & Beauty"
        title="Residential Fence Installation for Your Home"
        description="A properly installed fence can improve privacy, security, and the overall look of your property. Loudoun Decks offers residential fence installation designed to complement your home and outdoor layout."
        listTitle="Why Choose Our Fencing:"
        listItems={[
          "Enhanced privacy for your family and pets",
          "Clearly defined property boundaries",
          "Integration with existing outdoor structures",
          "Safe and professional installation process"
        ]}
        image1="/images/img29.jpeg"
        image2="/images/img30.jpeg"
      />

      <ServiceVisual image="/images/img31.jpeg" />

      <ServiceInclusions 
        title="Our Fence Services"
        description="We tailor every fence project to the size, placement needs, and intended use of your residential property."
        items={inclusions}
      />

      <ServicesFAQ 
        title="Fence Installation FAQs"
        faqs={faqs}
      />

      <ContactHome />
    </main>
  );
}
