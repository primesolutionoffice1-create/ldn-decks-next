import React from 'react';
import styles from './ServicesHeader.module.css';

export default function ServicesHeader({ 
  subtext = "What We DO", 
  title = "Deck & Outdoor Living Services", 
  description = "Loudoun Decks provides residential deck and outdoor living services for homeowners in Loudoun County, Fairfax County, and Prince William County. Our focus is on planning and building outdoor spaces that fit each home and lifestyle."
}) {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.subtextWrapper}>
          <span className={styles.subtext}>{subtext}</span>
          <span className={styles.line}></span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
