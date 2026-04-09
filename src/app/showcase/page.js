import React from 'react';
import ShowcaseHeader from '@/components/ShowcaseHeader';
import ShowcaseGrid from '@/components/ShowcaseGrid';
import ShowcaseStats from '@/components/ShowcaseStats';
import Testimonials from '@/components/Testimonials';
import ContactHome from '@/components/ContactHome';

export const metadata = {
  title: "Projects Showcase | ldndecks",
  description: "Explore our portfolio of stunning outdoor living transformations."
};

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
