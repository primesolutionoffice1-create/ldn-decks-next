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
      { source: '/get-quote', destination: '/contact', permanent: true },
      { source: '/deck-builder-in-loudoun-county', destination: '/near-you/loudoun-county', permanent: true },
      { source: '/deck-builder-in-fairfax-county', destination: '/near-you/fairfax-county', permanent: true },
      { source: '/deck-builder-in-prince-william-county', destination: '/near-you/prince-william-county', permanent: true },

      // Loudoun County Cities
      { source: '/near-you/ashburn-va', destination: '/near-you/loudoun-county/ashburn', permanent: true },
      { source: '/near-you/ashburn', destination: '/near-you/loudoun-county/ashburn', permanent: true },
      { source: '/near-you/leesburg-va', destination: '/near-you/loudoun-county/leesburg', permanent: true },
      { source: '/near-you/leesburg', destination: '/near-you/loudoun-county/leesburg', permanent: true },
      { source: '/near-you/sterling-va', destination: '/near-you/loudoun-county/sterling', permanent: true },
      { source: '/near-you/sterling', destination: '/near-you/loudoun-county/sterling', permanent: true },
      { source: '/near-you/aldie-va', destination: '/near-you/loudoun-county/aldie', permanent: true },
      { source: '/near-you/aldie', destination: '/near-you/loudoun-county/aldie', permanent: true },
      { source: '/near-you/middleburg-va', destination: '/near-you/loudoun-county/middleburg', permanent: true },
      { source: '/near-you/middleburg', destination: '/near-you/loudoun-county/middleburg', permanent: true },
      { source: '/near-you/round-hill-va', destination: '/near-you/loudoun-county/round-hill', permanent: true },
      { source: '/near-you/round-hill', destination: '/near-you/loudoun-county/round-hill', permanent: true },
      { source: '/near-you/purcellville-va', destination: '/near-you/loudoun-county/purcellville', permanent: true },
      { source: '/near-you/purcellville', destination: '/near-you/loudoun-county/purcellville', permanent: true },

      // Fairfax County Cities
      { source: '/near-you/alexandria-va', destination: '/near-you/fairfax-county/alexandria', permanent: true },
      { source: '/near-you/alexandria', destination: '/near-you/fairfax-county/alexandria', permanent: true },
      { source: '/near-you/fairfax-va', destination: '/near-you/fairfax-county/fairfax', permanent: true },
      { source: '/near-you/fairfax', destination: '/near-you/fairfax-county/fairfax', permanent: true },
      { source: '/near-you/vienna-va', destination: '/near-you/fairfax-county/vienna', permanent: true },
      { source: '/near-you/vienna', destination: '/near-you/fairfax-county/vienna', permanent: true },
      { source: '/near-you/reston-va', destination: '/near-you/fairfax-county/reston', permanent: true },
      { source: '/near-you/reston', destination: '/near-you/fairfax-county/reston', permanent: true },
      { source: '/near-you/herndon-va', destination: '/near-you/fairfax-county/herndon', permanent: true },
      { source: '/near-you/herndon', destination: '/near-you/fairfax-county/herndon', permanent: true },
      { source: '/near-you/mclean-va', destination: '/near-you/fairfax-county/mclean', permanent: true },
      { source: '/near-you/mclean', destination: '/near-you/fairfax-county/mclean', permanent: true },
      { source: '/near-you/centreville-va', destination: '/near-you/fairfax-county/centreville', permanent: true },
      { source: '/near-you/centreville', destination: '/near-you/fairfax-county/centreville', permanent: true },

      // Prince William County Cities
      { source: '/near-you/manassas-va', destination: '/near-you/prince-william-county/manassas', permanent: true },
      { source: '/near-you/manassas', destination: '/near-you/prince-william-county/manassas', permanent: true },
      { source: '/near-you/woodbridge-va', destination: '/near-you/prince-william-county/woodbridge', permanent: true },
      { source: '/near-you/woodbridge', destination: '/near-you/prince-william-county/woodbridge', permanent: true },
      { source: '/near-you/haymarket-va', destination: '/near-you/prince-william-county/haymarket', permanent: true },
      { source: '/near-you/haymarket', destination: '/near-you/prince-william-county/haymarket', permanent: true },
      { source: '/near-you/gainesville-va', destination: '/near-you/prince-william-county/gainesville', permanent: true },
      { source: '/near-you/gainesville', destination: '/near-you/prince-william-county/gainesville', permanent: true },

      // Catch-all patterns for other cities (using dynamic mapping logic isn't possible here, 
      // so we prioritize the high-traffic ones from the screenshot and mapping above)
      { source: '/deck-builder-ashburn', destination: '/near-you/loudoun-county/ashburn', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-ashburn', destination: '/near-you/loudoun-county/ashburn', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-reston', destination: '/near-you/fairfax-county/reston', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-leesburg', destination: '/near-you/loudoun-county/leesburg', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-manassas', destination: '/near-you/prince-william-county/manassas', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-sterling-va', destination: '/near-you/loudoun-county/sterling', permanent: true },
    ];
  },
  async headers() {
    const headers = [];
    
    // Security headers
    headers.push({
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      ],
    });

    // Block indexing on staging / preview deployments
    if (process.env.VERCEL_ENV !== 'production') {
      headers.push({
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      });
    }

    return headers;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
