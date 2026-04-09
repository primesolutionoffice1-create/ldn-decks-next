import React from 'react';
import Image from 'next/image';
import { showcaseProjects } from '@/lib/showcaseData';
import styles from './ShowcaseGrid.module.css';

export default function ShowcaseGrid() {
  return (
    <section className={styles.gridSection}>
       <div className={styles.container}>
          <div className={styles.grid}>
             {showcaseProjects.map((project) => (
                <div key={project.id} className={styles.card}>
                   <div className={styles.imgWrapper}>
                      <Image 
                         src={project.image} 
                         alt={project.title} 
                         fill 
                         className={styles.cardImg} 
                         sizes="(max-width: 768px) 100vw, 33vw"
                      />
                   </div>
                   <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <p className={styles.cardLocation}>{project.location}</p>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
