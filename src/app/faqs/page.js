import React from 'react';
import FAQHeader from '@/components/FAQHeader';
import FAQCategorized from '@/components/FAQCategorized';
import SimpleCTA from '@/components/SimpleCTA';

export const metadata = {
  title: "FAQs | Loudoun Decks",
  description: "Find answers to frequently asked questions about deck building, our process, and our services in Northern Virginia."
};

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
