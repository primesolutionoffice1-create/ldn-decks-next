import React from 'react';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';

export const metadata = {
  title: "Bluestone Patio Loudoun VA | Natural Stone Installation",
  description: "Upgrade your outdoor space with a high-end bluestone patio. Natural stone patio installation in Northern Virginia by luxury contractors.",
  alternates: {
    canonical: "https://ldndecks.com/services/patios"
  }
};

const expansionSections = [
  {
    title: "Why Choose a Bluestone Patio in Northern Virginia",
    paragraphs: [
      "Bluestone is uniquely suited for the Northern Virginia climate. It easily withstands the freezing winters and scorching, humid summers of Loudoun and Fairfax counties without cracking, provided it is installed with a proper architectural base. Beyond its performance, natural cleft bluestone provides an organic, luxurious aesthetic that stamped concrete and standard pavers simply cannot match.",
      "Custom stonework is also one of the highest ROI hardscaping investments you can make. It immediately elevates your backyard into a luxury entertainment space that appeals to homebuyers across the DC metro region."
    ],
    listItems: [
      { label: "Aesthetics", text: "Rich, natural earth tones including deep blues, grays, and rust colors." },
      { label: "High Durability", text: "Withstands freeze-thaw cycles indefinitely when properly jointed." },
      { label: "Low Maintenance", text: "Requires minimal upkeep compared to wood decks; simply power wash annually." },
      { label: "Increased Value", text: "Premium natural stone adds significant measurable value to your property." },
      { label: "Temperature Control", text: "Absorbs heat slower than pure concrete, making it comfortable during summer." }
    ]
  },
  {
    title: "Understanding Your Design & Layout Options",
    paragraphs: [
      "A bluestone patio layout dictates the entire feel of your outdoor space. Whether you live in a modern estate in Ashburn or a rustic property in Middleburg, we tailor the stone cut to match your home's architecture."
    ],
    listItems: [
      { label: "1. Natural Cleft Dimensional", text: "The most popular choice. Cut into perfect squares and rectangles, but retaining the natural, slightly uneven flaking texture of the stone quarry." },
      { label: "2. Thermal Finish", text: "The stone is subjected to intense heat to pop off the natural cleft, resulting in a perfectly smooth, flat surface ideal for dining areas where wobbly chairs are a concern." },
      { label: "3. Irregular / Flagstone Pattern", text: "Uncut, jagged organic shapes fit together like a puzzle. This 'crazy paving' style is perfect for rustic garden walkways and fire pit surrounds." },
      { label: "4. Borders and Banding", text: "We often incorporate complementary stones like brick or Pennsylvania fieldstone to create distinctive borders that frame the bluestone canvas." }
    ]
  },
  {
    title: "Custom Outdoor Living Features",
    paragraphs: [
      "A patio is just the foundation. Loudoun Decks turns your bluestone surface into a fully functional outdoor living room by integrating premium architectural elements."
    ],
    listItems: [
      { label: "Retaining & Seating Walls", text: "Built-in masonry walls wrapped in natural stone veneer to provide structural support for sloped yards and permanent seating for guests." },
      { label: "Custom Fire Features", text: "Wood-burning stone fire pits or integrated gas fireplaces that make your patio usable deep into the autumn and winter months." },
      { label: "Outdoor Kitchens", text: "Built-in grilling stations, bar tops, and refrigerators seamlessly integrated into your patio layout." },
      { label: "Landscape Lighting", text: "Low-voltage LED lighting cast into the stone steps and seating walls to provide safety and ambiance at night." }
    ]
  }
];

const patioProcess = [
  { title: "Step 1: On-Site Evaluation", desc: "We review your property’s soil composition, grading, and drainage to determine the necessary sub-base requirements." },
  { title: "Step 2: 3D Design & Permitting", desc: "We provide detailed layouts and handle all Loudoun County grading and zoning permits required for the hardscape project." },
  { title: "Step 3: Excavation & Base Prep", desc: "The most critical step. We excavate and compress layers of crushed stone and gravel to create an immovable foundation resistant to freezing." },
  { title: "Step 4: Stone Installation", desc: "Our masons precision-cut and lay each piece of bluestone, ensuring perfect leveling and water runoff." },
  { title: "Step 5: Polymeric Jointing", desc: "We fill the gaps with high-grade polymeric sand or mortar to lock the stones together and prevent weed growth." },
  { title: "Step 6: Final Seal & Review", desc: "An optional invisible sealant is applied to protect the stone from stains before a final client walkthrough." }
];

