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
    canonical: "https://ldndecks.com/services/trex-railings"
  },
  title: "Trex Railings With Cocktail Top Loudoun VA | LDN Decks",
  description: "Upgrade your deck with modern Trex railing systems and a custom cocktail top in Northern Virginia."
};

const expansionSections = [
  {
    title: "Why Trex Railings?",
    paragraphs: [
      "Trex railing systems are designed to match composite decks and provide long-lasting performance. They are durable, low-maintenance, and stylish."
    ],
    listItems: [
      { label: "Low Maintenance", text: "No painting or staining required" },
      { label: "Durability", text: "Resistant to weather, fading, and rot" },
      { label: "Safety", text: "Strong, secure construction" },
      { label: "Customizable", text: "Available in multiple styles and colors" }
    ]
  },
  {
    title: "Design Options",
    paragraphs: [
      "Customize the look of your deck with our various premium railing options tailored to your home's aesthetic."
    ],
    listItems: [
      { label: "1. Trex Transcend Railings", text: "Premium design, multiple color combinations, sleek and modern." },
      { label: "2. Trex Select Railings", text: "Budget-friendly option with a clean and simple look." },
      { label: "3. Aluminum Railings with Cocktail Top", text: "Contemporary style, strong and minimal." },
      { label: "4. Wood or Composite Cocktail Top Finishes", text: "Match your deck surface or choose contrasting accent options." }
    ]
  },
  {
    title: "Benefits of Cocktail Railings",
    paragraphs: [
      "Why do homeowners love cocktail railings? They completely change how you use your outdoor space."
    ],
    listItems: [
      { label: "Entertaining", text: "Extra surface for drinks and snacks" },
      { label: "Hosting", text: "Enhances outdoor entertaining" },
      { label: "Aesthetics", text: "Adds a high-end custom look" },
      { label: "Functionality", text: "Increases overall deck functionality" },
      { label: "Value", text: "Boosts home value" }
    ]
  }
];

const howWeInstall = [
  { title: "Step 1: Consultation", desc: "Free consultation and design." },
  { title: "Step 2: Selection", desc: "Material selection (Trex system + top finish)." },
  { title: "Step 3: Installation", desc: "Precise installation of railing system." },
  { title: "Step 4: Integration", desc: "Custom cocktail top integration." },
  { title: "Step 5: Review", desc: "Final inspection and clean finish." }
];

const whyLdnDecks = [
  { title: "Local Team", desc: "Loudoun County-based team." },
  { title: "Trusted", desc: "Fully licensed and insured." },
  { title: "Professional", desc: "Clean, professional installs." },
  { title: "Specialists", desc: "Extensive experience with Trex systems." },
  { title: "Reliable", desc: "Built for durability and long-term use." }
];

export default function TrexRailingsPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Deck Railing Upgrade Loudoun VA"
        title="Trex Railings with Cocktail Top - Style Meets Function"
        description="Upgrade your deck with modern Trex railing systems and a custom cocktail top - perfect for entertaining, relaxing, and adding a premium finish to your outdoor space."
      />

      <ServiceMain 
        subtitle="More Than Just a Railing"
        title="What is a Cocktail Top?"
        description="Installed by LDN Decks – Northern Virginia. A cocktail top is a flat surface installed on top of your deck railing, creating a functional ledge."
        listItems={[
          "Perfect for drinks and food",
          "Adds usable space without expanding your deck",
          "Clean, modern finish",
          "Great for hosting and entertaining"
        ]}
        image1="/showcase/img06.jpg"
        image2="/showcase/img07.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions 
        title="How We Install Your Railings"
        description="A seamless process to upgrade your outdoor living space."
        items={howWeInstall}
      />

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>From standard railings to a premium entertaining space.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img06.jpg" alt="Before deck railing upgrade" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img07.jpeg" alt="After Trex cocktail railing" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <ServiceInclusions 
        title="Trust the Experts"
        description="Why choose LDN Decks for your composite railing installation in Northern Virginia?"
        items={whyLdnDecks}
      />

      <ServiceAreasGrid />

      <ContactHome />
    </main>
  );
}
