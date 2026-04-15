"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Introduction.module.css';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className={styles.introSection} ref={sectionRef}>
      <div className={styles.container}>
        {/* Images Column */}
        <div className={styles.imagesCol}>
          <div className={styles.subImgWrapper}>
            <Image src="/images/img53.jpeg" alt="Relaxing deck" fill className={styles.imgProps} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>

          <div className={styles.frameOutline}></div>

          <div className={styles.mainImgWrapper}>
            <Image src="/images/img31.jpeg" alt="Decking experts" fill className={styles.imgProps} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>

        {/* Content Column */}
        <div className={styles.contentCol}>
          <div className={styles.subheadingWrapper}>
            <span className={styles.subheading}>Our Introduction</span>
            <span className={styles.line}></span>
          </div>
          <h2 className={styles.title}>Trusted Decking<br /> Professionals</h2>
          <p className={styles.description}>
            We are Loudoun County&apos;s premier outdoor living specialists. Whether it is a brand-new composite deck or a custom fencing solution, our team of expert carpenters ensures every joint is perfect, structurally sound, and built to withstand the elements.
          </p>

          <ul className={styles.checkList}>
            <li>
              <CheckIcon />
              <span>Premium, weather-resistant materials guaranteed to last</span>
            </li>
            <li>
              <CheckIcon />
              <span>Fully permitted, code-compliant, and structurally certified builds</span>
            </li>
          </ul>

          <div className={styles.progressContainer}>
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span className={styles.progressTitle}>Decking</span>
              </div>
              <div className={styles.progressBarBg}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: isVisible ? '80%' : '0%' }}
                ></div>
              </div>
            </div>
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span className={styles.progressTitle}>Fencing</span>
              </div>
              <div className={styles.progressBarBg}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: isVisible ? '50%' : '0%' }}
                ></div>
              </div>
            </div>
          </div>

          <a href="tel:+15716557207" className={styles.ctaButton}>
            Call For A Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
