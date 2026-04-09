import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      {/* Background Floating Orbs */}
      <div className={styles.floatingCircle1}></div>
      <div className={styles.floatingCircle2}></div>

      <div className={styles.container}>
        <div className={styles.textWrap}>
          <h1 className={styles.glitch}>404</h1>
        </div>

        <div className={styles.contentArea}>
          <div className={styles.subtextWrapper}>
             <span className={styles.line}></span>
             <span className={styles.subtext}>Page Not Found</span>
             <span className={styles.line}></span>
          </div>
          
          <h2 className={styles.title}>You stepped off the deck!</h2>
          <p className={styles.description}>
            The outdoor space you are looking for doesn't exist or is currently undergoing renovation. Let's get you back to sturdy ground.
          </p>

          <Link href="/" className={styles.homeBtn}>
            Return To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
