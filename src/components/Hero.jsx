"use client";
import { useContact } from '@/context/ContactContext';
import { trackPhoneClick } from '@/lib/tracking';
import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  const { openContact } = useContact();

  return (
    <section className={styles.heroSection}>
      <Image
        src="/home-page-ldn.png"
        alt="Loudoun Decks Hero"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.subtextWrapper}>
          <span className={styles.line}></span>
          <span className={styles.subtext}>BUILDING MEMORIES TOGETHER</span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.trustBadge}>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.ratingText}>5.0 Google Rating | 41 Reviews</span>
        </div>
        <h1 className={styles.title}>
          Northern Virginia’s #1 Rated Composite Deck Builder
        </h1>
        <p className={styles.heroDescription}>
          Custom-designed decks, screened porches & outdoor living spaces.
          Trex & TimberTech certified. Serving Loudoun, Fairfax & Prince William Counties.
        </p>
        <div className={styles.buttonGroup}>
          <a href="tel:+15716557207" className={styles.ctaButton} onClick={trackPhoneClick}>
            Call Now: (571) 655-7207
          </a>
          <button onClick={openContact} className={styles.ctaButtonAlt}>
            Get Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
