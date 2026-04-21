import React from 'react';
import ProcessHeader from '@/components/ProcessHeader';
import ProcessSteps from '@/components/ProcessSteps';
import ProcessMatters from '@/components/ProcessMatters';
import ProcessFAQ from '@/components/ProcessFAQ';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import SimpleCTA from '@/components/SimpleCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/about/process",
  title: "Our Process | LDN Decks",
  description: "Learn about our clear and structured process for building outdoor living projects in Northern Virginia.",
});

export default function ProcessPage() {
  return (
    <main>
      <Breadcrumbs />
      <ProcessHeader />
      <ProcessSteps />
      <ServicesFooterInfo />
      <ServicesCallToAction />
      <ProcessMatters />
      <ProcessFAQ />
      <SimpleCTA title="Start your project" buttonText="Contact Us" link="/contact" />
    </main>
  );
}
