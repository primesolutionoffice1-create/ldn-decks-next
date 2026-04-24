import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesGrid.module.css';

const servicesContent = [
  {
    id: 1,
    title: 'Custom Deck Design & Build',
    desc: 'From concept to completion, we design and build fully custom decks tailored to your space, style, and budget no templates, no shortcuts.',
    image: '/showcase/img08.jpeg',
    link: '/services/new-decks'
  },
  {
    id: 2,
    title: 'Deck Resurfacing',
    desc: 'For homeowners with an existing deck, deck resurfacing is an option to update the look and usability of the space. This service focuses on improving the surface and appearance of an existing deck without building a completely new structure. Deck resurfacing can be a practical solution for extending the use of an outdoor space.',
    image: '/images/img25.jpeg',
    link: '/services/deck-resurfacing'
  },
  {
    id: 3,
    title: 'Bluestone Patios',
    desc: 'Upgrade your outdoor space with a high-end bluestone patio — natural beauty, unmatched durability, and a timeless look.',
    image: '/showcase/img11.jpeg',
    link: '/services/patios'
  },
  {
    id: 4,
    title: 'Porches',
    desc: 'Our porch projects are designed to create a comfortable transition between indoor and outdoor living. Porches can add usable outdoor space while maintaining a close connection to the home. We work with homeowners to plan porch layouts that fit their property and intended use.',
    image: '/images/img03.jpeg',
    link: '/services/porches'
  },
  {
    id: 5,
    title: 'Pergolas and Gazebos',
    desc: 'We also build pergolas and gazebos as part of outdoor living projects. These structures can add definition and function to an outdoor space while complementing decks, patios, or landscaped areas. Each structure is planned based on the available space and homeowner goals.',
    image: '/images/img28.jpeg',
    link: '/services/gazebo-pergola'
  },
  {
    id: 6,
    title: 'Deck Stair Lighting',
    desc: 'Custom built LED lighting systems installed directly into your deck stairs for safety and a luxurious evening atmosphere.',
    image: '/showcase/light-img.jpeg',
    link: '/services/deck-stair-lighting'
  },
  {
    id: 7,
    title: 'Trex Railings',
    desc: 'Upgrade your deck with modern Trex railing systems and a custom cocktail top perfect for entertaining and relaxing.',
    image: '/showcase/img06.jpg',
    link: '/services/trex-railings'
  },
  {
    id: 8,
    title: 'Custom Fire Pits',
    desc: 'Transform your backyard into a warm, inviting space with a custom-built fire pit perfect for relaxing nights and entertaining guests.',
    image: '/showcase/img15.jpeg',
    link: '/services/fire-pits'
  },
  {
    id: 9,
    title: 'Under Deck Patios',
    desc: 'Maximize your outdoor living space with a custom under-deck patio system protected from rain, clean, and perfect for relaxing or entertaining year-round.',
    image: '/showcase/img19.jpg',
    link: '/services/under-deck-patios'
  },
  {
    id: 10,
    title: 'Trex Calm Shell Resurfacing',
    desc: 'Give your old deck a fresh, modern look with Trex Calm Shell a premium composite color designed for durability, style, and low maintenance.',
    image: '/images/img26.jpeg',
    link: '/services/trex-calm-shell'
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
