import { getAllCityPaths } from '@/data/cityData';
import { SITE_URL } from '@/lib/seo';

// Tiered lastModified dates - avoids identical timestamps that Google discounts.
// Tier 1 (homepage, top service pages): most recent update
// Tier 2 (city landing pages, county hubs): last significant content update
// Tier 3 (secondary service pages, blog, contact): stable pages
// Tier 4 (legal, team): rarely change
const TIER1 = "2026-04-18";
const TIER2 = "2026-04-10";
const TIER3 = "2026-03-20";
const TIER4 = "2026-01-10";

export default async function sitemap() {
                const baseUrl = SITE_URL;

        const staticPages = [
                // Tier 1 - Homepage & top commercial pages
                { path: "",                              priority: 1.00, lastMod: TIER1, freq: "daily" },
                { path: "/deck-builders-loudoun",        priority: 0.95, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-ashburn-va",      priority: 0.92, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-leesburg-va",     priority: 0.92, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-reston-va",       priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-design-ideas-northern-virginia-2026", priority: 0.92, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-repair-loudoun-county",             priority: 0.92, lastMod: TIER1, freq: "weekly" },

                // Tier 2 - Core service pages
                { path: "/composite-decks",              priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/trex-decks",                   priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/deck-replacement",             priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/deck-remodeling",              priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/deck-repair",                  priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/services",                     priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/services/new-decks",           priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/services/deck-resurfacing",    priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/services/porches",             priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/services/porches/front-porch", priority: 0.80, lastMod: TIER2, freq: "monthly" },
                { path: "/services/porches/open-porch",  priority: 0.80, lastMod: TIER2, freq: "monthly" },
                { path: "/services/porches/screened-porch", priority: 0.80, lastMod: TIER2, freq: "monthly" },
                { path: "/services/gazebo-pergola",      priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/services/deck-maintenance",    priority: 0.80, lastMod: TIER2, freq: "monthly" },
                { path: "/services/deck-inspection",     priority: 0.80, lastMod: TIER2, freq: "monthly" },
                { path: "/near-you",                     priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/near-you/loudoun-county",      priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/near-you/fairfax-county",      priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/near-you/prince-william-county", priority: 0.85, lastMod: TIER2, freq: "weekly" },

                // Tier 3 - Secondary & support pages
                { path: "/services/patios",              priority: 0.80, lastMod: TIER3, freq: "monthly" },
                { path: "/services/fence",               priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/services/fence-cleaning",      priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/services/deck-washing",        priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/services/deck-replacement",    priority: 0.80, lastMod: TIER3, freq: "monthly" },
                { path: "/services/concrete-washing",    priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/services/outdoor-washing",     priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/services/house-siding-washing", priority: 0.65, lastMod: TIER3, freq: "monthly" },
                { path: "/services/fire-pits",           priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/services/trex-railings",       priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/services/trex-calm-shell",     priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/services/under-deck-patios",   priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/services/windows",             priority: 0.65, lastMod: TIER3, freq: "monthly" },
                { path: "/services/entry-doors",         priority: 0.65, lastMod: TIER3, freq: "monthly" },
                { path: "/faqs",                         priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/showcase",                     priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/blog",                         priority: 0.70, lastMod: TIER3, freq: "weekly" },
                { path: "/contact",                      priority: 0.70, lastMod: TIER3, freq: "monthly" },

                // Tier 1.5 - High-intent keyword/content pages (new)
                { path: "/how-much-does-a-deck-cost-northern-virginia", priority: 0.95, lastMod: TIER1, freq: "weekly" },
                { path: "/trex-vs-timbertech-vs-azek",                 priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/screened-porch-cost-northern-virginia",       priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/composite-deck-vs-wood-deck-virginia",       priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/does-a-deck-add-value-to-your-home",         priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/hoa-deck-rules-northern-virginia",           priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-vs-patio-which-is-right",               priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/best-time-to-build-a-deck-northern-virginia", priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/how-to-choose-a-deck-builder-northern-virginia", priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/how-long-does-a-composite-deck-last",        priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-permit-fairfax-county-virginia",        priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-mclean-va",                     priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/outdoor-kitchen-builder-northern-virginia",   priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-staining-northern-virginia",            priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-financing-northern-virginia",           priority: 0.80, lastMod: TIER1, freq: "weekly" },

                // Tier 4 - Evergreen / rarely changes
                { path: "/about",                        priority: 0.65, lastMod: TIER4, freq: "monthly" },
                { path: "/about/why-choose-us",          priority: 0.65, lastMod: TIER4, freq: "monthly" },
                { path: "/about/process",                priority: 0.60, lastMod: TIER4, freq: "monthly" },
                { path: "/team",                         priority: 0.55, lastMod: TIER4, freq: "monthly" },
                { path: "/privacy-policy",               priority: 0.30, lastMod: TIER4, freq: "yearly" },
                { path: "/terms-of-service",             priority: 0.30, lastMod: TIER4, freq: "yearly" },
        ];

        const cityPaths = getAllCityPaths().map(path => ({
                path: `/near-you/${path.county}/${path.city}`,
                priority: 0.80,
                lastMod: TIER2,
                freq: "monthly",
        }));

        const allPages = [...staticPages, ...cityPaths];

        return allPages.map(({ path, priority, lastMod, freq }) => ({
                url: `${baseUrl}${path}`,
                changeFrequency: freq,
                priority,
                lastModified: lastMod,
        }));
}
