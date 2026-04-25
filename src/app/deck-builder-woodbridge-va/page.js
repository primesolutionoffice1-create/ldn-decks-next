import React from 'react';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-woodbridge-va',
  title: 'Deck Builder in Woodbridge VA | Custom Composite Decks',
  description: 'Top-rated deck builder in Woodbridge, VA. 5.0★ Google. Specializing in affordable luxury Trex & TimberTech decks for Woodbridge, Lake Ridge & Dale City. Free estimate.',
  image: '/images/img10.jpeg',
});

const inclusions = [
  {
    title: "Best Value in NoVA",
    desc: "Get the same premium Trex and TimberTech materials as Fairfax, but with the better value pricing available in Prince William County."
  },
  {
    title: "PW County Permit Experts",
    desc: "We handle 100% of the Prince William County permitting process, known for faster approvals than neighboring counties."
  },
  {
    title: "Community Specific Designs",
    desc: "Tailored designs for Woodbridge's diverse neighborhoods, from Lake Ridge townhomes to Potomac Shores estates."
  }
];

const woodbridgeFAQs = [
  {
    q: "How much does a custom deck cost in Woodbridge, VA?",
    a: "Deck projects in Woodbridge typically range from $16,000 to $45,000. Prince William County often offers better overall value for deck construction, with projects typically costing 10-15% less than comparable builds in Loudoun or Fairfax due to lower permitting fees and efficient local logistics."
  },
  {
    q: "Do I need a permit for a deck in Woodbridge?",
    a: "Yes. Woodbridge falls under Prince William County jurisdiction. All decks require a building permit. The good news is that PW County permitting is generally faster than Fairfax, often taking just 2-4 weeks. We handle the entire submission process for you."
  },
  {
    q: "Do you serve Lake Ridge and Dale City?",
    a: "Absolutely. We are highly active in Lake Ridge, Dale City, Montclair, and the new Potomac Shores developments. We know the HOA requirements for these communities and ensure your deck is 100% compliant."
  },
  {
    q: "Can you build screened porches in Woodbridge?",
    a: "Yes. Screened porches are extremely popular in Woodbridge to enjoy the outdoors while staying protected from insects. We build both standalone porches and integrated deck/porch combinations."
  },
  {
    q: "What is the best material for a deck in Woodbridge?",
    a: "We highly recommend composite decking like Trex or TimberTech for Woodbridge homes. Virginia's humidity can be hard on traditional wood, leading to rot and frequent staining costs. Composite decking stays beautiful for decades with just a simple wash."
  }
];

const woodbridgeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": woodbridgeFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const expansionSections = [
  {
    title: "Woodbridge's Most Trusted Deck Building Team",
    paragraphs: [
      "Woodbridge, VA and the surrounding Prince William County areas offer some of the best outdoor living potential in Northern Virginia. At Loudoun Decks, we believe that homeowners in Woodbridge deserve the same high-tier craftsmanship and premium materials as those in the most expensive zip codes. Our team brings a commitment to '5-Star Excellence' to every project, whether it's a compact townhome deck in Lake Ridge or a sprawling multi-level build in Potomac Shores.",
      "We focus on 'Full Projects Only,' which means we don't just 'slap on' some boards. We handle the structural design, the architectural drawings, the Prince William County permits, and the final high-fidelity construction. Our goal is to provide a stress-free experience that transforms your backyard into a maintenance-free sanctuary.",
      "With over 20 years of experience in the NoVA market, we understand the local climate and how it affects different building materials. This is why we are certified experts in Trex and TimberTech—the two leaders in composite decking that are perfectly suited for Woodbridge's humid summers and variable winters."
    ]
  },
  {
    title: "Maximizing Your Outdoor Investment in Prince William",
    paragraphs: [
      "One of the biggest advantages of building a deck in Woodbridge is the incredible value you can achieve. Because Prince William County has a streamlined permitting process and more efficient site logistics, your budget goes significantly further here than in other parts of Northern Virginia. You can often upgrade to a premium material like Trex Transcend for the same price as a basic wood deck in Fairfax.",
      "We specialize in designing decks that maximize your property's usable square footage. For homes in Dale City or Montclair with larger lots, we often design multi-zone decks that include areas for dining, lounging, and even integrated fire pits or outdoor kitchens. If your property backs into the beautiful woods common in Lake Ridge, we can design your deck to preserve those views with slim-profile aluminum railings.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We take pride in our ability to deliver 'Fairfax Quality at Woodbridge Value,' ensuring your home stands out in your neighborhood and on the real estate market."
    ],
    listItems: [
      { label: "PW County Permit Pro", text: "Fast-tracked permit submissions and 100% inspection pass rate in Woodbridge." },
      { label: "HOA Compliance", text: "Expertise in Lake Ridge, Montclair, and Potomac Shores HOA guidelines." },
      { label: "Composite Specialists", text: "Certified installers for Trex Platinum and TimberTech product lines." },
      { label: "5-Star Local Reputation", text: "Deeply rooted in the NoVA community with hundreds of satisfied local clients." }
    ]
  },
  {
    title: "Low-Maintenance Living for Woodbridge Families",
    paragraphs: [
      "Traditional wood decks in Woodbridge require a lot of work. To keep them from rotting or warping in the Virginia sun, they need to be sanded and stained every 2 years. For a standard 300 sqft deck, that's a recurring cost of $1,500 to $2,500 every time. Over a decade, you could spend $10,000 just on maintenance.",
      "By choosing a composite deck from Loudoun Decks, you are making a smart financial decision. Trex and TimberTech boards are engineered to resist fading, staining, and mold. They don't splinter, so they are safe for kids and pets to walk on barefoot. Best of all, they pay for their initial premium in maintenance savings alone within just 5-7 years.",
      "Our deck resurfacing service is also highly popular in Woodbridge. If your existing deck frame is still structurally sound, we can often save you up to 40% on project costs by simply replacing the old wood boards and railings with new, high-performance composite. It's a great way to 'upcycle' your deck for the next 25 years."
    ]
  },
  {
    title: "The Heart of Outdoor Entertaining",
    paragraphs: [
      "A deck is more than just a floor; it's where memories are made. Whether you're hosting a July 4th BBQ in Dale City or enjoying a quiet coffee in Lake Ridge, your deck should be a place of comfort. We offer a range of 'add-on' features that turn a standard deck into a complete outdoor room. Integrated LED lighting in the stairs and railings allows you to enjoy your space long after the sun goes down.",
      "We also build custom pergolas for shade, screened porches for insect protection, and built-in seating for maximum functionality. Our 'Full Project' philosophy ensures that every element of your outdoor space is cohesive, durable, and beautiful. We don't consider a job done until you are 100% satisfied and ready to recommend us to your Woodbridge neighbors.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We are committed to building the best decks in Woodbridge, one home at a time."
    ]
  }
];

export default function WoodbridgeDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={woodbridgeFaqSchema} />
      <ServicesHeader
        subtext="Woodbridge, VA's Trusted Local Builder"
        title="Custom Deck Builder in Woodbridge, VA"
        description="Loudoun Decks brings premium, low-maintenance outdoor living to Woodbridge, Lake Ridge, and Dale City. Trex Platinum Partner. 5-Star Rated."
      />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>Project Minimum: $5,000+</strong>
            <br />
            We specialize in <strong style={{ color: '#111' }}>full builds and large scale projects</strong> only. 
            We do <strong style={{ color: '#111' }}>NOT</strong> offer small repairs or minor fixes.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Woodbridge's Choice for Value"
        title="Deck Builder Woodbridge VA - Premium Quality"
        description="We build the decks Woodbridge families love. Affordable luxury, Prince William County permit expertise, and 5-Star results from $16k+."
        listItems={[
          "Trex Platinum & TimberTech Certified",
          "Prince William County building permit experts",
          "Lake Ridge & Montclair HOA specialist",
          "Screened porches, pergolas & deck resurfacing",
          "5-Star Google Rated - call (571) 655-7207"
        ]}
        image1="/images/img10.jpeg"
        image2="/images/img11.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img32.jpeg"
            alt="Premium custom deck built by LDN Decks in Woodbridge, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Woodbridge Project: Dale City Transformation</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          Our featured Woodbridge project includes a <strong>$24,000 320 sqft Trex Enhance Deck</strong> in Dale City. 
          This budget-smart project replaced a failing wood deck with a modern composite space featuring 
          Signature aluminum railings and integrated lighting. We secured the PW County permit in record time, 
          completing the entire build in just 2 weeks.
        </p>
      </div>

      <ServiceInclusions
        title="Why Woodbridge Homeowners Choose Loudoun Decks"
        description="Local knowledge, premium materials, and a process built for Prince William properties."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Woodbridge VA - FAQs"
        faqs={woodbridgeFAQs}
      />
      <ServiceAreasGrid />
      <SimpleCTA title="Build Your Dream Deck in Woodbridge" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-woodbridge-va" />
      <ContactHome />
    </main>
  );
}
