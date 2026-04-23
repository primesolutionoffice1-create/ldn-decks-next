import React from 'react';
import AboutHeader from '@/components/AboutHeader';
import QualityLeader from '@/components/QualityLeader';
import StatsRow from '@/components/StatsRow';
import AboutDetails from '@/components/AboutDetails';
import TeamGrid from '@/components/TeamGrid';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/about',
  title: 'About LDN Decks',
  description: "Learn about LDN Decks - Northern Virginia's trusted deck builder serving Loudoun, Fairfax, and Prince William County with Trex-certified craftsmanship.",
});

export default function AboutPage() {
  return (
    <main>
      <AboutHeader />
      <QualityLeader />
      <StatsRow />
      <AboutDetails />
      <TeamGrid />
    </main>
  );
}
