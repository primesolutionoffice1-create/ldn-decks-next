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
  title: 'Custom Deck Builders in Loudoun County VA | Free 24h Quote',
  description:
    'Trex Pro & TimberTech certified deck builders serving Loudoun, Fairfax & Prince William VA. Custom decks, screened porches & pergolas. Free quote in 24 hours. ★ 5-star rated.',
});

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ldndecks.com/#organization",
  "name": "Loudoun Decks",
  "alternateName": "LDN Decks",
  "url": "https://ldndecks.com",
  "logo": "https://ldndecks.com/ldndecks-logo.webp",
  "image": "https://ldndecks.com/images/img64.jpeg",
  "telephone": "+15716557207",
  "email": "office@ldndecks.com",
  "priceRange": "$$-$$$$",
  "address": { "@type": "PostalAddress", "streetAddress": "13704 Winding Oak Cir", "addressLocality": "Centreville", "addressRegion": "VA", "postalCode": "20121", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": "38.8404", "longitude": "-77.4289" },
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
  "@id": "https://ldndecks.com/#webpage",
  "url": "https://ldndecks.com",
  "name": "Loudoun Decks — Custom Deck Builder in Northern Virginia",
  "description": "Top-rated custom deck builder in Loudoun County, Northern Virginia. Trex Platinum Partner and TimberTech Certified. Composite and wood decks, screened porches, patios, pergolas. 5.0-star Google rating. Free estimates.",
  "isPartOf": { "@type": "WebSite", "@id": "https://ldndecks.com/#website" },
  "about": { "@type": "LocalBusiness", "@id": "https://ldndecks.com/#organization" },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://ldndecks.com/images/img64.jpeg"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "[data-speakable]"]
  },
  "significantLink": [
    "https://ldndecks.com/services",
    "https://ldndecks.com/northern-virginia-deck-building-guide",
    "https://ldndecks.com/how-much-does-a-deck-cost-northern-virginia",
    "https://ldndecks.com/composite-deck-cost-northern-virginia",
    "https://ldndecks.com/before-and-after",
    "https://ldndecks.com/areas-we-serve",
    "https://ldndecks.com/reviews",
    "https://ldndecks.com/deck-cost-calculator",
    "https://ldndecks.com/contact"
  ]
};

import BlogFeed from "@/components/BlogFeed";

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
            <BlogFeed />
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
