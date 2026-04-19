import React from 'react';

export default function StructuredData() {
      const jsonLd = {
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Loudoun Decks",
              "alternateName": "LDN Decks",
                                              "image": "https://www.ldndecks.com/ldndecks-logo.webp",
                                              "@id": "https://www.ldndecks.com/#business",
                                              "url": "https://www.ldndecks.com",
              "telephone": "+1-571-655-7207",
              "email": "office@ldndecks.com",
              "priceRange": "$$$",
              "description": "Top-rated custom deck builder in Loudoun County, Northern Virginia. Trex Platinum Partner and TimberTech Certified Installer.",
              "address": [
                  {
                              "@type": "PostalAddress",
                              "streetAddress": "13704 Winding Oak Cir",
                              "addressLocality": "Centreville",
                              "addressRegion": "VA",
                              "postalCode": "20121",
                              "addressCountry": "US"
                  },
                  {
                              "@type": "PostalAddress",
                              "streetAddress": "8735 Quarry Rd., Unit 102",
                              "addressLocality": "Manassas",
                              "addressRegion": "VA",
                              "postalCode": "20110",
                              "addressCountry": "US"
                  }
                      ],
              "geo": { "@type": "GeoCoordinates", "latitude": 38.8404, "longitude": -77.4289 },
              "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+1-571-655-7207",
                        "contactType": "customer service",
                        "areaServed": ["US-VA"],
                        "availableLanguage": "en"
              },
              "areaServed": [
                  { "@type": "State", "name": "Virginia" },
                  { "@type": "County", "name": "Loudoun County, VA" },
                  { "@type": "County", "name": "Fairfax County, VA" },
                  { "@type": "County", "name": "Prince William County, VA" },
                  { "@type": "City", "name": "Ashburn, VA" },
                  { "@type": "City", "name": "Leesburg, VA" },
                  { "@type": "City", "name": "Sterling, VA" },
                  { "@type": "City", "name": "Reston, VA" },
                  { "@type": "City", "name": "Herndon, VA" },
                  { "@type": "City", "name": "Fairfax, VA" },
                  { "@type": "City", "name": "Centreville, VA" },
                  { "@type": "City", "name": "Manassas, VA" },
                  { "@type": "City", "name": "Alexandria, VA" },
                  { "@type": "City", "name": "Vienna, VA" },
                  { "@type": "City", "name": "Mclean, VA" },
                  { "@type": "City", "name": "Falls Church, VA" },
                  { "@type": "City", "name": "Burke, VA" },
                  { "@type": "City", "name": "Springfield, VA" },
                  { "@type": "City", "name": "Chantilly, VA" },
                  { "@type": "City", "name": "Woodbridge, VA" },
                  { "@type": "City", "name": "Haymarket, VA" },
                  { "@type": "City", "name": "Gainesville, VA" }
                       ],
              "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
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
              "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Deck Building and Outdoor Living Services",
                        "itemListElement": [
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Deck Building" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Composite Deck Installation" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trex Deck Installation" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck Replacement and Resurfacing" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Screened Porch Construction" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pergola and Gazebo Building" } }
                                  ]
              },
              "sameAs": [
                        "https://www.facebook.com/profile.php?id=61573750423712",
                        "https://x.com/ldndecks",
                        "https://www.instagram.com/loudoundecks/",
                        "https://www.tiktok.com/@loudoun.decks"
                      ]
      };

  return React.createElement(
          React.Fragment,
          null,
          React.createElement('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
          })
        );
}
