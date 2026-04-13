import React from 'react';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ContactFAQ from '@/components/ContactFAQ';

export const metadata = {
  alternates: {
    canonical: "https://ldndecks.com/contact"
  },
  title: "Contact Us | ldndecks",
  description: "Get in touch for a free estimate on your outdoor living project."
};

export default function ContactPage() {
  return (
    <main>
       <ContactHeader />
       <ContactForm />
       <ContactMap />
       <ServicesFooterInfo />
       <ContactFAQ />
    </main>
  );
}
