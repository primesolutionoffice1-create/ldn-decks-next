import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import Testimonials from '@/components/Testimonials';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';

export const metadata = {
  alternates: {
    canonical: "https://ldndecks.com/services/deck-maintenance"
  },
  title: "Deck Maintenance Services | Loudoun Decks",
  description: "Protect your investment with professional deck maintenance, staining, sealing, and repair services in Northern Virginia."
};

const maintenanceProcess = [
  {
    title: "1. Comprehensive Assessment",
    desc: "We perform a thorough check of the decking boards, railings, stairs, and structural joists to identify any areas needing immediate repair or specialized care."
  },
  {
    title: "2. Deep Cleaning & Prep",
    desc: "Using professional-grade cleaners and low-pressure washing techniques, we safely remove dirt, mildew, algae, and previous failing sealants without damaging the wood fibers."
  },
  {
    title: "3. Wood Conditioning",
    desc: "If necessary, we neutralize the wood to restore its natural pH balance and brighten the grain, preparing it for maximum stain absorption."
  },
  {
    title: "4. Professional Sanding (If required)",
    desc: "For older decks with splinters or stubborn finishes, we sand the surface to create a smooth, beautiful canvas."
  },
  {
    title: "5. Premium Sealing & Staining",
    desc: "We apply high-quality, commercial-grade stains and sealers uniquely chosen for your deck's material to protect against UV fading and water intrusion."
  }
];

export default function DeckMaintenancePage() {
  return (
    <main>
      <ServicesHeader
        subtext="Deck Maintenance Services"
        title="Professional Deck Maintenance & Care"
        description="Routine maintenance is the key to extending the life of your deck. Protect your outdoor living investment from sun damage, moisture, and extreme seasonal weather."
      />

      <ServiceMain
        subtitle="Protect Your Outdoor Living Space"
        title="Why Routine Maintenance Matters"
        description="A beautiful deck requires ongoing care. Without proper sealing and protection, harsh UV rays break down the lignin in wood, leading to fading, cracking, and eventual rot. Our specialized maintenance programs ensure your deck remains safe, structurally sound, and visually stunning year after year."
        listTitle="The Benefits of Professional Maintenance"
        listItems={[
          "Prevents deeply ingrained moisture and dry rot",
          "Protects against severe UV fading and discoloration",
          "Eliminates slippery algae, mold, and mildew growth",
          "Saves thousands of dollars by preventing full deck replacements",
          "Restores the original, rich beauty of wood grain"
        ]}
        image1="/images/img26.jpeg"
        image2="/images/img14.jpeg"
      />

      <ServiceInclusions
        title="Our Complete Maintenance Process"
        description="We don't just wash your deck; we restore and protect it using a proven, meticulous multi-step system."
        items={maintenanceProcess}
      />

      <Testimonials />
      <ServiceAreasGrid />
      <ContactHome />
    </main>
  );
}
