import React from 'react';
import Link from 'next/link';
import styles from './ServicesCallToAction.module.css';

export default function ServicesCallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Start Your Outdoor Project?</h2>
        <p className={styles.description}>
          Get in touch with our experts today to schedule your free consultation and transform your outdoor living space.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}
