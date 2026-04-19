import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCityPaths, getCityData } from '@/data/cityData';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceVisual from '@/components/ServiceVisual';
import MasonryGallery from '@/components/MasonryGallery';
import ProcessSteps from '@/components/ProcessSteps';
import WhyChooseDetails from '@/components/WhyChooseDetails';
import ContactHome from '@/components/ContactHome';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import styles from './CityPage.module.css';
import { buildMetadata } from '@/lib/seo';

// Pre-render all city pages at build time
export async function generateStaticParams() {
  const paths = await getAllCityPaths();
  return paths;
}

export async function generateMetadata({ params }) {
  const { county, city } = await params;
  const data = getCityData(county, city);
  if (!data) return {};
  return buildMetadata({
    path: `/near-you/${county}/${city}`,
    title: `Best Deck Builder in ${data.cityName}, VA | 5-Star Custom Decks & Patios`,
    description: `Searching for the best deck builder in ${data.cityName}, VA? Loudoun Decks is a 5-Star Google Rated contractor specializing in custom Trex and wood decks across ${data.cityName} and ${data.countyName}.`
  });
}

export default async function CityPage({ params }) {
  const { county, city: citySlug } = await params;
  const data = getCityData(county, citySlug);
  if (!data) {
    notFound();
  }

  const { cityName, countyName } = data;

  // Curate unique images for each city based on its index/name
  const cityIndex = cityName.length + cityName.charCodeAt(0);
  const mainImg = `/images/img${(cityIndex % 30) + 1 < 10 ? '0' : ''}${(cityIndex % 30) + 1}.jpeg`;
  const subImg = `/images/img${((cityIndex + 5) % 30) + 1 < 10 ? '0' : ''}${(cityIndex + 5) % 30 + 1}.jpeg`;
  const visualImg = `/images/img${((cityIndex + 10) % 30) + 1 < 10 ? '0' : ''}${(cityIndex + 10) % 30 + 1}.jpeg`;

  // Gallery images (6 unique ones per city)
  const galleryImages = [
    `/images/img${((cityIndex + 1) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 1) % 36) + 1}.jpeg`,
    `/images/img${((cityIndex + 2) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 2) % 36) + 1}.jpeg`,
    `/images/img${((cityIndex + 3) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 3) % 36) + 1}.jpeg`,
    `/images/img${((cityIndex + 4) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 4) % 36) + 1}.jpeg`,
    `/images/img${((cityIndex + 5) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 5) % 36) + 1}.jpeg`,
    `/images/img${((cityIndex + 6) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 6) % 36) + 1}.jpeg`,
  ];

  const services = [
    "Custom Trex and composite deck construction",
    "Expert deck design for luxury outdoor living",
    "Loudoun & Fairfax County permit coordination",
    "Full deck installation with 5-Star craftsmanship",
    "Pool decks, screened porches, and yard fencing"
  ];

  const whyChooseItems = [
    {
      title: `5-Star Rated local service in ${cityName}`,
      desc: "Our team lives and breathes the Northern Virginia architectural style, ensuring your new deck adds maximum value."
    },
    {
      title: "Hassle-free design-to-build journey",
      desc: "We handle the HOAs and permits in your specific neighborhood, from Brambleton to Burke."
    },
    {
      title: "High-performance moisture-resistant materials",
      desc: "We only use premium materials proven to survive the humid Mid-Atlantic seasonal cycles."
    }
  ];

  return (
    <main>
      <ServicesHeader
        subtext={`5-Star Google Rated Specialist in ${countyName}`}
        title={`Deck Builder in ${cityName}`}
        description={`Loudoun Decks is the premier custom deck builder in ${cityName}, VA. We help ${cityName} families create luxury outdoor living spaces with a focus on durability and 5-Star service.`}
      />
      <ServiceMain
        subtitle={`Premier ${cityName} Contractor`}
        title={`High-End Custom Decking in ${cityName}, Virginia`}
        description={`Elevate your lifestyle with a professional deck build in ${cityName}, VA. We specialize in custom Trex, AZEK, and Western Red Cedar designs tailored for the unique neighborhoods of ${cityName}.`}
        listTitle="What We Do:"
        listItems={services}
        image1={mainImg}
        image2={subImg}
      />
      <section className={styles.localFocus}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>The Standard for Custom Decking in {cityName}</h2>
            <p>
              As a dedicated deck builder in {cityName}, Virginia, Loudoun Decks combines local
              neighborhood knowledge with world-class construction standards. We understand the
              specific soil types and building codes across {countyName}, ensuring your installation
              is structurally superior and visually stunning. Explore our full range of{' '}
              <Link href="/services">custom outdoor services</Link> to see how we can transform
              your backyard.
            </p>
          </div>
        </div>
      </section>
      <MasonryGallery images={galleryImages} />
      <ServiceVisual image={visualImg} />
      <WhyChooseDetails
        title={`Why Your ${cityName} Neighbors Choose Us`}
        items={whyChooseItems}
      />
      <ProcessSteps />
      <ServiceAreasGrid />
      <ContactHome />
    </main>
  );
}
