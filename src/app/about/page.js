import React from 'react';
import AboutHeader from '@/components/AboutHeader';
import QualityLeader from '@/components/QualityLeader';
import StatsRow from '@/components/StatsRow';
import AboutDetails from '@/components/AboutDetails';
import TeamSection from '@/components/TeamSection';

export const metadata = {
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
      <TeamSection />
    </main>
  );
}
