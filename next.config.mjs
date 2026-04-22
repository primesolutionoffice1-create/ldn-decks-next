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

      // Old /top-decks-build-near-you/deck-builder-in-{city} — ALL cities
      // Loudoun County cities
      { source: '/top-decks-build-near-you/deck-builder-in-ashburn', destination: '/near-you/loudoun-county/ashburn', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-leesburg', destination: '/near-you/loudoun-county/leesburg', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-sterling', destination: '/near-you/loudoun-county/sterling', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-sterling-va', destination: '/near-you/loudoun-county/sterling', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-aldie', destination: '/near-you/loudoun-county/aldie', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-middleburg', destination: '/near-you/loudoun-county/middleburg', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-purcellville', destination: '/near-you/loudoun-county/purcellville', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-round-hill', destination: '/near-you/loudoun-county/round-hill', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-brambleton', destination: '/near-you/loudoun-county/brambleton', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-south-riding', destination: '/near-you/loudoun-county/south-riding', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-broadlands', destination: '/near-you/loudoun-county/broadlands', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lovettsville', destination: '/near-you/loudoun-county/lovettsville', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-hamilton', destination: '/near-you/loudoun-county/hamilton', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lansdowne', destination: '/near-you/loudoun-county/lansdowne', permanent: true },

      // Fairfax County cities
      { source: '/top-decks-build-near-you/deck-builder-in-herndon', destination: '/near-you/fairfax-county/herndon', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-reston', destination: '/near-you/fairfax-county/reston', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-fairfax', destination: '/near-you/fairfax-county/fairfax', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-vienna', destination: '/near-you/fairfax-county/vienna', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-mclean', destination: '/near-you/fairfax-county/mclean', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-centreville', destination: '/near-you/fairfax-county/centreville', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-alexandria', destination: '/near-you/fairfax-county/alexandria', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-falls-church', destination: '/near-you/fairfax-county/falls-church', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-burke', destination: '/near-you/fairfax-county/burke', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-springfield', destination: '/near-you/fairfax-county/springfield', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-chantilly', destination: '/near-you/fairfax-county/chantilly', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-oakton', destination: '/near-you/fairfax-county/oakton', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-great-falls', destination: '/near-you/fairfax-county/great-falls', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lorton', destination: '/near-you/fairfax-county/lorton', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-tysons', destination: '/near-you/fairfax-county/tysons', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-annandale', destination: '/near-you/fairfax-county/annandale', permanent: true },

      // Prince William County cities
      { source: '/top-decks-build-near-you/deck-builder-in-manassas', destination: '/near-you/prince-william-county/manassas', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-woodbridge', destination: '/near-you/prince-william-county/woodbridge', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-haymarket', destination: '/near-you/prince-william-county/haymarket', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-gainesville', destination: '/near-you/prince-william-county/gainesville', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-bristow', destination: '/near-you/prince-william-county/bristow', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-dale-city', destination: '/near-you/prince-william-county/dale-city', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-dumfries', destination: '/near-you/prince-william-county/dumfries', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lake-ridge', destination: '/near-you/prince-william-county/lake-ridge', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-occoquan', destination: '/near-you/prince-william-county/occoquan', permanent: true },

      // Arlington County cities
      { source: '/top-decks-build-near-you/deck-builder-in-arlington', destination: '/near-you/arlington-county/arlington', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-rosslyn', destination: '/near-you/arlington-county/rosslyn', permanent: true },
  // Old Showcase Redirects    { source: '/top-decks-build-near-you/deck-builder-in-ballston', destination: '/near-you/arlington-county/ballston', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-clarendon', destination: '/near-you/arlington-county/clarendon', permanent: true },

      // Stafford County cities
      { source: '/top-decks-build-near-you/deck-builder-in-stafford', destination: '/near-you/stafford-county/stafford', permanent: true },

      // Catch-all for any remaining old city URLs not covered above
      { source: '/top-decks-build-near-you/:path*', destination: '/near-you', permanent: true },

      // Old /deck-builder-{city} patterns (without -va suffix)
      { source: '/deck-builder-ashburn', destination: '/near-you/loudoun-county/ashburn', permanent: true },
      { source: '/deck-builder-herndon', destination: '/near-you/fairfax-county/herndon', permanent: true },
      { source: '/deck-builder-leesburg', destination: '/near-you/loudoun-county/leesburg', permanent: true },
      { source: '/deck-builder-reston', destination: '/near-you/fairfax-county/reston', permanent: true },
      { source: '/deck-builder-centreville', destination: '/near-you/fairfax-county/centreville', permanent: true },
      { source: '/deck-builder-manassas', destination: '/near-you/prince-william-county/manassas', permanent: true },

      // Old /decks-build-near-you/ pattern (typo variant without "top-")
      { source: '/decks-build-near-you/:path*', destination: '/near-you', permanent: true },

      // Old Showcase Redirects
      { source: '/deck-projects-showcase/deck-builder-ashburn', destination: '/near-you/loudoun-county/ashburn', permanent: true },
      { source: '/deck-projects-showcase', destination: '/showcase', permanent: true },
      { source: '/deck-projects-showcase/:path*', destination: '/showcase', permanent: true },

              // Legacy WordPress image redirects (broken 404s from old WP upload paths)
      { source: '/wp-content/uploads/2024/09/ldndecks-logo-new-e1731874431860.webp', destination: '/ldndecks-logo.webp', permanent: true },
  { source: '/wp-content/uploads/2024/09/ldndecks-logo-new.png', destination: '/ldndecks-logo.webp', permanent: true },
{ source: '/wp-content/:path*', destination: '/', permanent: true },
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
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    });

    // Block indexing on staging / preview deployments
    // Only apply noindex when we KNOW it's a non-production Vercel env (preview/development)
    // If VERCEL_ENV is undefined (e.g., custom hosting), do NOT block — assume production
    const vercelEnv = process.env.VERCEL_ENV;
    if (vercelEnv && vercelEnv !== 'production') {
      headers.push({
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      });
    }

    // Static asset caching — aggressive caching for images, fonts, CSS, JS
    headers.push({
      source: '/images/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    });
    headers.push({
      source: '/showcase/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    });
    headers.push({
      source: '/team/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=2592000' },
      ],
    });
    headers.push({
      source: '/:path*.webp',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    });

    return headers;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
