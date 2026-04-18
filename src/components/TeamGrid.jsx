import React from 'react';
import Image from 'next/image';
import styles from './TeamGrid.module.css';

const teamMembers = [
  {
    name: "Nick",
    role: "Owner & Lead Designer",
    image: "/team/Nick.jpg"
  },
  {
    name: "Pete",
    role: "Head of Sales Department",
    image: "/team/pete.png"
  },
  {
    name: "Alex, Danile & Bet",
    role: "Master Technicians",
    image: "/team/alexdanielandbet.jpeg"
  }
];

export default function TeamGrid() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {teamMembers.map((member, idx) => (
            <div key={idx} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
