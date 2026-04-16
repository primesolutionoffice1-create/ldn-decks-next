import React from 'react';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';

export const metadata = {
  alternates: {
    canonical: "/services/new-decks"
  },
  openGraph: {
    url: "/services/new-decks"
  },
  title: "Custom Deck Builder Loudoun VA | Design & Build Services",
  description: "From concept to completion, we design and build fully custom decks tailored to your space, style, and budget in Northern Virginia."
};

const expansionSections = [
  {
    title: "Design Options: Endless Possibilities",
    paragraphs: [
      "We build more than just standard platforms. We create fully personalized outdoor living zones configured to the unique layout of your home and yard."
    ],
    listItems: [
      { label: "1. Multi-Level Decks", text: "Separate zones for dining, lounging, and entertaining. Ideal for sloped yards." },
      { label: "2. Wraparound Decks", text: "Seamless flow around your home that expands usable outdoor space." },
      { label: "3. Decks with Built-In Seating", text: "Clean, functional design that is perfect for large gatherings." },
      { label: "4. Integrated Features", text: "Seamlessly integrate lighting systems, pergolas, fire pits, outdoor kitchens, privacy walls, and custom railings." }
    ]
  },
  {
    title: "Premium Material Options",
    paragraphs: [
      "We help you choose the very best decking option based on long-term durability, maintenance preferences, and budget."
    ],
    listItems: [
      { label: "Composite Decking", text: "Industry-leading boards from Trex and TimberTech." },
      { label: "Traditional Wood", text: "High-grade pressure-treated wood." },
      { label: "PVC Decking", text: "Advanced, ultra-durable PVC decking systems." },
      { label: "Custom Railings", text: "Available in Trex, aluminum, and natural wood." }
    ]
  }
];

const designProcess = [
  { title: "Step 1: Consultation", desc: "Free, no-obligation consultation at your home." },
  { title: "Step 2: Planning", desc: "Custom layout design and concept planning." },
  { title: "Step 3: Selection", desc: "Guided material, color, and feature selection." },
  { title: "Step 4: Estimate", desc: "Transparent, detailed estimate and project timeline." },
  { title: "Step 5: Construction", desc: "Professional construction by our experienced crew." },
  { title: "Step 6: Completion", desc: "Final walkthrough and extensive quality check." }
];

const whyLdnDecks = [
  { title: "Local Experts", desc: "Dedicated Loudoun County-based team." },
  { title: "Trustworthy", desc: "Fully licensed, bonded, and insured." },
  { title: "Tailored Approach", desc: "A 100% custom design approach (no templates)." },
  { title: "Professional", desc: "Clean, quiet, and professional builds." },
  { title: "Longevity", desc: "Heavily focused on long-term structural durability." }
];

export default function NewDecksPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Custom Deck Design Loudoun VA"
        title="Custom Deck Design Built Around Your Home & Lifestyle"
        description="From concept to completion, we design and build fully custom decks tailored to your space, style, and budget - no templates, no shortcuts."
      />

      <ServiceMain 
        subtitle="Not Just a Deck - A Personalized Outdoor Space"
        title="What is a Custom Deck?"
        description="Designed & Built by LDN Decks – Loudoun County. A custom deck is designed specifically for your home, layout, and exactly how you want to use your outdoor space."
        listItems={[
          "Built to match your home's architecture",
          "Designed for your lifestyle (family, entertaining, relaxing)",
          "Fully customizable layout, materials, and features",
          "Maximizes your backyard potential"
        ]}
        image1="/showcase/img08.jpeg"
        image2="/showcase/img09.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions 
        title="Our Design Process"
        description="How We Bring Your Vision to Life. A step-by-step roadmap to building your perfect deck."
        items={designProcess}
      />

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>From empty backyard to fully customized outdoor living space.</p>
        <div style={{ position: 'relative', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image src="/showcase/img10.jpeg" alt="Custom deck transformation" fill style={{ objectFit: 'cover' }} />
        </div>
      </section>

      <ServiceInclusions 
        title="Local Experts You Can Trust"
        description="Why LDN Decks?"
        items={whyLdnDecks}
      />

      <ServiceAreasGrid />

      <ContactHome />
    </main>
  );
}
