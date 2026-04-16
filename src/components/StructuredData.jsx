import React from 'react';

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Loudoun Decks",
    "image": "https://ldndecks.com/ldndecks-logo.webp",
    "@id": "https://ldndecks.com",
    "url": "https://ldndecks.com",
    "telephone": "+1-571-655-7207",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13704 Winding Oak Cir",
      "addressLocality": "Centreville",
      "addressRegion": "VA",
      "postalCode": "20121",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8396576,
      "longitude": -77.4392692
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "41",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61573750423712",
      "https://x.com/ldndecks",
      "https://www.instagram.com/loudoundecks/",
      "https://www.tiktok.com/@loudoun.decks"
    ]
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Loudoun County, Fairfax County, and Prince William County, including cities like Ashburn, Leesburg, Sterling, and Centreville."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer free consultations to discuss your outdoor living project and provide expert advice on design and materials."
        }
      },
      {
        "@type": "Question",
        "name": "What type of decking materials do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in premium composite decking from brands like Trex and TimberTech, as well as high-quality natural wood options."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Loudoun Decks is fully licensed and insured to operate in the state of Virginia."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
