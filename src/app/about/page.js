import React from 'react';
import AboutHeader from '@/components/AboutHeader';
import QualityLeader from '@/components/QualityLeader';
import StatsRow from '@/components/StatsRow';
import AboutDetails from '@/components/AboutDetails';
import TeamGrid from '@/components/TeamGrid';

export const metadata = {
  alternates: {
    canonical: "https://ldndecks.com/about"
  },
  title: "About Us | ldndecks",
  description: "Learn more about Loudoun Decks, Northern Virginia's premier outdoor living structure craftsmen."
};

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
