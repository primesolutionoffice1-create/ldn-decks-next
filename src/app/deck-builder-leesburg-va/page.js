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
import RatingBadge from '@/components/RatingBadge';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
      path: '/deck-builder-leesburg-va',
      title: 'Deck Builder in Leesburg VA | Custom Decks',
      description: 'Top-rated deck builder in Leesburg, VA. Custom composite and wood decks. Trex Certified. Traditional and contemporary designs for Leesburg homes. Call (571) 655-7207.',
      image: '/images/img36.jpeg',
});

const inclusions = [
      {
            title: "Historic Leesburg Expertise",
            desc: "We design decks that respect the architectural character of historic Leesburg while delivering modern outdoor living performance."
      },
      {
            title: "Leesburg Town Code Compliance",
            desc: "Experienced with Leesburg town permits and the specific zoning requirements for properties within the town limits."
      },
      {
            title: "Legacy Material Selection",
            desc: "Premium cedar, Trex, and TimberTech options that complement the traditional aesthetics of Leesburg-area homes."
      }
];

const leesburgFAQs = [
      {
            q: "Do you build decks in Leesburg, VA?",
            a: "Yes. Loudoun Decks serves all of Leesburg, including historic downtown neighborhoods, the Lansdowne corridor, and new developments off Route 15 and Route 7."
      },
      {
            q: "What is the cost of a custom deck in Leesburg?",
            a: "A custom deck in Leesburg ranges from $18,000 for a standard pressure-treated deck to $55,000+ for premium composite multi-level builds with pergolas or screen rooms."
      },
      {
            q: "Do you handle permits for decks in Leesburg?",
            a: "Yes. Properties inside Leesburg town limits use Town permitting; those outside use Loudoun County. We manage the full process for both."
      },
      {
            q: "Can you build a deck that matches the historic look of my Leesburg home?",
            a: "Absolutely. We specialize in designs for Colonial, Craftsman, and Federal-style homes. Cedar and select Trex profiles are excellent choices for traditional aesthetics."
      },
      {
            q: "Do you serve the Lansdowne area of Leesburg?",
            a: "Yes. Lansdowne is one of our most active service areas. We know the HOA requirements and have completed many premium deck projects throughout the community."
      },
      {
            q: "How does a new deck improve resale value in Leesburg?",
            a: "A professionally built outdoor living space is one of the highest ROI improvements in Leesburg. Premium decks and screen rooms are increasingly expected by buyers at the $700k+ price point."
      }
];

const leesburgFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": leesburgFAQs.map(({ q, a }) => ({
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
            title: "Why Leesburg Homeowners Choose Loudoun Decks",
            paragraphs: [
                  "Leesburg\u2019s mix of historic districts and newer developments means deck permits and HOA rules vary significantly by neighborhood. Our team knows the difference between building in Downtown Leesburg\u2019s historic overlay zone vs. a newer Lansdowne community. We handle all Town of Leesburg permit submissions and have completed projects in Lansdowne, River Creek, Potomac Crossing, and the historic downtown area.",
                  "Recent projects: 360 sqft TimberTech Terrain deck in Lansdowne (2025), screened porch addition in River Creek (2024), fence + pergola combo in Potomac Crossing (2024)."
            ]
      },
      {
            title: "Leesburg's Most Trusted Custom Deck Builder",
            paragraphs: [
                  "Leesburg, Virginia blends historic charm with modern Northern Virginia growth. As the county seat of Loudoun County, craftsmanship and quality are non-negotiable here. Loudoun Decks has built its reputation in Leesburg by delivering premium outdoor living spaces that honor the character of the town while providing all the functionality modern families demand.",
                  "From historic neighborhoods near downtown to newer developments off Route 15 and the Lansdowne corridor, we serve the full breadth of Leesburg. Each neighborhood has its own requirements. We handle the permitting complexity of both Leesburg Town limits and the surrounding Loudoun County jurisdiction, ensuring a seamless process regardless of where your property sits.",
                  "Our Leesburg builds start at $18,000 and scale to $65,000+ for premium composite multi-level projects with screened porch additions. We do not build cheap. We build right."
            ]
      },
      {
            title: "Historic Character Meets Modern Outdoor Living",
            paragraphs: [
                  "Many Leesburg homeowners face a unique challenge: adding a modern outdoor living space without compromising the historic character of their home. This is our specialty. We are deeply familiar with the Colonial, Craftsman, and Federal-style homes that define Leesburg's residential character.",
                  "For traditional homes, we recommend Western Red Cedar or Trex profiles that mimic the warmth of natural wood with superior longevity. For newer homes in Lansdowne or Stratford, high-performance composites in greys and charcoals create a clean contemporary look. In either case, structural quality and craftsmanship remain the same.",
                  "Every Leesburg project begins with a design consultation. We walk the property, assess the site, and develop a proposal that maximizes your outdoor potential while respecting your home's character and neighborhood standards."
            ],
            listItems: [
                  { label: "Design Versatility", text: "Experienced in both historic and modern deck design for all Leesburg neighborhoods." },
                  { label: "Town Permit Experts", text: "Fluent in both Leesburg Town and Loudoun County permitting processes." },
                  { label: "Lansdowne Specialists", text: "Extensive experience with Lansdowne HOA requirements and community standards." },
                  { label: "Full Scope Builds", text: "Decks, screen rooms, pergolas, and outdoor kitchens for complete outdoor transformations." }
            ]
      },
      {
            title: "What to Expect From Your Leesburg Deck Project",
            paragraphs: [
                  "A Leesburg deck project with Loudoun Decks follows a clear professional process. It begins with a free on-site consultation and design assessment. We provide a full proposal with transparent pricing including every permit fee, every drawing, and every material cost. No hidden surprises.",
                  "Permitting takes 2-4 weeks for Loudoun County properties, with some variation for Town of Leesburg properties. Our established relationships with local building officials help ensure the fastest possible approval. Construction typically takes 1-3 weeks depending on complexity.",
                  "Our Leesburg clients consistently praise our communication, site cleanliness, and quality of work. We are a 5-Star Google Rated contractor and proud of every project we deliver in the Leesburg area."
            ]
      }
];

export default function DeckBuilderLeesburgPage() {
      return (
            <main>
                  <JsonLd data={leesburgFaqSchema} />
                  <ServicesHeader
                        subtext="Leesburg, VA's Trusted Builder"
                        title="Custom Deck Builder in Leesburg, VA"
                        description="Loudoun Decks brings premium deck building to Leesburg. Traditional and contemporary designs, full permit management, and 5-Star rated service."
                  />
                  <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
                        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
                              <Image
                                    src="/images/img32.jpeg"
                                    alt="Premium custom deck built by LDN Decks in Leesburg, Virginia"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 900px) 100vw, 900px"
                                    priority
                              />
                        </div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Leesburg Historic Charm &amp; Contemporary Decks</h2>
                  </div>
                  <ServiceMain
                        subtitle="Leesburg's Trusted Choice"
                        title="Deck Builder Leesburg VA - Craftsmanship You Can Trust"
                        description="From historic downtown Leesburg to the Lansdowne corridor, we build outdoor spaces that complement your home and elevate your lifestyle."
                        listItems={[
                              "Traditional and contemporary deck designs",
                              "Leesburg Town and Loudoun County permits",
                              "Trex Platinum and TimberTech Certified",
                              "Screened porches, pergolas and outdoor kitchens",
                              "5-Star Google Rated - call (571) 655-7207"
                        ]}
                        image1="/images/img36.jpeg"
                        image2="/images/img37.jpeg"
                  />
                  <ServiceContentExpansion sections={expansionSections} />
                  <ServiceInclusions
                        title="Why Leesburg Homeowners Choose Loudoun Decks"
                        description="Local knowledge, premium materials, and a process built for Leesburg properties."
                        items={inclusions}
                  />
                  <ProcessSteps />
                  <ServicesFAQ
                        title="Deck Builder Leesburg VA - FAQs"
                        faqs={leesburgFAQs}
                  />
                  <ServiceAreasGrid />
                  <SimpleCTA title="Build Your Dream Deck in Leesburg" buttonText="Get Free Estimate" link="/contact" />
                  <RelatedGuides currentPath="/deck-builder-leesburg-va" />
                  <ContactHome />
            </main>
      );
}
