import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';

export const metadata = {
  title: "Custom Deck Builder Loudoun County | Deck Installation Northern VA",
  description: "Loudoun Decks is a premier deck builder serving Loudoun County, Fairfax County, and Prince William County. Custom deck installation with 1,500+ words of expert guidance."
};

const inclusions = [
  {
    title: "NoVA Custom Design",
    desc: "Every project starts with a custom layout explicitly designed for Northern Virginia's unique terrain and HOA requirements."
  },
  {
    title: "Premium Material Sourcing",
    desc: "We source high-end composite like Trex and moisture-resistant natural woods to ensure longevity in Virginia's humid climate."
  },
  {
    title: "Permit Management",
    desc: "Full handling of the building permit process across Arlington, Stafford, Fairfax, and Loudoun Counties."
  }
];

const newDeckFAQs = [
  {
    q: "How much does a new deck cost in Loudoun County?",
    a: "Custom deck projects in Loudoun County generally range from $15,000 to $60,000+ depending on size, multi-level designs, and material choice (composite vs. wood)."
  },
  {
    q: "Do you handle deck building permits in Fairfax County?",
    a: "Yes, Loudoun Decks handles 100% of the permitting process for all projects in Fairfax County, ensuring compliance with local codes and zoning."
  },
  {
    q: "What is the best decking material for Northern Virginia?",
    a: "For most Northern Virginia families, composite decking (like Trex) is superior due to its resistance to the humidity and seasonal expansion common in the Mid-Atlantic region."
  },
  {
    q: "How long does a typical deck installation take?",
    a: "The construction phase usually takes 1-3 weeks once permits are approved, depending on complexity and vertical architecture like pergolas or roof systems."
  },
  {
    q: "Do you serve Prince William County and Stafford?",
    a: "Absolutely. We are a premier deck builder for Prince William County, including Woodbridge and Gainesville, as well as Stafford County."
  },
  {
    q: "Are your decks Google-rated with 5-stars?",
    a: "Loudoun Decks is a 5-Star Google Rated team known for high-ticket quality and exceptional customer communication across NoVA."
  },
  {
    q: "How do I choose between a deck and a patio?",
    a: "Decks are ideal for sloping yards and elevated views, while patios are perfect for ground-level transitions and outdoor fire pits. We can design integrated 'deck-and-patio' combos."
  },
  {
    q: "Do you offer warranties on deck installation?",
    a: "Yes. We offer a comprehensive workmanship warranty alongside manufacturer warranties for materials like Trex, often lasting 25+ years."
  }
];

