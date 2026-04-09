import React from 'react';
import Link from 'next/link';
import styles from './SimpleCTA.module.css';

export default function SimpleCTA({ title, buttonText, link }) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <Link href={link} className={styles.btn}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
