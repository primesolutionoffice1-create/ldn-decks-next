import React from 'react';
import styles from './ServiceAreasGrid.module.css';

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
                  <li key={cIdx}>{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
