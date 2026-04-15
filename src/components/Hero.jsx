import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.subtextWrapper}>
          <span className={styles.line}></span>
          <span className={styles.subtext}>BUILDING MEMORIES TOGETHER</span>
          <span className={styles.line}></span>
        </div>
        <h1 className={styles.title}>
          Northern Virginia’s Premium Deck Builder for Custom Outdoor Living
        </h1>
        <div className={styles.buttonGroup}>
          <a href="tel:+15716557207" className={styles.ctaButton}>
            Call Now: (571) 655-7207
          </a>
          <Link href="/contact" className={styles.ctaButtonAlt}>
            Get Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}