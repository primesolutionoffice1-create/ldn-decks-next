import styles from './ServiceAreasGrid.module.css';

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--site-color)', marginRight: '8px' }}>
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
  </svg>
);

const areas = [
  {
    county: "Loudoun County",
    cities: ["Ashburn", "Leesburg", "Sterling", "Aldie", "Middleburg", "Round Hill", "Purcellville", "Lovettsville", "Hamilton", "Waterford", "Brambleton", "South Riding", "Stone Ridge", "Broadlands"]
  },
  {
    county: "Fairfax County",
    cities: ["Alexandria", "Fairfax", "Vienna", "Reston", "Herndon", "Mclean", "Falls Church", "Annandale", "Burke", "Springfield", "Chantilly", "Centreville", "Oakton", "Great Falls", "Lorton", "Tysons", "West Springfield"]
  },
  {
    county: "Prince William County",
    cities: ["Manassas", "Manassas Park", "Woodbridge", "Dumfries", "Quantico", "Haymarket", "Gainesville", "Bristow", "Nokesville", "Lake Ridge", "Montclair", "Triangle"]
  }
];

export default function ServiceAreasGrid() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {areas.map((area, idx) => (
            <div key={idx} className={styles.column}>
              <h3 className={styles.countyTitle}>{area.county}</h3>
              <ul className={styles.cityList}>
                {area.cities.map((city, cIdx) => (
                  <li key={cIdx}>
                    <LocationIcon />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
