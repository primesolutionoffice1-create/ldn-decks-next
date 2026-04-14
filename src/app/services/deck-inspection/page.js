import React from 'react';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import Testimonials from '@/components/Testimonials';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';

export const metadata = {
  alternates: {
    canonical: "https://ldndecks.com/services/deck-inspection"
  },
  title: "Deck Inspection Services | Loudoun Decks",
  description: "Professional deck inspection and expert deck restoration services in Northern Virginia for just $350. Keep your outdoor living space safe and beautiful."
};

export default function DeckInspectionPage() {
  return (
    <main>
      <ServicesHeader
        subtext="Deck Inspection Services"
        title="Comprehensive Deck Inspection for $350"
        description="Ensure the safety, structural integrity, and longevity of your deck with our professional inspection services. We identify hidden rot, structural issues, and potential safety hazards."
      />

      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: '700' }}>Providing Expert Deck Restoration Services</h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto 50px', lineHeight: '1.6' }}>
          Over time, even the most well-built decks fall victim to weathering, moisture, and foundational settling. Our $350 specialized deck inspection evaluates your entire structure from the footers to the railings. If we find issues, our restoration experts can repair, reinforce, and completely revitalize your older deck, saving you thousands compared to a full replacement.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck.webp" alt="Old deck damage" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck1.webp" alt="Weathered deck boards" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck2.webp" alt="Deck requiring restoration" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck3.jpg" alt="Deck structural inspection" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section style={{ padding: '20px 20px 80px', maxWidth: '900px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8', color: '#444' }}>
        <h3 style={{ fontSize: '28px', color: '#222', marginBottom: '25px', fontWeight: '700', textAlign: 'center' }}>The Hidden Dangers of Older and Outdated Decks</h3>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          A deck is not just an aesthetic addition to your outdoor space; it is a structural extension of your home. Over time, constant exposure to unpredictable weather, blistering summer UV rays, severe freeze-thaw cycles, and heavy moisture takes a severe toll on the building materials. Even decks built with premium wood or composite materials decades ago will eventually begin to show inescapable signs of aging. Ignoring these warning signs isn't just an eyesore—it is a critical and potentially devastating safety hazard.
        </p>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          As decks age, the underlying structural integrity of the frame often compromises long before the visible surface boards completely fail. Important foundational elements like concrete footings can sink or shift, causing the entire platform to become unstable or unleveled. Fasteners, joist hangers, and ledger boards often rust or pull away from the home's primary structure. In fact, ledger board failure is the leading cause of catastrophic deck collapses nationwide. Outdated building codes from 15 or 20 years ago lacked the heavy-duty flashing, tension ties, and lateral load requirements required by modern standards, leaving older decks inherently vulnerable to water intrusion and dangerously pulling away from the house.
        </p>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          Moisture is the natural enemy of any traditional wooden deck. Over time, protective sealants strip away, allowing water to penetrate deep into the fibers. This leads to hidden dry rot underneath the surface, terrifying structural sponginess, and widespread mildew that makes the surface dangerously slippery. Additionally, older composite materials from early manufacturing generations didn't have the advanced capping technologies we use today, meaning they are highly prone to fading, growing persistent mold inside the core, and cracking under heavy pressure or prolonged heat.
        </p>
        <p style={{ fontSize: '18px' }}>
          It is absolutely essential that older decks are routinely inspected and evaluated for structural retro-fitting or outright replacement. Changing out an outdated deck doesn't just modernize your backyard aesthetic, raise your property value, and eliminate maintenance chores; it guarantees the fundamental safety of your family, friends, and guests. If your deck spans over 10 to 15 years old, begins to feel even slightly spongy underfoot, visibly sways when you walk, or exhibits extensive surface splintering and warping, it is definitely time for a professional change. Let our experts assess your structure with a comprehensive $350 inspection to keep your outdoor living space safe, secure, and beautiful for years to come.
        </p>
      </section>

      <Testimonials />
      <ServiceAreasGrid />
      <ContactHome />
    </main>
  );
}
