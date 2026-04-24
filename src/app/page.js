import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CalculatorCTA from "@/components/CalculatorCTA";
import HandCraftedDecks from "@/components/HandCraftedDecks";
import Introduction from "@/components/Introduction";
import PromoModal from "@/components/PromoModal";
import HowItWorks from "@/components/HowItWorks";
import MaterialPartners from "@/components/MaterialPartners";
import ServicesHome from "@/components/ServicesHome";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustLogos from "@/components/TrustLogos";
import ContactMap from "@/components/ContactMap";
import ContactHome from "@/components/ContactHome";
import RelatedGuides from "@/components/RelatedGuides";
import HomeQuickLinks from "@/components/HomeQuickLinks";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
    path: "/",
    title: "Deck Builder in Loudoun County | Custom Decks | LDN Decks",
    description: "Top-rated deck builder in Loudoun County, VA. Trex Platinum Partner & TimberTech Certified. Custom composite & wood decks from $15k+. Serving Ashburn, Leesburg & Northern VA. Free estimate — (571) 655-7207.",
    image: "/images/img64.jpeg",
});

// Homepage-specific WebPage schema — tells Google this is the main landing page
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.ldndecks.com/#webpage",
  "url": "https://www.ldndecks.com",
  "name": "Loudoun Decks — Custom Deck Builder in Northern Virginia",
  "description": "Top-rated custom deck builder in Loudoun County, Northern Virginia. Trex Platinum Partner and TimberTech Certified. Composite and wood decks, screened porches, patios, pergolas. 5.0-star Google rating. Free estimates.",
  "isPartOf": { "@type": "WebSite", "@id": "https://www.ldndecks.com/#website" },
  "about": { "@type": "LocalBusiness", "@id": "https://www.ldndecks.com/#organization" },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://www.ldndecks.com/images/img64.jpeg"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "[data-speakable]"]
  },
  "significantLink": [
    "https://www.ldndecks.com/services",
    "https://www.ldndecks.com/northern-virginia-deck-building-guide",
    "https://www.ldndecks.com/how-much-does-a-deck-cost-northern-virginia",
    "https://www.ldndecks.com/composite-deck-cost-northern-virginia",
    "https://www.ldndecks.com/before-and-after",
    "https://www.ldndecks.com/areas-we-serve",
    "https://www.ldndecks.com/reviews",
    "https://www.ldndecks.com/deck-cost-calculator",
    "https://www.ldndecks.com/contact"
  ]
};

export default function Home() {
    return (
          <main className={styles.main}>
      <JsonLd data={homepageSchema} />
      <PromoModal />
            <Hero />
            <Features />
            <CalculatorCTA />
            <MaterialPartners />
            <Introduction />
            <HowItWorks />
            <HandCraftedDecks />
            <ServicesHome />
            <Testimonials />
            <HomeQuickLinks />
            <FAQ />
            <TrustLogos />
            <RelatedGuides currentPath="/" />
            <ContactMap />
            <ContactHome />
      </main>
    );
}
