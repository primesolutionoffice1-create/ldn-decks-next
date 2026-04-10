import React from 'react';
import styles from './ServiceContentExpansion.module.css';

export default function ServiceContentExpansion({ sections }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {sections.map((section, idx) => (
          <div key={idx} className={styles.textBlock}>
            {section.title && <h3 className={styles.subTitle}>{section.title}</h3>}
            <div className={styles.content}>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className={styles.paragraph}>{p}</p>
              ))}
            </div>
            {section.listItems && (
              <ul className={styles.detailsList}>
                {section.listItems.map((item, iIdx) => (
                  <li key={iIdx} className={styles.listItem}>
                    <strong>{item.label}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
