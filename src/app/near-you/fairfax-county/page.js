import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceVisual from '@/components/ServiceVisual';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import Breadcrumbs from '@/components/Breadcrumbs';
import RatingBadge from '@/components/RatingBadge';
import styles from '../LocationPage.module.css';
import { buildMetadata } from '@/lib/seo';

const LocationIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--site-color)', marginRight: '10px' }}>
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
  </svg>
);

export const metadata = buildMetadata({
    path: "/near-you/fairfax-county",
    title: "Deck Builder in Fairfax County, VA | Reston & Vienna",
    description: "Professional deck and outdoor living contractor serving Fairfax County, VA. Custom decks, patios, and porches in Reston, Vienna, Mclean, and Alexandria.",
});

const fairfaxCities = [
    "Alexandria, VA", "Fairfax, VA", "Vienna, VA", "Reston, VA",
    "Herndon, VA", "Mclean, VA", "Falls Church, VA", "Annandale, VA",
    "Burke, VA", "Springfield, VA", "Chantilly, VA", "Centreville, VA",
    "Oakton, VA", "Great Falls, VA", "Lorton, VA", "Tysons, VA",
    "West Springfield, VA"
  ];

const services = [
    "Custom deck design and construction",
    "Deck resurfacing and upgrades",
    "Deck and outdoor washing (decks, siding, concrete, fences)",
    "Patios and hardscapes",
    "Porches and entry areas",
    "Pergolas and gazebos",
    "Fences and related outdoor structures"
  ];

const faqs = [
  { q: "Do you work throughout all of Fairfax County?", a: "Yes. We serve homeowners across Fairfax County, including Alexandria, Fairfax, Vienna, Reston, Herndon, Mclean, Falls Church, Annandale, Burke, Springfield, Chantilly, Centreville, Oakton, Great Falls, Lorton, Tysons, West Springfield and nearby communities." },
  { q: "How much does a new deck typically cost in Fairfax County?", a: "Deck pricing depends on size, materials, design details, and site conditions. After a free on-site visit, we provide a clear written estimate so you know exactly what to expect." },
  { q: "Can you replace my old wood deck with composite?", a: "Yes. We can inspect your existing structure, let you know what can be reused, and design a new composite surface that fits your home and budget." },
  { q: "Do you handle permits for deck projects?", a: "Yes. For projects that require permits in Fairfax County, we help prepare the necessary information and coordinate with the county as part of the project." },
  { q: "How long does a typical deck project take?", a: "Timelines vary with design and weather, but many projects are completed within a few weeks from permit approval. We'll give you a realistic schedule during the estimate process." }
  ];

export default function FairfaxCountyPage() {
    return (
          <main>
      <Breadcrumbs />
            <ServicesHeader
          subtext="Serving Northern Virginia"
          title="Deck Builder in Fairfax County, VA"
          description="Loudoun Decks is a trusted local deck and outdoor living contractor serving homeowners throughout Fairfax County. We design and build custom decks, patios, porches, and outdoor spaces."
        />
                  <ServiceMain
          subtitle="Expert Craftsmanship"
          title="Custom Outdoor Living for Fairfax Homeowners"
          description="From the modern homes of Reston to the estates of Mclean and Great Falls, we provide high-quality workmanship tailored to Fairfax County's high standards."
          listTitle="Services We Provide in Fairfax:"
          listItems={services}
          image1="/images/img17.jpeg"
          image2="/images/img21.jpeg"
        />
                  <section className={styles.permitSection}>
        <div className={styles.container}>
          <div className={styles.permitContent}>
            <div className={styles.permitText}>
              <h2>Permits & Local Requirements in Fairfax County</h2>
                <p>
                            Many deck and outdoor construction projects in Fairfax County require permits and must follow local building codes and inspection rules. Loudoun Decks helps simplify this process by coordinating directly with the county.
            </p>
                <ul className={styles.permitList}>
                <li>Reviewing your project requirements</li>
                  <li>Preparing basic plans for permitting</li>
                  <li>Coordinating with the county for necessary approvals</li>
                  <li>Building according to local standards and guidelines</li>
            </ul>
                <p className={styles.permitFooter}>
                This means you don&apos;t have to worry about paperwork or code compliance - we include this as part of a smooth, start-to-finish experience.
            </p>
            </div>
            </div>
            </div>
            </section>
        <ServiceVisual image="/images/img08.jpeg" />
                  <section className={styles.citiesSection}>
        <div className={styles.container}>
          <h2 className={styles.citiesTitle}>Top Areas We Serve in Fairfax County</h2>
            <div className={styles.citiesGrid}>
          {fairfaxCities.map((city, idx) => (
                          <div key={idx} className={styles.cityItem}>
                            <LocationIcon />
                            <span>{city}</span>
            </div>
                                         ))}
</div>
  </div>
  </section>
      <ServicesFAQ title="Frequently Asked Questions About Decks in Fairfax County" faqs={faqs} />
        <RatingBadge />
      <RelatedGuides currentPath="/near-you/fairfax-county" />
      <ContactHome />
  </main>
  );
}
