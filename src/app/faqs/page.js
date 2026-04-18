import React from 'react';
import FAQHeader from '@/components/FAQHeader';
import FAQCategorized from '@/components/FAQCategorized';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/faqs',
  title: 'Deck Building FAQs',
  description: 'Answers to common questions about deck building, materials, timelines, and pricing in Northern Virginia. Get the info you need before starting your project.',
});

export default function FAQPage() {
  return (
    <main>
      <FAQHeader />
      <FAQCategorized />
      <SimpleCTA
        title="Still have questions?"
        buttonText="Contact Us Today"
        link="/contact"
      />
    </main>
  );
}
