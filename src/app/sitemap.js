import { getAllCityPaths } from '@/data/cityData';

export default async function sitemap() {
    const baseUrl = "https://www.ldndecks.com";

  const staticPages = [
    { path: "",                                 priority: 1.00 },
    { path: "/deck-builders-loudoun",           priority: 0.95 },
    { path: "/composite-decks",                priority: 0.90 },
    { path: "/trex-decks",                     priority: 0.90 },
    { path: "/deck-replacement",               priority: 0.90 },
    { path: "/deck-remodeling",                priority: 0.90 },
    { path: "/deck-repair",                    priority: 0.90 },
    { path: "/services",                       priority: 0.85 },
    { path: "/services/new-decks",             priority: 0.85 },
    { path: "/services/deck-resurfacing",      priority: 0.85 },
    { path: "/services/porches",               priority: 0.85 },
    { path: "/services/gazebo-pergola",        priority: 0.85 },
    { path: "/services/patios",                priority: 0.80 },
    { path: "/services/fence",                 priority: 0.75 },
    { path: "/services/outdoor-washing",       priority: 0.70 },
    { path: "/services/entry-doors",           priority: 0.65 },
    { path: "/near-you",                       priority: 0.85 },
    { path: "/near-you/loudoun-county",        priority: 0.85 },
    { path: "/near-you/fairfax-county",        priority: 0.85 },
    { path: "/near-you/prince-william-county", priority: 0.85 },
    { path: "/faqs",                           priority: 0.75 },
    { path: "/showcase",                       priority: 0.75 },
    { path: "/blog",                           priority: 0.70 },
    { path: "/contact",                        priority: 0.70 },
    { path: "/about",                          priority: 0.65 },
    { path: "/about/why-choose-us",            priority: 0.65 },
    { path: "/about/process",                  priority: 0.60 },
    { path: "/team",                           priority: 0.55 },
    { path: "/privacy-policy",                 priority: 0.30 },
    { path: "/terms-of-service",               priority: 0.30 },
      ];

  const cityPaths = getAllCityPaths().map(path => ({
        path: `/near-you/${path.county}/${path.city}`,
        priority: 0.85,
  }));

  const allPages = [...staticPages, ...cityPaths];

  return allPages.map(({ path, priority }) => ({
        url: `${baseUrl}${path}`,
        changeFrequency: path === "" ? "daily" : priority >= 0.85 ? "weekly" : "monthly",
        priority,
        lastModified: new Date().toISOString(),
  }));
}
