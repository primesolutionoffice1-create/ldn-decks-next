import React from 'react';
import WhyChooseHeader from '@/components/WhyChooseHeader';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import WhyChooseServices from '@/components/WhyChooseServices';
import ProjectProcess from '@/components/ProjectProcess';
import WhyChooseDetails from '@/components/WhyChooseDetails';
import WhyChooseFAQ from '@/components/WhyChooseFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/about/why-choose-us",
  title: "Why Choose LDN Decks | Northern Virginia's Premier Deck Builder",
  description: "Why Northern Virginia homeowners choose LDN Decks: Trex Platinum Partner, 24+ years experience, 5-star Google rating, 10-year warranty, and in-house crews.",
});

export default function WhyChooseUsPage() {
  return (
    <main>
      <Breadcrumbs />
      <WhyChooseHeader />
      <ServicesCallToAction />
      <ServicesFooterInfo />
      <WhyChooseServices />
      <ProjectProcess />
      <WhyChooseDetails />
      <WhyChooseFAQ />
    </main>
  );
}
