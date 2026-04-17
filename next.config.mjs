/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Core Pages
      { source: '/about-loudoun-deck-company', destination: '/about', permanent: true },
      { source: '/why-choose-us', destination: '/about/why-choose-us', permanent: true },
      { source: '/our-process', destination: '/about/process', permanent: true },
      { source: '/faq-deck-building', destination: '/faqs', permanent: true },
      { source: '/project-gallery', destination: '/showcase', permanent: true },
      { source: '/contacts', destination: '/contact', permanent: true },
      { source: '/blog-deck-tips', destination: '/blog', permanent: true },
      { source: '/free-estimates', destination: '/contact', permanent: true },
      { source: '/home-2', destination: '/', permanent: true },

      // Services
      { source: '/services/new-decks-installation', destination: '/services/new-decks', permanent: true },
      { source: '/services/outdoor-power-washing', destination: '/services/outdoor-washing', permanent: true },
      { source: '/services/outdoor-power-washing/:path*', destination: '/services/outdoor-washing', permanent: true },
      { source: '/services/gazebos-and-pergolas', destination: '/services/gazebo-pergola', permanent: true },
      { source: '/services/fences', destination: '/services/fence', permanent: true },

      // Location Hubs
      { source: '/top-decks-build-near-you', destination: '/near-you', permanent: true },
      { source: '/deck-builder-in-loudoun-county', destination: '/near-you/loudoun-county', permanent: true },
      { source: '/deck-builder-in-fairfax-county', destination: '/near-you/fairfax-county', permanent: true },
      { source: '/deck-builder-in-prince-william-county', destination: '/near-you/prince-william-county', permanent: true },

      // Major Cities (Catch-all patterns or specific high-traffic)
      { source: '/deck-builder-ashburn', destination: '/near-you/loudoun-county/ashburn', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-ashburn', destination: '/near-you/loudoun-county/ashburn', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-reston', destination: '/near-you/fairfax-county/reston', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-leesburg', destination: '/near-you/loudoun-county/leesburg', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-manassas', destination: '/near-you/prince-william-county/manassas', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-sterling-va', destination: '/near-you/loudoun-county/sterling', permanent: true },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
