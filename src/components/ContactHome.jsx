import React from 'react';
import styles from './ContactHome.module.css';

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function ContactHome() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.subtextWrapper}>
            <span className={styles.line}></span>
            <span className={styles.subtext}>Get In Touch</span>
          </div>
          <h2 className={styles.title}>Ready To Build Your<br/>Dream Deck?</h2>
          <p className={styles.description}>
            Reach out to our team of expert craftsmen today. Whether you have a firm plan in mind or need inspiration, we are here to provide a free consultation and exact quote for your outdoor project.
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><PhoneIcon /></div>
              <div className={styles.infoText}>
                <span>Call Us Anytime</span>
                <strong>+1 (571) 655-7207</strong>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><MailIcon /></div>
              <div className={styles.infoText}>
                <span>Email Us</span>
                <strong>office@ldndecks.com</strong>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><MapIcon /></div>
              <div className={styles.infoText}>
                <span>Our Location</span>
                <strong>13704 Winding Oak Cir, Centreville, VA 20121, Virginia</strong>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <form className={styles.contactForm}>
            <h3>Request A Free Quote</h3>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className={styles.inputGroup}>
                <select required defaultValue="">
                  <option value="" disabled>Select Service</option>
                  <option value="new_decks">New Decks</option>
                  <option value="resurfacing">Deck Resurfacing</option>
                  <option value="fencing">Fencing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
            </div>
            <button type="button" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
