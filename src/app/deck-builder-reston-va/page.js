import React from 'react';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
      path: '/deck-builder-reston-va',
      title: 'Deck Builder in Reston, VA | Trex Certified | Loudoun Decks',
      description: 'Top-rated deck builder in Reston, VA. Custom composite decks for Reston townhomes and single-family homes. Trex Certified. HOA-approved designs. Call (571) 655-7207.',
      image: '/images/img36.jpeg',
});

const inclusions = [
      {
            title: "Reston Association Expertise",
            desc: "We manage the Reston Association design review process from concept to approval, so you don't have to."
      },
      {
            title: "Townhome and Single-Family Specialists",
            desc: "Reston's mix of property types requires flexible expertise. We build quality decks for both townhomes and single-family homes."
      },
      {
            title: "Fairfax County Code Compliance",
            desc: "All Reston projects are built to Fairfax County code with proper permits, inspections, and engineering documentation."
      }
];

const restonFAQs = [
      {
            q: "Do you build decks in Reston, VA?",
            a: "Yes. Loudoun Decks serves Reston and surrounding Fairfax County communities including Herndon, Sterling, and Potomac Falls. We build on townhomes and single-family homes."
      },
      {
            q: "What does a deck cost in Reston, VA?",
            a: "Reston deck costs range from $18,000 for a basic pressure-treated build to $50,000+ for premium composite multi-level designs. Townhome decks typically range from $15,000 to $28,000."
      },
      {
            q: "Do you work with the Reston Association for deck approvals?",
            a: "Yes. We are experienced with the RA design review process. We prepare all required drawings and documentation to expedite your approval."
      },
      {
            q: "Can you build a deck on my Reston townhome?",
            a: "Yes. We specialize in townhome deck builds in Reston, including replacements, resurfacing, and new deck additions. We understand the structural requirements specific to townhome builds."
      },
      {
            q: "Are composite decks a good choice for Reston homes?",
            a: "Yes. Trex and TimberTech composite decking is ideal for Reston homes. Low maintenance, weather-resistant, and available in HOA-approved color options."
      },
      {
            q: "How long does it take to get a deck permit in Reston?",
            a: "Fairfax County deck permits typically take 3-5 weeks. We manage the full permit application and coordinate with the county for the fastest possible timeline."
      }
];

const restonFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": restonFAQs.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": a
            }
      }))
};

