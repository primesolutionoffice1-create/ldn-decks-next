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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.067065362167!2d-77.46349332425417!3d38.753922555157324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65b8e672ba169%3A0x3c56c33215b363e5!2s8735%20Quarry%20Rd%2C%20Manassas%2C%20VA%2020110!5e1!3m2!1sen!2sus!4v1776131437336!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}
