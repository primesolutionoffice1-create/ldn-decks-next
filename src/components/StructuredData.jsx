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
          "description": "Top-rated custom deck builder in Loudoun County, Northern Virginia. Trex Platinum Partner and TimberTech Certified Installer. Specializing in composite decks, wood decks, screened porches, pergolas, and deck replacement.",
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
          "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 38.8404,
                  "longitude": -77.4289
          },
          "areaServed": [
            { "@type": "County", "name": "Loudoun County, VA" },
            { "@type": "County", "name": "Fairfax County, VA" },
            { "@type": "County", "name": "Prince William County, VA" },
            { "@type": "City", "name": "Ashburn, VA" },
            { "@type": "City", "name": "Leesburg, VA" },
            { "@type": "City", "name": "Sterling, VA" },
            { "@type": "City", "name": "Aldie, VA" },
            { "@type": "City", "name": "Reston, VA" },
            { "@type": "City", "name": "Herndon, VA" },
            { "@type": "City", "name": "Fairfax, VA" },
            { "@type": "City", "name": "Centreville, VA" },
            { "@type": "City", "name": "Chantilly, VA" },
            { "@type": "City", "name": "Manassas, VA" },
            { "@type": "City", "name": "Woodbridge, VA" }
                ],
          "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pergola and Gazebo Building" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bluestone Patio Installation" } }
                          ]
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
                    "name": "How much does it cost to build a deck in Loudoun County?",
                    "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Most permitted decks in Loudoun County range from $15,000 for a standard build to $65,000 or more for a premium multi-level composite deck. LDN Decks provides firm written estimates after every free on-site consultation. Call (571) 655-7207."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Do I need a permit to build a deck in Loudoun County?",
                    "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. In Loudoun County and across Fairfax and Prince William Counties, virtually all attached decks require a building permit and county inspection. LDN Decks handles the entire permitting process on every project we build."
                    }
          },
          {
                    "@type": "Question",
                    "name": "How long does it take to build a deck in Northern Virginia?",
                    "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Active construction on most standard deck builds takes 1-2 weeks once permits are approved. Larger projects such as multi-level decks or screened porches typically run 2-4 weeks. Permit approval in Loudoun, Fairfax, and Prince William Counties generally takes 2-4 weeks."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What is the best decking material for Northern Virginia?",
                    "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Premium composite decking such as Trex, TimberTech, Fiberon, or Azek is the optimal choice for most Northern Virginia homeowners. These materials resist the region's humidity, UV exposure, and freeze-thaw cycles without annual maintenance, and carry 25-30 year material warranties."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Are you licensed and insured in Virginia?",
                    "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, Loudoun Decks is a fully licensed and insured contractor in Virginia, a Trex Platinum Partner and TimberTech Certified Installer."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Do you serve Ashburn, Leesburg, Reston and Northern Virginia?",
                    "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. LDN Decks builds custom decks, screened porches, pergolas, and outdoor living spaces in Ashburn, Leesburg, Sterling, Aldie, Reston, Herndon, Fairfax, Centreville, Chantilly, Manassas, and Woodbridge."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Do you handle HOA submissions and permits?",
                    "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. We manage the entire permitting process and provide CAD drawings and site plan renderings for HOA architectural review in Brambleton, Willowsford, Lansdowne, and across Northern Virginia."
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
        </>>
      );
}</>
