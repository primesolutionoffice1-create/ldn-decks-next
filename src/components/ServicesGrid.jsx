import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesGrid.module.css';

const servicesContent = [
  {
    id: 1,
    title: 'Custom Deck Construction',
    desc: 'We design and build custom decks tailored to the layout of your home and how you plan to use your outdoor space. Each deck project is planned around the property, available space, and homeowner preferences. Custom decks can be designed as standalone outdoor spaces or integrated with other outdoor features such as patios or porches.',
    image: '/service_grid_1.png',
    link: '/services/new-decks'
  },
  {
    id: 2,
    title: 'Deck Resurfacing',
    desc: 'For homeowners with an existing deck, deck resurfacing is an option to update the look and usability of the space. This service focuses on improving the surface and appearance of an existing deck without building a completely new structure. Deck resurfacing can be a practical solution for extending the use of an outdoor space.',
    image: '/service_grid_2.png',
    link: '/services/deck-resurfacing'
  },
  {
    id: 3,
    title: 'Patios',
    desc: 'We build patios that provide a functional outdoor area for relaxation and gatherings. Patios can be designed as standalone outdoor spaces or as part of a larger outdoor living layout connected to decks or other features. Each patio project is planned to complement the home and outdoor environment.',
    image: '/service_grid_3.png',
    link: '/services/patios'
  },
  {
    id: 4,
    title: 'Porches',
    desc: 'Our porch projects are designed to create a comfortable transition between indoor and outdoor living. Porches can add usable outdoor space while maintaining a close connection to the home. We work with homeowners to plan porch layouts that fit their property and intended use.',
    image: '/service_grid_4.png',
    link: '/services/porches'
  },
  {
    id: 5,
    title: 'Pergolas and Gazebos',
    desc: 'We also build pergolas and gazebos as part of outdoor living projects. These structures can add definition and function to an outdoor space while complementing decks, patios, or landscaped areas. Each structure is planned based on the available space and homeowner goals.',
    image: '/service_grid_5.png',
    link: '/services/gazebo-pergola'
  },
  {
    id: 6,
    title: 'How to Get Started',
    desc: 'If you’re considering a deck or outdoor living project, the first step is a free consultation. During this conversation, we discuss your ideas, review the space, and answer any questions you may have. This helps homeowners understand their options before moving forward.',
    image: '/service_grid_6.png',
    link: '/contact'
  }
];

export default function ServicesGrid() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        
        <div className={styles.introBlock}>
           <h2>Our Outdoor Living Services</h2>
           <p>Loudoun Decks specializes in residential outdoor living projects across Northern Virginia. Whether you’re planning a new deck or improving an existing outdoor space, our services are designed to help homeowners create functional and well‑planned outdoor areas. Below is an overview of the services we provide.</p>
        </div>

        <div className={styles.grid}>
          {servicesContent.map(service => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imgWrapper}>
                 <Image src={service.image} alt={service.title} fill className={styles.cardImg} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className={styles.cardBody}>
                 <h3 className={styles.cardTitle}>{service.title}</h3>
                 <p className={styles.cardDesc}>{service.desc}</p>
                 <Link href={service.link} className={styles.readMoreBtn}>
                   Read More
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
