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
    title: 'Contact Us | Free Deck Estimate Northern Virginia',
    description: 'Get a free deck estimate from LDN Decks. Call (571) 655-7207 or submit a request. Serving Loudoun, Fairfax & Prince William counties.',
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
