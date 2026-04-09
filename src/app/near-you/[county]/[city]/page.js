import React from 'react';
import { notFound } from 'next/navigation';
import { getAllCityPaths, getCityData } from '@/data/cityData';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceVisual from '@/components/ServiceVisual';
import MasonryGallery from '@/components/MasonryGallery';
import ProcessSteps from '@/components/ProcessSteps';
import WhyChooseDetails from '@/components/WhyChooseDetails';
import ContactHome from '@/components/ContactHome';
import styles from './CityPage.module.css';

// Pre-render all 43 city pages at build time
export async function generateStaticParams() {
  return getAllCityPaths();
}

export async function generateMetadata({ params }) {
  const { county, city } = await params;
  const data = getCityData(county, city);
  if (!data) return {};

  return {
    title: `Deck Builder in ${data.cityName}, VA | Custom Decks & Patios | Loudoun Decks`,
    description: `Looking for a trusted deck builder in ${data.cityName}, VA? Loudoun Decks designs and builds custom wood and composite decks for homeowners across ${data.cityName} and ${data.countyName}.`
  };
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
    "Custom wood and composite deck construction",
    "Deck design based on your home and outdoor space",
    "Permit coordination and local compliance",
    "Full deck installation from start to finish",
    "Replacement and upgrades for existing decks"
  ];

  const whyChooseItems = [
    {
      title: `Local experience building decks for ${cityName} homes`,
      desc: "We understand the specific residential layouts and neighborhood styles common in this community."
    },
    {
      title: "Clear communication from design to completion",
      desc: "Our team keeps you informed at every stage to ensure your vision is realized."
    },
    {
      title: "Focus on durable materials and proper construction",
      desc: "We only use premium wood and composite materials that withstand the Virginia climate."
    }
  ];

  return (
    <main>
      <ServicesHeader 
        subtext={`Trusted Local Contractor in ${countyName}`}
        title={`Deck Builder in ${cityName}`}
        description={`Looking for a trusted deck builder in ${cityName}, VA? Loudoun Decks designs and builds custom wood and composite decks for homeowners across ${cityName} and nearby Northern Virginia communities.`}
      />

      <ServiceMain 
        subtitle={`Serving ${cityName} Homeowners`}
        title={`Custom Deck Building Services in ${cityName}, Virginia`}
        description={`We provide professional deck building services in ${cityName}, VA for homeowners looking to upgrade their outdoor space. Every deck is planned with your home’s layout, intended use, and material preference in mind.`}
        listTitle="What We Do:"
        listItems={services}
        image1={mainImg}
        image2={subImg}
      />

      <section className={styles.localFocus}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>A Local Deck Builder Serving {cityName} Homeowners</h2>
            <p>
              As a locally focused deck builder in {cityName}, Virginia, we understand local residential layouts, neighborhood expectations, and common outdoor living needs. Our goal is to build decks that feel like a natural extension of your home.
            </p>
          </div>
        </div>
      </section>

      <MasonryGallery images={galleryImages} />

      <ServiceVisual image={visualImg} />

      <WhyChooseDetails 
        title={`Why Choose Loudoun Decks in ${cityName}, VA`}
        items={whyChooseItems}
      />

      <ProcessSteps />

      <ContactHome />
    </main>
  );
}
