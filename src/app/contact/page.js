import React from 'react';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ContactFAQ from '@/components/ContactFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
    path: '/contact',
    title: 'Contact Us',
    description: 'Get a free estimate on your deck or outdoor living project. Call or message the LDN Decks team serving Loudoun, Fairfax, and Prince William County.',
});

export default function ContactPage() {
    return (
          <main>
      <Breadcrumbs />
            <ContactHeader />
            <ContactForm />
            <ContactMap />
            <ServicesFooterInfo />
            <ContactFAQ />
      </main>
    );
}
