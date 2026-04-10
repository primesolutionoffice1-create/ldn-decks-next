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
    "sameAs": [
      "https://www.facebook.com/",
      "https://x.com/ldndecks",
      "https://www.instagram.com/loudoundecks/",
      "https://www.tiktok.com/@loudoun.decks"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
