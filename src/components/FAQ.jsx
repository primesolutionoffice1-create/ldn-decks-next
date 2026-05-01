"use client";
import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqsData = [
  {
    question: "How long does it typically take to build a new deck?",
    answer: "The timeline depends on the size and complexity of the deck, as well as weather conditions. On average, a standard deck takes about 1 to 2 weeks from the day construction begins. We always provide a clear timeline during our consultation."
  },
  {
    question: "Do I need a permit to build a deck or fence?",
    answer: "In most counties, yes. But don't worry ldndecks handles the entire permitting process for you. We ensure all plans are compliant with local building codes, taking the paperwork off your hands."
  },
  {
    question: "What decking materials do you recommend for longevity?",
    answer: "We highly recommend composite or PVC decking for maximum durability and low maintenance. If you prefer natural wood, high-quality IPE or treated Redwood are excellent choices that can last decades with proper sealing and care."
  },
  {
    question: "Can you resurface my existing deck instead of replacing it?",
    answer: "Absolutely! If your deck's foundational framing and joists are still structurally sound, we can remove the old surface boards and railings, replacing them with brand new materials. This is a highly cost-effective way to get a 'new' deck."
  },
  {
    question: "Do you provide warranties on your work?",
    answer: "Yes. We stand behind our work with a 2-year workmanship warranty on all labor. On top of that, Trex composite decking carries a 25-year residential warranty and TimberTech/AZEK carries a 30-year warranty, both passed directly to you. Combined, you\u2019re looking at decades of coverage from both materials and craftsmanship."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open first one by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.subtextWrapper}>
            <span className={styles.line}></span>
            <span className={styles.subtext}>Find Your Answers</span>
            <span className={styles.line}></span>
          </div>
          <h2 className={styles.title}>Frequently Asked<br /> Questions</h2>
        </div>

        <div className={styles.accordionContainer}>
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
              >
                <div
                  className={styles.questionBlock}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <button className={styles.iconButton} aria-label="Toggle answer">
                    {isOpen ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </button>
                </div>

                <div
                  className={styles.answerBlock}
                  style={{ maxHeight: isOpen ? '250px' : '0px' }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
