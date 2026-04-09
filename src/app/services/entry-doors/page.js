import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceVisual from '@/components/ServiceVisual';

export const metadata = {
  title: "Entry Door Installation | Loudoun Decks",
  description: "Improve the curb appeal and security of your home with professional entry door installation in Northern Virginia. Coordinated exterior home upgrades."
};

const inclusions = [
  {
    title: "Door Replacement",
    desc: "Upgrading your home with a properly fitted and installed high-quality replacement entry door."
  },
  {
    title: "Professional Fitting",
    desc: "Ensuring every door integrates naturally with your home's structure and current exterior design."
  },
  {
    title: "Clean Finishes",
    desc: "A focus on proper installation and clean finishes that improve the daily functionality of your home."
  }
];

const faqs = [
  {
    q: "Do you install entry doors for residential homes?",
    a: "Yes. Loudoun Decks provides professional entry door installation services for residential properties."
  },
  {
    q: "Where do you offer entry door installation?",
    a: "We serve Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you provide free estimates for entry door installation?",
    a: "Yes. We offer free estimates for all residential entry door projects."
  },
  {
    q: "Can entry doors be replaced on existing homes?",
    a: "Yes. Entry doors can be installed as replacements for existing doors or during larger exterior renovations."
  }
];

export default function EntryDoorsPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Our Services"
        title="Entry Door Installation"
        description="Loudoun Decks provides professional entry door installation for homeowners in Northern Virginia, helping improve curb appeal and everyday access to your home."
      />

      <ServiceMain 
        subtitle="Curb Appeal"
        title="Proper Installation for a Better First Impression"
        description="Your entry door plays an important role in how your home looks, functions, and feels. Loudoun Decks offers residential entry door installation designed to fit your home's layout and style."
        listTitle="Why Choose Us for Doors:"
        listItems={[
          "Local service focused on Northern Virginia homes",
          "Careful planning and proper structural fitting",
          "Doors that align with your exterior design",
          "Free estimates and clear project communication"
        ]}
        image1="/images/img35.jpeg"
        image2="/images/img36.jpeg"
      />

      <ServiceVisual image="/images/img37.jpeg" />

      <ServiceInclusions 
        title="Our Entry Door Services"
        description="Each project is planned based on your home's specific structure and the particular door being installed."
        items={inclusions}
      />

      <ServicesFAQ 
        title="Entry Door FAQs"
        faqs={faqs}
      />

      <ContactHome />
    </main>
  );
}
