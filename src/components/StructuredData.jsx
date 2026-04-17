import React from 'react';

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Loudoun Decks",
    "image": "https://www.ldndecks.com/ldndecks-logo.webp",
    "@id": "https://www.ldndecks.com/#business",
    "url": "https://www.ldndecks.com",
    "telephone": "+1-571-655-7207",
    "priceRange": "$$-$$$",
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
      "latitude": 38.8404,
      "longitude": -77.4289
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
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
          "text": "We serve Loudoun County, Fairfax County, and Prince William County, including cities like Ashburn, Leesburg, Sterling, Centreville, Reston, and Woodbridge."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer free on-site consultations to discuss your outdoor living project and provide a detailed estimate."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a deck?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most deck projects take 2-4 weeks to complete once construction begins, depending on the size and complexity of the design."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Loudoun Decks is a fully licensed and insured Class A contractor in the state of Virginia."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle HOA and permits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We manage the entire permitting process and provide the necessary diagrams for your HOA architectural review."
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
