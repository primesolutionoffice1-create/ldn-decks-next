import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesHome.module.css';

const servicesData = [
  {
    id: 1,
    title: 'New Decks',
    description: 'Custom-designed and structurally engineered decks using premium composite or natural wood materials to expand your outdoor space.',
    image: '/images/img100.jpg',
  },
  {
    id: 2,
    title: 'Deck Resurfacing',
    description: 'Breathe new life into your existing deck frame with completely refreshed surface boards, modern railings, and updated stairs.',
    image: '/images/img49.jpeg',
  },
  {
    id: 3,
    title: 'Outdoor Washing',
    description: 'Professional high-pressure washing and treatment services to remove years of grime, mold, and weather damage from your wood.',
    image: '/images/img50.jpeg',
  }
];

export default function ServicesHome() {
  return (
    <section className={styles.servicesSection}>
      {/* Background structural splitting */}
      <div className={styles.bgTop}></div>
      <div className={styles.bgBottom}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.subtextWrapper}>
              <span className={styles.subtext}>What We're Offering</span>
              <span className={styles.line}></span>
            </div>
            <h2 className={styles.title}>Best Services We're<br /> Providing You</h2>
          </div>
          <div className={styles.descArea}>
            <p>From ground-up construction to precise restoration, ldndecks provides comprehensive outdoor solutions. Each service is tailored to your home's unique layout and your family's needs, backed by our ironclad warranty.</p>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {servicesData.map(service => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imgWrapper}>
                <Image src={service.image} alt={service.title} fill className={styles.cardImg} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.btnWrapper}>
          <Link href="/services" className={styles.ctaButton}>
            More Services
          </Link>
        </div>
      </div>
    </section>
  );
}