const expansionSections = [
      {
            title: "Why Reston Homeowners Choose Loudoun Decks",
            paragraphs: [
                  "Reston Association has specific design standards for all exterior structures \u2014 materials, colors, and dimensions must be pre-approved before you can even apply for a Fairfax County permit. We\u2019ve navigated RA\u2019s approval process dozens of times and know which materials and colors are pre-approved, which require a variance, and how to write your application to minimize back-and-forth.",
                  "We build in all Reston clusters and have completed projects in North Point, South Lakes, and Lake Anne neighborhoods. Recent projects: 320 sqft Trex deck with Transcend Lineage railings in North Point (2025), screened porch addition in South Lakes (2024)."
            ]
      },
      {
            title: "Premium Deck Builder Serving Reston, VA",
            paragraphs: [
                  "Reston, Virginia is a community unlike any other in Northern Virginia. Planned around paths, lakes, and green spaces, Reston homeowners have a unique relationship with the outdoors. A custom deck here is not just a home improvement. It is an extension of the outdoor lifestyle that defines the community. Loudoun Decks brings premium deck building craftsmanship to Reston and Fairfax County.",
                  "We build on both townhomes and single-family homes throughout Reston. Our team understands the structural nuances of townhome deck builds including shared wall considerations, HOA footprint limitations, and the specific material requirements of the Reston Association. For single-family homes, we deliver the same high-end composite and wood designs we are known for across all of Northern Virginia.",
                  "Reston projects range from $15,000 for a townhome deck replacement to $50,000+ for multi-level custom composite builds with pergola and outdoor kitchen. We compete on quality, credentials, and local track record."
            ]
      },
      {
            title: "Reston Association Approvals - We Handle Everything",
            paragraphs: [
                  "Navigating the Reston Association design review process is one of the biggest pain points for Reston homeowners. The RA requires specific documentation and architectural drawings before approving any exterior modification. Many homeowners find this time-consuming. We find it routine.",
                  "We prepare professional site plans and architectural drawings that meet RA standards. We submit on your behalf, respond to review comments, and track the approval. Our experience means fewer revision cycles and faster approvals, getting your project started sooner.",
                  "We are fully licensed and insured in Fairfax County and pull all required Fairfax County building permits. Every project is fully legal, fully documented, and built to protect your investment and property value."
            ],
            listItems: [
                  { label: "RA Design Review", text: "Full documentation preparation and submission for Reston Association deck approvals." },
                  { label: "Fairfax County Permits", text: "We handle all Fairfax County permits and schedule inspections on your behalf." },
                  { label: "Townhome Expertise", text: "Specialized in the unique structural requirements of Reston townhome deck builds." },
                  { label: "5-Star Rated", text: "Consistently 5-Star Google Rated by homeowners across Reston and Fairfax County." }
            ]
      },
      {
            title: "Composite and Wood Decks for Reston Homes",
            paragraphs: [
                  "Reston homeowners value low-maintenance performance and clean aesthetics. Composite decking from Trex or TimberTech handles Reston outdoor exposure without fading, warping, or requiring seasonal work. As a Trex Platinum Partner and TimberTech Certified contractor, we provide the full premium product line with the best warranties in the industry.",
                  "For homeowners who prefer natural wood, we work with Western Red Cedar and pressure-treated lumber where the Reston Association approves natural materials. We match every material to the home, neighborhood, and budget, always focused on long-term performance and curb appeal.",
                  "Whether you are replacing a deteriorating deck, adding a new deck to a townhome, or building a complete outdoor living space, Loudoun Decks delivers premium results at every scope. Call (571) 655-7207 for your free on-site estimate."
            ]
      }
];

export default function DeckBuilderRestonPage() {
      return (
            <main>
                  <JsonLd data={restonFaqSchema} />
                  <ServicesHeader
                        subtext="Reston, VA's Trusted Builder"
                        title="Custom Deck Builder in Reston, VA"
                        description="Loudoun Decks builds premium decks in Reston. Reston Association approved. Fairfax County permitted. Trex Certified. 5-Star rated service."
                  />
                  <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
                        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
                              <Image
                                    src="/images/img17.jpeg"
                                    alt="Premium custom deck built by LDN Decks in Reston, Virginia"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 900px) 100vw, 900px"
                                    priority
                              />
                        </div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Reston DRB Expertise &amp; Contemporary Design</h2>
                  </div>
                  <ServiceMain
                        subtitle="Reston's Trusted Choice"
                        title="Deck Builder Reston VA - Premium Craftsmanship"
                        description="We build decks for Reston townhomes and single-family homes. RA-approved, Fairfax County permitted, and built to last."
                        listItems={[
                              "Reston Association design review management",
                              "Townhome and single-family deck specialists",
                              "Trex Platinum and TimberTech Certified",
                              "Screened porches, pergolas and outdoor kitchens",
                              "5-Star Google Rated - call (571) 655-7207"
                        ]}
                        image1="/images/img36.jpeg"
                        image2="/images/img37.jpeg"
                  />
                  <ServiceContentExpansion sections={expansionSections} />
                  <ServiceInclusions
                        title="Why Reston Homeowners Choose Loudoun Decks"
                        description="Reston Association expertise, Fairfax County permitting, and premium craftsmanship backed by a 5-Star Google Rated reputation."
                        items={inclusions}
                  />
                  <ProcessSteps />
                  <ServicesFAQ
                        title="Deck Builder Reston VA - FAQs"
                        faqs={restonFAQs}
                  />
                  <ServiceAreasGrid />
                  <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Reston" /></div></section>
                  <SimpleCTA title="Build Your Dream Deck in Reston" buttonText="Get Free Estimate" link="/contact" />
                  <ContactHome />
            </main>
      );
}
