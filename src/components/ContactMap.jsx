import React from 'react';
import styles from './ContactMap.module.css';

export default function ContactMap() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
           <h2>Our Primary Location</h2>
        </div>
        <div className={styles.mapWrapper}>
          <iframe 
            src="https://www.google.com/maps?cid=10508603141052545545&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=ur&source=embed" 
            className={styles.mapIframe}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Loudoun Decks Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
