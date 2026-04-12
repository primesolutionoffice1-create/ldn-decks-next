import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFC107" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "ldndecks transformed our backyard completely! The new redwood deck they built is stunning and exactly what we envisioned. Professional, timely, and excellent craftsmanship.",
    image: "/images/img17.jpeg"
  },
  {
    id: 2,
    name: "Michael Thompson",
    text: "I hired them for deck resurfacing and couldn't be happier. They saved my old deck from ruin and made it look brand new. Their attention to detail is second to none.",
    image: "/images/img18.jpeg"
  },
  {
    id: 3,
    name: "Robert & Linda",
    text: "From the initial consultation to the final cleanup, the entire team was a dream to work with. Our new outdoor fencing is incredibly sturdy and beautiful.",
    image: "/images/img19.jpeg"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.subtextWrapper}>
            <span className={styles.line}></span>
            <span className={styles.subtext}>Client Feedback</span>
            <span className={styles.line}></span>
          </div>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </div>

        <div className={styles.cardsGrid}>
          {testimonialsData.map(t => (
            <div key={t.id} className={styles.card}>
              <div className={styles.quoteIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--site-color)" opacity="0.2">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <div className={styles.stars}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              
              <p className={styles.reviewText}>"{t.text}"</p>
              
              <div className={styles.clientProfile}>
                <div className={styles.avatarWrapper}>
                  <Image src={t.image} alt={t.name} fill className={styles.avatar} sizes="65px" />
                </div>
                <div className={styles.clientInfo}>
                  <h4>{t.name}</h4>
                  <span>Satisfied Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
