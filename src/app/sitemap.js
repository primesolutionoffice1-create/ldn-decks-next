import { getAllCityPaths } from '@/data/cityData';

export default async function sitemap() {
  const baseUrl = "https://www.ldndecks.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/about/why-choose-us",
    "/about/process",
    "/services",
    "/services/new-decks",
    "/services/deck-resurfacing",
    "/services/outdoor-washing",
    "/services/gazebo-pergola",
    "/services/fence",
    "/services/entry-doors",
    "/services/porches",
    "/services/patios",
    "/near-you",
    "/near-you/loudoun-county",
    "/near-you/fairfax-county",
    "/near-you/prince-william-county",
    "/faqs",
    "/contact",
    "/showcase",
    "/blog",
    "/team",
  ];

  const cityPaths = getAllCityPaths().map(path => `/near-you/${path.county}/${path.city}`);

  const allPaths = [...staticPages, ...cityPaths];

  return allPaths.map(path => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
