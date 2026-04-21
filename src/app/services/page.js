import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServicesGrid from '@/components/ServicesGrid';
import ServicesFAQ from '@/components/ServicesFAQ';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import RelatedGuides from '@/components/RelatedGuides';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/services',
  title: 'Deck Building & Outdoor Living Services | Loudoun Decks',
  description: 'Custom decks, screened porches, pergolas, patios, fencing & more in Northern Virginia. Trex Platinum Partner. 5-star rated. Free estimates: (571) 655-7207.',
});

export default function ServicesPage() {
  return (
    <main>
       <Breadcrumbs />
       <ServicesHeader />
       <ServicesGrid />
       <ServicesFAQ />
       <ServicesFooterInfo />
       <RelatedGuides currentPath="/services" />
       <ServicesCallToAction />
    </main>
  );
}
