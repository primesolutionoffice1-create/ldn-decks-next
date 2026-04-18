import React from 'react';
import ShowcaseHeader from '@/components/ShowcaseHeader';
import ShowcaseGrid from '@/components/ShowcaseGrid';
import ShowcaseStats from '@/components/ShowcaseStats';
import Testimonials from '@/components/Testimonials';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/showcase',
  title: 'Deck Projects Showcase',
  description: 'Browse our portfolio of custom decks, pergolas, and outdoor living spaces built across Loudoun and Fairfax County, Virginia.',
});

export default function ShowcasePage() {
  return (
    <main>
      <ShowcaseHeader />
      <ShowcaseGrid />
      <ShowcaseStats />
      <Testimonials />
      <ContactHome />
    </main>
  );
}
