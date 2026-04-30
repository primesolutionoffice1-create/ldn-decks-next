import React from 'react';
import Image from 'next/image';
import styles from './TeamGrid.module.css';

const teamMembers = [
  {
    name: "Nick",
    role: "Owner & Lead Designer",
    image: "/team/Nick.jpg",
    bio: "Founder and lead designer of Loudoun Decks with over 15 years of experience in custom deck construction across Northern Virginia. Virginia Class A Licensed Contractor. Trex Platinum Certified and TimberTech Certified Installer. Nick personally oversees every project from initial design through final inspection, ensuring each build meets the highest structural and aesthetic standards. He has completed 200+ custom deck projects across Loudoun, Fairfax, and Prince William counties.",
    expertise: ["Custom deck design", "Trex & TimberTech systems", "HOA architectural review", "Structural engineering", "Permit management"],
  },
  {
    name: "Jeff Mineo",
    role: "Head of Sales Department",
    image: "/team/pete.png",
    bio: "Jeff manages all client relationships and project consultations for Loudoun Decks. With deep knowledge of composite and wood decking materials, local building codes, and Northern Virginia HOA requirements, Jeff guides homeowners through every decision — from material selection to budget planning. He conducts all on-site consultations and prepares detailed, itemized project proposals.",
    expertise: ["Client consultations", "Material selection", "Budget planning", "HOA submissions", "Project proposals"],
  },
  {
    name: "Alex, Daniel & Bet",
    role: "Master Technicians",
    image: "/team/alexdanielandbet.jpeg",
    bio: "Our lead construction team brings a combined 25+ years of hands-on deck building experience. Specialists in composite installation (Trex, TimberTech AZEK), structural framing, custom railing systems, and precision carpentry. They handle every phase of construction from footing installation to final trim, ensuring code compliance and exceptional craftsmanship on every project.",
    expertise: ["Composite installation", "Structural framing", "Custom railings", "Precision carpentry", "Code compliance"],
  }
];

export default function TeamGrid() {
  // PersonSchema for the owner — critical for E-E-A-T and AI citations
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ldndecks.com/#nick",
    "name": "Nick",
    "jobTitle": "Owner & Lead Designer",
    "worksFor": { "@type": "Organization", "@id": "https://ldndecks.com/#organization" },
    "knowsAbout": ["Composite decking installation", "Trex deck building", "TimberTech AZEK", "Custom deck design", "Northern Virginia building codes", "HOA architectural review"],
    "image": "https://ldndecks.com/team/Nick.jpg",
    "description": "Founder of Loudoun Decks with 15+ years of custom deck building experience in Northern Virginia. Virginia Class A Licensed Contractor, Trex Platinum Certified.",
  };

  return (
    <section className={styles.teamSection}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className={styles.container}>
        <div className={styles.grid}>
          {teamMembers.map((member, idx) => (
            <div key={idx} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role} at Loudoun Decks`}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#555', marginTop: '0.75rem' }}>{member.bio}</p>
                <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {member.expertise.map((skill, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', background: '#f0f0f0', padding: '0.2rem 0.6rem', borderRadius: 12, color: '#555' }}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
