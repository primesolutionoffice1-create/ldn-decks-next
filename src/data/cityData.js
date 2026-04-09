export const counties = {
  "loudoun-county": {
    name: "Loudoun County",
    cities: ["Ashburn", "Leesburg", "Sterling", "Aldie", "Middleburg", "Round Hill", "Purcellville", "Lovettsville", "Hamilton", "Waterford", "Brambleton", "South Riding", "Stone Ridge", "Broadlands"]
  },
  "fairfax-county": {
    name: "Fairfax County",
    cities: ["Alexandria", "Fairfax", "Vienna", "Reston", "Herndon", "Mclean", "Falls Church", "Annandale", "Burke", "Springfield", "Chantilly", "Centreville", "Oakton", "Great Falls", "Lorton", "Tysons", "West Springfield"]
  },
  "prince-william-county": {
    name: "Prince William County",
    cities: ["Manassas", "Manassas Park", "Woodbridge", "Dumfries", "Quantico", "Haymarket", "Gainesville", "Bristow", "Nokesville", "Lake Ridge", "Montclair", "Triangle"]
  }
};

export const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

// Helper to get all cities for generateStaticParams
export function getAllCityPaths() {
  const paths = [];
  Object.keys(counties).forEach(countySlug => {
    counties[countySlug].cities.forEach(city => {
      paths.push({
        county: countySlug,
        city: slugify(city)
      });
    });
  });
  return paths;
}

// Helper to get city data from slugs
export function getCityData(countySlug, citySlug) {
  const county = counties[countySlug];
  if (!county) return null;
  
  const city = county.cities.find(c => slugify(c) === citySlug);
  if (!city) return null;

  return {
    cityName: city,
    countyName: county.name,
    countySlug: countySlug
  };
}
