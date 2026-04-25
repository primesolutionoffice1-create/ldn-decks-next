import React from 'react';
import TeamHeader from '@/components/TeamHeader';
import TeamGrid from '@/components/TeamGrid';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/team',
  title: 'Our Team | Deck Builders Northern Virginia',
  description: 'Meet the LDN Decks team 24+ years of deck building experience in Northern Virginia. Trex Platinum Partner, licensed, insured, and 5-star rated.',
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
