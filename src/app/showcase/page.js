import React from 'react';
import ShowcaseHeader from '@/components/ShowcaseHeader';
import ShowcaseGrid from '@/components/ShowcaseGrid';
import ShowcaseStats from '@/components/ShowcaseStats';
import Testimonials from '@/components/Testimonials';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/showcase',
  title: 'Deck Project Gallery | Northern Virginia | Loudoun Decks',
  description: 'Browse 50+ custom deck, porch, patio, and fence projects built across Loudoun, Fairfax & Prince William counties. Before/after photos and project details.',
});

export default function ShowcasePage() {
  return (
    <main>
      <ShowcaseHeader />
      <ShowcaseGrid />
      <ShowcaseStats />
      <Testimonials />
      <RelatedGuides currentPath="/showcase" />
      <ContactHome />
    </main>
  );
}
