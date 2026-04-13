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
    canonical: "https://ldndecks.com/services/fire-pits"
  },
  title: "Custom Fire Pit Installation Loudoun VA | Outdoor Living NoVA",
  description: "Transform your backyard with a custom-built fire pit in Northern Virginia. We build gas, wood-burning, and stone fire pits."
};

const expansionSections = [
  {
    title: "Fire Pit Options",
    paragraphs: [
      "Built to Match Your Style."
    ],
    listItems: [
      { label: "1. Wood-Burning Fire Pits", text: "Classic experience with natural flame and sound. Ideal for traditional setups." },
      { label: "2. Gas Fire Pits (Propane / Natural Gas)", text: "Easy to use and maintain. Instant ignition, clean and modern." },
      { label: "3. Built-In Stone Fire Pits", text: "Permanent structure that matches your patio or landscape. High-end finish." },
      { label: "4. Fire Pit + Seating Area Designs", text: "Integrated seating walls. Perfect for entertaining spaces." }
    ]
  },
  {
    title: "Premium Material Options",
    paragraphs: [
      "Materials That Last."
    ],
    listItems: [
      { label: "Bluestone", text: "Elegant natural stone style" },
      { label: "Concrete Pavers", text: "Versatile and highly durable" },
      { label: "Natural Stone", text: "Rustic, organic appearance" },
      { label: "Brick", text: "Classic and timeless" },
      { label: "Custom Finishes", text: "Customized specifically to match your existing patio or deck." }
    ]
  },
  {
    title: "Benefits of Adding a Fire Pit",
    paragraphs: [
      "Why Homeowners Love Fire Pits."
    ],
    listItems: [
      { label: "Atmosphere", text: "Creates a cozy, warm outdoor atmosphere" },
      { label: "Value", text: "Increases property value immediately" },
      { label: "Entertaining", text: "Enhances entertaining space year-round" },
      { label: "Custom Layout", text: "Fully custom design to fit your layout" },
      { label: "Durability", text: "Durable and weather-resistant construction" }
    ]
  }
];

const firePitProcess = [
  { title: "Step 1: Consultation", desc: "Free consultation and design planning." },
  { title: "Step 2: Evaluation", desc: "Location and safety evaluation." },
  { title: "Step 3: Materials", desc: "Material selection." },
  { title: "Step 4: Installation", desc: "Professional installation." },
  { title: "Step 5: Review", desc: "Final inspection and clean finish." }
];

const whyLdnDecks = [
  { title: "Local Team", desc: "Loudoun County-based team." },
  { title: "Trusted", desc: "Licensed and insured." },
  { title: "Custom", desc: "Custom design approach." },
  { title: "Professional", desc: "Clean, professional installation." },
  { title: "Longevity", desc: "Built for long-term durability." }
];

export default function FirePitsPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="Custom Fire Pit Loudoun VA"
        title="Custom Fire Pits Built for Comfort, Style & Year-Round Enjoyment"
        description="Transform your backyard into a warm, inviting space with a custom-built fire pit - perfect for relaxing nights, entertaining guests, and adding value to your home."
      />

      <ServiceMain 
        subtitle="More Than Just a Feature - It’s the Centerpiece"
        title="What is a Custom Fire Pit?"
        description="Custom Fire Pit by LDN Decks – Loudoun County. A custom fire pit creates a natural gathering space in your backyard."
        listItems={[
          "Perfect for family time and entertaining",
          "Extends outdoor use into cooler seasons",
          "Adds a luxury outdoor living feel",
          "Fully customizable to match your patio or deck"
        ]}
        image1="/showcase/img15.jpeg"
        image2="/showcase/img16.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions 
        title="Our Layout Process"
        description="How We Build Your Fire Pit."
        items={firePitProcess}
      />

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>From empty backyard to a warm, inviting gathering space.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img17.jpeg" alt="Before fire pit installation" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img18.jpeg" alt="After custom fire pit" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <ServiceInclusions 
        title="Why LDN Decks"
        description="Your dedicated local contractor."
        items={whyLdnDecks}
      />

      <ServiceAreasGrid />

      <ContactHome />
    </main>
  );
}