const expansionSections = [
  {
    title: "The Ultimate Guide to Deck Building in Northern Virginia",
    paragraphs: [
      "Deciding to add a custom deck to your home in Northern Virginia is a significant investment that enhances both your lifestyle and your property value. As a leading deck builder in Loudoun County, Fairfax County, and Prince William County, Loudoun Decks specializes in creating outdoor living spaces that are both beautiful and structurally superior. Whether you are looking for a simple platform for summer grilling or a complex, multi-level architectural masterpiece, the process begins with understanding the local landscape and climatic conditions.",
      "In Northern Virginia, we experience a wide range of weather patterns—from hot, humid summers to frosty winter nights. This cycling can be brutal on exterior wood if not properly managed. That's why choosing a deck contractor near you who understands these specific environmental factors is critical. We prioritize structural integrity, using pressure-treated framing that is designed to withstand the Virginia soil and moisture levels for decades.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We ensure that every custom deck builder project we undertake meets the highest standards of safety and aesthetic appeal. Our team is frequently active in Ashburn, Leesburg, and Sterling, providing homeowners with the peace of mind that comes from working with a 5-Star Google Rated local expert."
    ]
  },
  {
    title: "Wood vs. Composite: Making the High-Value Choice",
    paragraphs: [
      "One of the most frequent questions we receive from homeowners in regions like Fairfax and Vienna is whether they should choose natural wood or modern composite materials like Trex. Both have distinct advantages depending on your budget and maintenance preferences. Natural wood, such as Pressure-Treated Pine or Western Red Cedar, offers a classic look and is generally more cost-effective upfront. However, it requires annual staining and sealing to prevent rot and splintering.",
      "Composite decking has revolutionized the industry in Northern Virginia. While the initial investment is higher, the long-term value is undeniable. Trex and other premium composites are virtually maintenance-free—they don't rot, warp, or require staining. For busy families in Loudoun County and Arlington, the time saved on maintenance often outweighs the initial material cost. Additionally, composite materials offer a wider variety of colors and textures that can mimic the look of exotic hardwoods without the environmental or maintenance burden.",
      "A composite deck builder Loudoun County specialist from our team can help you weigh these options. We often recommend composite for large, elevated structures where maintenance would be difficult, and natural wood for smaller, ground-level platforms where the organic feel is prioritized."
    ],
    listItems: [
      { label: "Longevity", text: "Composite decks often last 25-30 years with minimal fading or structural degradation." },
      { label: "Maintenance", text: "Natural wood requires bi-annual power washing and staining; composite needs only a seasonal rinse." },
      { label: "Aesthetics", text: "New PVC-capped composites offer incredibly realistic wood grain patterns and hidden fastener systems." },
      { label: "Cost", text: "Expect composite to be 40-60% higher in material cost, but 80% lower in lifetime maintenance expenses." }
    ]
  },
  {
    title: "Navigating the NoVA Permit Process: From Leesburg to Stafford",
    paragraphs: [
      "One of the most daunting parts of deck construction for many homeowners is the building permit and HOA approval process. Rules vary significantly between Loudoun County, Fairfax County, and Prince William County. For instance, deck height and setback requirements in Arlington can be much stricter than in more rural parts of Stafford County. As your local deck company near you, Loudoun Decks takes the headache out of this phase.",
      "We handle all the paperwork, CAD drawings, and structural certifications required by local building departments. Our project managers are intimately familiar with the specific zoning ordinances of towns like Herndon, Reston, and Manassas. This expertise prevents unexpected delays and ensures that your deck is built entirely 'to code,' which is vital for your home insurance and future resale value.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. By choosing a custom deck builder who manages the entire permit lifecycle, you ensure a smoother transition from the design phase to the groundbreaking ceremony."
    ]
  },
  {
    title: "The Construction Lifecycle: What to Expect",
    paragraphs: [
      "Building a custom deck is more than just hammering boards together; it's a precise engineering project. At Loudoun Decks, we follow a rigorous multi-phase process to ensure every deck installation Loudoun County project is perfect. Phase one is the site preparation, where we establish the foundation using deep concrete footers that extend below the Frost Line—an absolute necessity in Northern Virginia to prevent shifting during the winter months.",
      "Phase two involves the framing, where we use heavy-duty hardware and joists spaced specifically to prevent any 'bounce' in the floor. Once the skeleton of the deck is complete, we move to phase three: the decking and railing installation. This is where your vision truly comes to life. Whether you've chosen a standard horizontal layup or a complex herringbone pattern, our craftsmen treat every board with precision.",
      "Finally, we perform a thorough final walkthrough. We check every screw, every miter cut, and every railing post to ensure the finish is flawless. We don't leave the job site until you are 100% satisfied with your new outdoor sanctuary."
    ]
  }
];

export default function NewDecksPage() {
  return (
    <main>
      <ServicesHeader 
        subtext="5-Star Google Rated"
        title="Custom Deck Building & Installation"
        description="Loudoun Decks provides premium deck construction for homeowners in Loudoun County, Fairfax County, and Prince William County. Professional, custom designs for high-ticket outdoor living."
      />

      <ServiceMain 
        subtitle="Premier Build"
        title="Expert Deck Contractor Serving Northern Virginia"
        description="Transform your backyard with a professional deck builder near you. We specialize in high-quality composite and wood deck installation across NoVA, including Arlington and Stafford."
        listItems={[
          "Custom multi-level deck designs",
          "Trex certified composite installation",
          "Pressure-treated and cedar wood specialists",
          "Integrated lighting and drainage systems",
          "Full permit and HOA management"
        ]}
        image1="/images/img03.jpeg"
        image2="/images/img18.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions 
        title="Expertise You Can Trust"
        description="Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our work is designed to last a lifetime."
        items={inclusions}
      />

      <ProcessSteps />

      <ServicesFAQ 
        title="Deck Installation & Construction FAQs"
        faqs={newDeckFAQs}
      />

      <ServiceAreasGrid />

      <ContactHome />
    </main>
  );
}