const patioFAQs = [
  {
    question: "Do I need a permit for a patio in Northern Virginia?",
    answer: "Most ground-level patios that do not alter the major grading or drainage of the property do not require a building permit. However, if your patio includes retaining walls over 2 feet, electrical lines for kitchens, or sits in a designated RPA (Resource Protection Area), county permits are required. Loudoun Decks handles all of this compliance for you."
  },
  {
    question: "How much does a bluestone patio cost compared to stamped concrete?",
    answer: "Bluestone is a premium natural material, so the upfront material and labor costs are higher than poured or stamped concrete. However, stamped concrete is highly prone to cracking during Virginia's freeze-thaw cycles. Bluestone, laid on a flexible aggregate base, rarely cracks and can be easily repaired stone-by-stone, offering a vastly superior long-term ROI."
  },
  {
    question: "How do you handle water runoff and drainage?",
    answer: "Proper drainage is the hallmark of professional hardscaping. We grade all our patios with a subtle, imperceptible slope (typically 1/8 inch per foot) directing water away from your home's foundation. If your yard has existing water pooling issues, we integrate French drains and catch basins beneath the patio structure."
  },
  {
    question: "Can I put a hot tub on my bluestone patio?",
    answer: "Absolutely. If you plan to install a hot tub, we simply adjust the depth and compaction of our crushed stone aggregate base in that specific footprint to support the immense weight (often exceeding 4,000 lbs filled) without shifting the surrounding stones."
  }
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": patioFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const serviceSchemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Bluestone Patio Installation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Loudoun Decks"
  },
  "areaServed": {
    "@type": "State",
    "name": "Virginia"
  },
  "description": "Premium natural stone patio installation specializing in traditional and thermal bluestone, fire pits, and outdoor kitchens in Northern Virginia."
};

const whyLdnDecks = [
  { title: "Master Masons", desc: "Our teams specialize heavily in natural stone layout and precision dry-laid and wet-laid applications." },
  { title: "Structural Integrity", desc: "We never cut corners on the base aggregate—guaranteeing your patio will not sink or heave after harsh winters." },
  { title: "Turnkey Service", desc: "From design and drainage engineering to the final sealing, we manage the entire project in-house." },
  { title: "Local Compliance", desc: "Deep understanding of Loudoun, Fairfax, and Prince William County HOA restrictions and zoning laws." },
  { title: "Ironclad Warranty", desc: "We stand behind our hardscaping foundations with robust workmanship guarantees." }
];

export default function PatiosPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaData) }}
      />

      <ServicesHeader
        subtext="Bluestone Patio Loudoun VA"
        title="Premium Bluestone Patios Built to Last"
        description="Upgrade your outdoor living area with a custom bluestone patio. Experience natural beauty, unmatched durability, and a timeless architectural aesthetic that transforms your backyard into a luxury retreat."
      />

      <ServiceMain
        subtitle="Natural Stone. Timeless Design."
        title="What is Bluestone Hardscaping?"
        description="Loudoun Decks is the premier custom hardscaper in Northern Virginia. Bluestone is a heavy, layered sandstone quarried primarily in New York and Pennsylvania. Renowned for its durability and slip-resistant texture, it is the absolute gold-standard for luxury patios in the Mid-Atlantic region."
        listItems={[
          "Unique organic color variations fading from blue to rust",
          "Naturally slip-resistant cleft surface",
          "Ideal for patios, walkways, pool decks, and fire pits",
          "Decades of proven weather resistance"
        ]}
        image1="/images/img36.jpeg"
        image2="/showcase/img12.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions
        title="Our Layout & Build Process"
        description="A patio is only as good as what’s underneath it. We employ a rigorous, engineered approach to base layering."
        items={patioProcess}
      />

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>From a plain grass backyard to a premium outdoor living space.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img11.jpeg" alt="Before patio installation" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img12.jpeg" alt="After bluestone patio" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>Patio Design FAQs</h2>
          {patioFAQs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '20px', background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#B58E3B' }}>{faq.question}</h3>
              <p style={{ lineHeight: '1.6', color: '#444' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '20px 20px 60px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Project Gallery</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>A closer look at our custom bluestone installations and finishes.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img13.jpg" alt="Bluestone layout detail" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img14.jpg" alt="Bluestone patio finish" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <ServiceInclusions
        title="Why LDN Decks for Hardscaping"
        description="Local experts delivering high-end, indestructible architecture."
        items={whyLdnDecks}
      />

      <ServiceAreasGrid />

      <ContactHome />
    </main>
  );
}
