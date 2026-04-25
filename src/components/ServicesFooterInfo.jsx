import React from 'react';
import styles from './ServicesFooterInfo.module.css';

export default function ServicesFooterInfo() {
  return (
    <section className={styles.footerInfoSection}>
      <div className={styles.container}>
        <div className={styles.contentWrap}>
           <h2>Serving Northern Virginia Homeowners</h2>
           <p className={styles.mainDesc}>
             Loudoun Decks provides outdoor living services across multiple regions. We are deeply committed to turning local backyards into beautiful focal points.
           </p>

           <div className={styles.countiesWrap}>
             <div className={styles.countyBadge}>Loudoun County</div>
             <div className={styles.countyBadge}>Fairfax County</div>
             <div className={styles.countyBadge}>Prince William County</div>
           </div>

           <p className={styles.citiesText}>
              We regularly work in cities such as <strong>Ashburn, Leesburg, Sterling, Centreville, Reston, Woodbridge, and Manassas</strong>.
           </p>
        </div>
      </div>
    </section>
  );
}
