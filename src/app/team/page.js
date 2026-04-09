import React from 'react';
import TeamHeader from '@/components/TeamHeader';
import TeamGrid from '@/components/TeamGrid';
import ContactHome from '@/components/ContactHome';

export const metadata = {
  title: "Our Team | Loudoun Decks",
  description: "Meet the professional craftsmanship team behind Loudoun Decks."
};

export default function TeamPage() {
  return (
    <main>
      <TeamHeader />
      <TeamGrid />
      <ContactHome />
    </main>
  );
}
