import React from 'react';
import ProcessHeader from '@/components/ProcessHeader';
import ProcessSteps from '@/components/ProcessSteps';
import ProcessMatters from '@/components/ProcessMatters';
import ProcessFAQ from '@/components/ProcessFAQ';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import SimpleCTA from '@/components/SimpleCTA';

export const metadata = {
  title: "Our Process | Loudoun Decks",
  description: "Learn about our clear and structured process for building outdoor living projects in Northern Virginia."
};

export default function ProcessPage() {
    return (
        <main>
            <ProcessHeader />
            <ProcessSteps />
            <ServicesFooterInfo />
            <ServicesCallToAction />
            <ProcessMatters />
            <ProcessFAQ />
            <SimpleCTA 
                title="Start your project"
                buttonText="Contact Us"
                link="/contact"
            />
        </main>
    );
}
