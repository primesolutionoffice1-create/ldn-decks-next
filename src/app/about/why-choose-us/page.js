import React from 'react';
import WhyChooseHeader from '@/components/WhyChooseHeader';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import WhyChooseServices from '@/components/WhyChooseServices';
import ProjectProcess from '@/components/ProjectProcess';
import WhyChooseDetails from '@/components/WhyChooseDetails';
import WhyChooseFAQ from '@/components/WhyChooseFAQ';

export const metadata = {
  title: "Why Choose Us | ldndecks",
  description: "Learn why homeowners across Northern Virginia choose Loudoun Decks."
};

export default function WhyChooseUsPage() {
   return (
      <main>
         <WhyChooseHeader />
         <ServicesCallToAction />
         <ServicesFooterInfo />
         <WhyChooseServices />
         <ProjectProcess />
         <WhyChooseDetails />
         <WhyChooseFAQ />
      </main>
   );
}
