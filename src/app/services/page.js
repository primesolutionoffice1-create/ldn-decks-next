import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServicesGrid from '@/components/ServicesGrid';
import ServicesFAQ from '@/components/ServicesFAQ';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ServicesCallToAction from '@/components/ServicesCallToAction';

export const metadata = {
  title: "Our Outdoor Services | ldndecks",
  description: "View our comprehensive residential decking and outdoor solutions."
};

export default function ServicesPage() {
  return (
    <main>
       <ServicesHeader />
       <ServicesGrid />
       <ServicesFAQ />
       <ServicesFooterInfo />
       <ServicesCallToAction />
    </main>
  );
}
