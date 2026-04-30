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
      { source: '/the-ultimate-deck-building-guide', destination: '/blog', permanent: true },

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
      { source: '/near-you/ashburn-va', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/near-you/ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/near-you/leesburg-va', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/near-you/leesburg', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/near-you/sterling-va', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/near-you/sterling', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/near-you/aldie-va', destination: '/near-you/loudoun-county/aldie', permanent: true },
      { source: '/near-you/aldie', destination: '/near-you/loudoun-county/aldie', permanent: true },
      { source: '/near-you/middleburg-va', destination: '/near-you/loudoun-county/middleburg', permanent: true },
      { source: '/near-you/middleburg', destination: '/near-you/loudoun-county/middleburg', permanent: true },
      { source: '/near-you/round-hill-va', destination: '/near-you/loudoun-county/round-hill', permanent: true },
      { source: '/near-you/round-hill', destination: '/near-you/loudoun-county/round-hill', permanent: true },
      { source: '/near-you/purcellville-va', destination: '/deck-builder-purcellville-va', permanent: true },
      { source: '/near-you/purcellville', destination: '/deck-builder-purcellville-va', permanent: true },

      // Fairfax County Cities
      { source: '/near-you/alexandria-va', destination: '/deck-builder-alexandria-va', permanent: true },
      { source: '/near-you/alexandria', destination: '/deck-builder-alexandria-va', permanent: true },
      { source: '/near-you/fairfax-va', destination: '/deck-builder-fairfax-va', permanent: true },
      { source: '/near-you/fairfax', destination: '/deck-builder-fairfax-va', permanent: true },
      { source: '/near-you/vienna-va', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/near-you/vienna', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/near-you/reston-va', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/near-you/reston', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/near-you/herndon-va', destination: '/deck-builder-herndon-va', permanent: true },
      { source: '/near-you/herndon', destination: '/deck-builder-herndon-va', permanent: true },
      { source: '/near-you/mclean-va', destination: '/deck-builder-mclean-va', permanent: true },
      { source: '/near-you/mclean', destination: '/deck-builder-mclean-va', permanent: true },
      { source: '/near-you/centreville-va', destination: '/deck-builder-centreville-va', permanent: true },
      { source: '/near-you/centreville', destination: '/deck-builder-centreville-va', permanent: true },

      // Prince William County Cities
      { source: '/near-you/manassas-va', destination: '/deck-builder-manassas-va', permanent: true },
      { source: '/near-you/manassas', destination: '/deck-builder-manassas-va', permanent: true },
      { source: '/near-you/woodbridge-va', destination: '/deck-builder-woodbridge-va', permanent: true },
      { source: '/near-you/woodbridge', destination: '/deck-builder-woodbridge-va', permanent: true },
      { source: '/near-you/haymarket-va', destination: '/deck-builder-haymarket-va', permanent: true },
      { source: '/near-you/haymarket', destination: '/deck-builder-haymarket-va', permanent: true },
      { source: '/near-you/gainesville-va', destination: '/deck-builder-gainesville-va', permanent: true },
      { source: '/near-you/gainesville', destination: '/deck-builder-gainesville-va', permanent: true },

      // 301 from /near-you/[county]/[city] → /deck-builder-[city]-va (canonical)
      { source: '/near-you/loudoun-county/ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/near-you/loudoun-county/leesburg', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/near-you/loudoun-county/sterling', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/near-you/loudoun-county/purcellville', destination: '/deck-builder-purcellville-va', permanent: true },
      { source: '/near-you/loudoun-county/brambleton', destination: '/deck-builder-brambleton-va', permanent: true },
      { source: '/near-you/loudoun-county/south-riding', destination: '/deck-builder-south-riding-va', permanent: true },
      { source: '/near-you/fairfax-county/alexandria', destination: '/deck-builder-alexandria-va', permanent: true },
      { source: '/near-you/fairfax-county/fairfax', destination: '/deck-builder-fairfax-va', permanent: true },
      { source: '/near-you/fairfax-county/vienna', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/near-you/fairfax-county/reston', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/near-you/fairfax-county/herndon', destination: '/deck-builder-herndon-va', permanent: true },
      { source: '/near-you/fairfax-county/mclean', destination: '/deck-builder-mclean-va', permanent: true },
      { source: '/near-you/fairfax-county/centreville', destination: '/deck-builder-centreville-va', permanent: true },
      { source: '/near-you/fairfax-county/chantilly', destination: '/deck-builder-chantilly-va', permanent: true },
      { source: '/near-you/fairfax-county/falls-church', destination: '/deck-builder-falls-church-va', permanent: true },
      { source: '/near-you/fairfax-county/burke', destination: '/deck-builder-burke-va', permanent: true },
      { source: '/near-you/fairfax-county/springfield', destination: '/deck-builder-springfield-va', permanent: true },
      { source: '/near-you/fairfax-county/oakton', destination: '/deck-builder-oakton-va', permanent: true },
      { source: '/near-you/fairfax-county/great-falls', destination: '/deck-builder-great-falls-va', permanent: true },
      { source: '/near-you/fairfax-county/lorton', destination: '/deck-builder-lorton-va', permanent: true },
      { source: '/near-you/fairfax-county/tysons', destination: '/deck-builder-tysons-va', permanent: true },
      { source: '/near-you/prince-william-county/manassas', destination: '/deck-builder-manassas-va', permanent: true },
      { source: '/near-you/prince-william-county/woodbridge', destination: '/deck-builder-woodbridge-va', permanent: true },
      { source: '/near-you/prince-william-county/haymarket', destination: '/deck-builder-haymarket-va', permanent: true },
      { source: '/near-you/prince-william-county/gainesville', destination: '/deck-builder-gainesville-va', permanent: true },
      { source: '/near-you/prince-william-county/bristow', destination: '/deck-builder-bristow-va', permanent: true },
      { source: '/near-you/arlington-county/arlington', destination: '/deck-builder-arlington-va', permanent: true },
      { source: '/near-you/stafford-county/stafford', destination: '/deck-builder-stafford-va', permanent: true },

      // Old /top-decks-build-near-you/deck-builder-in-{city} — ALL cities
      // Loudoun County cities
      { source: '/top-decks-build-near-you/deck-builder-in-ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-leesburg', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-sterling', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-sterling-va', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-aldie', destination: '/near-you/loudoun-county/aldie', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-middleburg', destination: '/near-you/loudoun-county/middleburg', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-purcellville', destination: '/deck-builder-purcellville-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-round-hill', destination: '/near-you/loudoun-county/round-hill', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-brambleton', destination: '/deck-builder-brambleton-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-south-riding', destination: '/deck-builder-south-riding-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-broadlands', destination: '/near-you/loudoun-county/broadlands', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lovettsville', destination: '/near-you/loudoun-county/lovettsville', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-hamilton', destination: '/near-you/loudoun-county/hamilton', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lansdowne', destination: '/near-you/loudoun-county/lansdowne', permanent: true },

      // Fairfax County cities
      { source: '/top-decks-build-near-you/deck-builder-in-herndon', destination: '/deck-builder-herndon-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-reston', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-fairfax', destination: '/deck-builder-fairfax-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-vienna', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-mclean', destination: '/deck-builder-mclean-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-centreville', destination: '/deck-builder-centreville-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-alexandria', destination: '/deck-builder-alexandria-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-falls-church', destination: '/deck-builder-falls-church-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-burke', destination: '/deck-builder-burke-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-springfield', destination: '/deck-builder-springfield-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-chantilly', destination: '/deck-builder-chantilly-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-oakton', destination: '/deck-builder-oakton-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-great-falls', destination: '/deck-builder-great-falls-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lorton', destination: '/deck-builder-lorton-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-tysons', destination: '/deck-builder-tysons-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-annandale', destination: '/near-you/fairfax-county/annandale', permanent: true },

      // Prince William County cities
      { source: '/top-decks-build-near-you/deck-builder-in-manassas', destination: '/deck-builder-manassas-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-woodbridge', destination: '/deck-builder-woodbridge-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-haymarket', destination: '/deck-builder-haymarket-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-gainesville', destination: '/deck-builder-gainesville-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-bristow', destination: '/deck-builder-bristow-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-dale-city', destination: '/near-you/prince-william-county/dale-city', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-dumfries', destination: '/near-you/prince-william-county/dumfries', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lake-ridge', destination: '/near-you/prince-william-county/lake-ridge', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-occoquan', destination: '/near-you/prince-william-county/occoquan', permanent: true },

      // Arlington County cities
      { source: '/top-decks-build-near-you/deck-builder-in-arlington', destination: '/deck-builder-arlington-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-rosslyn', destination: '/near-you/arlington-county/rosslyn', permanent: true },
  // Old Showcase Redirects    { source: '/top-decks-build-near-you/deck-builder-in-ballston', destination: '/near-you/arlington-county/ballston', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-clarendon', destination: '/near-you/arlington-county/clarendon', permanent: true },

      // Stafford County cities
      { source: '/top-decks-build-near-you/deck-builder-in-stafford', destination: '/deck-builder-stafford-va', permanent: true },

      // Catch-all for any remaining old city URLs not covered above
      { source: '/top-decks-build-near-you/:path*', destination: '/near-you', permanent: true },

      // Old /deck-builder-{city} patterns (without -va suffix)
      { source: '/deck-builder-ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/deck-builder-herndon', destination: '/deck-builder-herndon-va', permanent: true },
      { source: '/deck-builder-leesburg', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/deck-builder-reston', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/deck-builder-centreville', destination: '/deck-builder-centreville-va', permanent: true },
      { source: '/deck-builder-manassas', destination: '/deck-builder-manassas-va', permanent: true },

      // Old /decks-build-near-you/ pattern (typo variant without "top-")
      { source: '/decks-build-near-you/:path*', destination: '/near-you', permanent: true },

      // Old Showcase Redirects
      { source: '/deck-projects-showcase/deck-builder-ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/deck-projects-showcase', destination: '/showcase', permanent: true },
      { source: '/deck-projects-showcase/:path*', destination: '/showcase', permanent: true },

      // Major City Page Consolidation (Redirect dynamic to static SEO-optimized)
      { source: '/near-you/loudoun-county/ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/near-you/loudoun-county/leesburg', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/near-you/fairfax-county/vienna', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/near-you/fairfax-county/mclean', destination: '/deck-builder-mclean-va', permanent: true },
      { source: '/near-you/prince-william-county/woodbridge', destination: '/deck-builder-woodbridge-va', permanent: true },
      { source: '/near-you/fairfax-county/chantilly', destination: '/deck-builder-chantilly-va', permanent: true },

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
