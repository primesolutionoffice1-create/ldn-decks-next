import React from 'react';

/**
 * ArticleSchema — Structured data for informational/guide pages.
 * Helps AI systems (ChatGPT, Perplexity, Gemini, Copilot, Google AI Overview)
 * identify, extract, and cite content from this page.
 *
 * @param {string} title - Article headline
 * @param {string} description - Article description/summary
 * @param {string} path - URL path (e.g. "/how-much-does-a-deck-cost-northern-virginia")
 * @param {string} image - Image URL
 * @param {string} datePublished - ISO date string
 * @param {string} dateModified - ISO date string
 * @param {string[]} speakable - CSS selectors for AI-citable content sections
 */
export default function ArticleSchema({
  title,
  description,
  path,
  image = '/og-default.webp',
  datePublished = '2025-01-15',
  dateModified = '2026-04-18',
  speakable = ['[data-speakable]', '.quick-answer'],
}) {
  const url = `https://ldndecks.com${path}`;
  const imageUrl = image.startsWith('http') ? image : `https://ldndecks.com${image}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    author: [
      {
        '@type': 'Person',
        '@id': 'https://ldndecks.com/#nick',
        name: 'Nick',
        jobTitle: 'Owner & Lead Designer',
        url: 'https://ldndecks.com/team',
      },
      {
        '@type': 'Organization',
        '@id': 'https://ldndecks.com/#organization',
      },
    ],
    publisher: {
      '@type': 'Organization',
      '@id': 'https://ldndecks.com/#organization',
      name: 'Loudoun Decks',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ldndecks.com/ldndecks-logo.webp',
      },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    about: {
      '@type': 'Thing',
      name: 'Deck Building in Northern Virginia',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: speakable,
    },
    isAccessibleForFree: true,
    inLanguage: 'en-US',
  };

  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  });
}
