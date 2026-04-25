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
import HomeSEOContent from "@/components/HomeSEOContent";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
    path: "/",
    title: "Deck Builder in Loudoun County | Custom Decks | LDN Decks",
    description: "Top-rated deck builder in Loudoun County, VA. Trex Platinum Partner & TimberTech Certified. Custom composite & wood decks from $15k+. Serving Ashburn, Leesburg & Northern VA. Free estimate — (571) 655-7207.",
    image: "/images/img64.jpeg",
});

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ldndecks.com/#organization",
  "name": "LDN Decks",
  "alternateName": "Loudoun Decks",
  "url": "https://www.ldndecks.com",
  "logo": "https://www.ldndecks.com/ldndecks-logo.webp",
  "image": "https://www.ldndecks.com/images/img64.jpeg",
  "telephone": "+15716557207",
  "email": "office@ldndecks.com",
  "priceRange": "$$-$$$$",
  "address": { "@type": "PostalAddress", "streetAddress": "8735 Quarry Rd., Unit 102", "addressLocality": "Manassas", "addressRegion": "VA", "postalCode": "20110", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": "38.7510", "longitude": "-77.4753" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "17:00" }
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "41", "bestRating": "5" },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
    { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
    { "@type": "AdministrativeArea", "name": "Prince William County, VA" },
    { "@type": "AdministrativeArea", "name": "Arlington County, VA" },
    { "@type": "AdministrativeArea", "name": "Stafford County, VA" }
  ],
  "sameAs": [
    "https://x.com/ldndecks",
    "https://www.instagram.com/loudoundecks/",
    "https://www.facebook.com/profile.php?id=61573750423712",
    "https://www.google.com/maps/place/Loudoun+Decks/",
    "https://www.houzz.com/pro/ldndecks",
    "https://www.yelp.com/biz/loudoun-decks-centreville"
  ]
};

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
      <JsonLd data={businessSchema} />
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
            <HomeSEOContent />
            <HomeQuickLinks />
            <FAQ />
            <TrustLogos />
            <RelatedGuides currentPath="/" />
            <ContactMap />
            <ContactHome />
      </main>
    );
}
