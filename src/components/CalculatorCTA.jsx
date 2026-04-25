"use client";
import React from 'react';
import Link from 'next/link';
import styles from './CalculatorCTA.module.css';

export default function CalculatorCTA() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textSide}>
          <span className={styles.badge}>Planning Tool</span>
          <h2 className={styles.title}>What does your <br/>dream deck cost?</h2>
          <p className={styles.description}>
            Use our interactive pricing tool to get an instant, personalized budget range 
            for your project based on square footage, materials, and features.
          </p>
          <Link href="/deck-cost-calculator" className={styles.ctaButton}>
            Launch Deck Price Calculator
          </Link>
        </div>
        <div className={styles.visualSide}>
          <div className={styles.mockupContainer}>
            <div className={styles.mockup}>
              <div className={styles.mockupHeader}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonBox}></div>
                <div className={styles.skeletonRow}>
                   <div className={styles.skeletonSmallBox}></div>
                   <div className={styles.skeletonSmallBox}></div>
                </div>
                <div className={styles.skeletonButton}></div>
              </div>
            </div>
            <div className={styles.floatingPrice}>
               <span className={styles.priceLabel}>Estimated Price Range</span>
               <span className={styles.priceValue}>$18,500 - $24,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
