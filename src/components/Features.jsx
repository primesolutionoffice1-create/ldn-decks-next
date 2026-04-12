import React from 'react';
import Image from 'next/image';
import styles from './Features.module.css';

const featuresData = [
  {
    id: '01',
    title: 'Restoration \nand Maintenance',
    icon: '/icons/icon-1.png'
  },
  {
    id: '02',
    title: 'Fast and \nReliable Services',
    icon: '/icons/icon-2.png'
  },
  {
    id: '03',
    title: 'Skilled and \nTrained Experts',
    icon: '/icons/icon-3.png'
  }
];

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureBox}>
            <div className={styles.iconWrapper}>
              <Image
                src={feature.icon}
                alt={feature.title.replace('\n', ' ')}
                width={65}
                height={65}
                className={styles.icon}
              />
            </div>
            <div className={styles.textContent}>
              <span className={styles.number}>{feature.id}</span>
              <h4 className={styles.title}>
                {feature.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== feature.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
