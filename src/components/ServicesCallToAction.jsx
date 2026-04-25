'use client';
import React from 'react';
import Link from 'next/link';
import { trackPhoneClick } from '@/lib/tracking';
import styles from './ServicesCallToAction.module.css';

export default function ServicesCallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Start Your Outdoor Project?</h2>
        <p className={styles.description}>
          Get in touch with our experts today to schedule your free consultation and transform your outdoor living space.
        </p>
        <div className={styles.buttonGroup}>
          <a href="tel:+15716557207" className={styles.phoneButton} onClick={trackPhoneClick}>
            Call Now: (571) 655-7207
          </a>
          <Link href="/contact" className={styles.estimateButton}>
            Get Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
