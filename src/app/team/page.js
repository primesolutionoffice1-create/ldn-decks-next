import React from 'react';
import TeamHeader from '@/components/TeamHeader';
import TeamGrid from '@/components/TeamGrid';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/team',
  title: 'Our Team | LDN Decks',
  description: 'Meet the professional craftsmanship team behind Loudoun Decks.',
});

export default function TeamPage() {
  return (
    <main>
      <TeamHeader />
      <TeamGrid />
      <ContactHome />
    </main>
  );
}
