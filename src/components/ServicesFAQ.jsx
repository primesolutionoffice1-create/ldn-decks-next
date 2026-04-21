"use client";
import React, { useState } from 'react';
import styles from './ServicesFAQ.module.css';

const faqData = [
  {
    q: "What services does Loudoun Decks offer?",
    a: "We provide custom deck construction, deck resurfacing, patios, porches, and pergolas or gazebos."
  },
  {
    q: "Do you work on residential projects only?",
    a: "Yes. Loudoun Decks focuses on residential outdoor living projects."
  },
  {
    q: "What areas do you serve?",
    a: "We serve homeowners in Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. We offer free consultations to discuss outdoor living projects."
  }
];

export default function ServicesFAQ({ title = "Services FAQs", faqs = faqData }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Generate FAQPage schema from the FAQ data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <section className={styles.faqSection}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className={styles.container}>
         <h2 className={styles.title}>{title}</h2>
         <div className={styles.accordionContainer}>
            {faqs.map((item, idx) => (
              <div key={idx} className={styles.accordionItem}>
                <button
                  className={styles.accordionBtn}
                  onClick={() => toggleAccordion(idx)}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <span className={styles.icon}>
                    {openIndex === idx ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`${styles.accordionContent} ${openIndex === idx ? styles.open : ''}`}
                >
                  <div className={styles.answerText}>{item.a}</div>
                </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}
