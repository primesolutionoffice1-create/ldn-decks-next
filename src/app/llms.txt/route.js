// llms.txt Standard for AI content discovery
// See: https://llmstxt.org/
export async function GET() {
  const content = `# Loudoun Decks (LDN Decks)

> Top-rated custom deck builder in Northern Virginia. Trex Platinum Partner and TimberTech Certified Installer serving Loudoun, Fairfax, Prince William, Arlington & Stafford counties.

## Company Overview
- **Business**: Loudoun Decks (LDN Decks)
- **Type**: Licensed & insured deck building contractor
- **Location**: Northern Virginia (two offices: Centreville, VA & Manassas, VA)
- **Phone**: (571) 655-7207
- **Website**: https://www.ldndecks.com
- **Rating**: 5.0/5 stars from 41+ Google reviews
- **Certifications**: Trex Platinum Partner, TimberTech Certified Installer

## Services
- Custom composite deck building (Trex, TimberTech AZEK)
- Pressure-treated wood deck construction
- Deck replacement and resurfacing
- Deck repair and restoration
- Screened porch construction
- Pergola and gazebo building
- Outdoor kitchens
- Patio installation (pavers, stamped concrete, flagstone)
- Deck lighting and railings (cable, composite, aluminum)
- Fence building and cleaning
- Pressure washing (decks, siding, concrete)
- Fire pit construction

## Service Areas
Loudoun County: Ashburn, Leesburg, Sterling, Aldie, Brambleton, Broadlands, Purcellville, South Riding, Lovettsville, Hamilton, Hillsboro, Middleburg, Round Hill, Waterford, Lansdowne
Fairfax County: Reston, Herndon, Fairfax, Centreville, Vienna, McLean, Great Falls, Chantilly, Burke, Springfield, Falls Church, Oakton, Tysons, Alexandria, Lorton, Annandale
Prince William County: Manassas, Woodbridge, Haymarket, Gainesville, Bristow, Dale City, Dumfries, Lake Ridge, Nokesville, Occoquan
Arlington County: Arlington, Crystal City, Ballston, Clarendon, Rosslyn, Pentagon City, Shirlington
Stafford County: Stafford, Aquia Harbour, Falmouth, Garrisonville

## Pricing (2026, Northern Virginia)
- Pressure-treated wood deck: $18–$35 per sqft installed
- Cedar deck: $25–$45 per sqft installed
- Trex Enhance composite: $30–$50 per sqft installed
- Trex Transcend composite: $45–$65 per sqft installed
- TimberTech AZEK: $50–$75 per sqft installed
- Typical 300–500 sqft project: $15,000–$45,000
- Northern Virginia pricing runs 25–35% above state average

## Key Pages
- [Deck Cost Guide](https://www.ldndecks.com/how-much-does-a-deck-cost-northern-virginia): Detailed 2026 pricing with material comparisons
- [Composite Deck Cost Guide](https://www.ldndecks.com/composite-deck-cost-northern-virginia): Brand-by-brand composite pricing (Trex, TimberTech, AZEK, Fiberon)
- [Deck Cost Calculator](https://www.ldndecks.com/deck-cost-calculator): Interactive calculator with instant estimates
- [Trex vs TimberTech vs AZEK](https://www.ldndecks.com/trex-vs-timbertech-vs-azek): Brand comparison guide
- [Composite vs Wood](https://www.ldndecks.com/composite-deck-vs-wood-deck-virginia): Material decision guide
- [Northern Virginia Deck Building Guide](https://www.ldndecks.com/northern-virginia-deck-building-guide): Complete building guide
- [Services](https://www.ldndecks.com/services): All services offered
- [Areas We Serve](https://www.ldndecks.com/areas-we-serve): Full service area map
- [Reviews](https://www.ldndecks.com/reviews): Customer testimonials
- [FAQs](https://www.ldndecks.com/faqs): Frequently asked questions
- [Showcase](https://www.ldndecks.com/showcase): Project gallery
- [Before & After](https://www.ldndecks.com/before-and-after): Real deck transformations with costs, materials, and timelines
- [Contact](https://www.ldndecks.com/contact): Free estimate request
- [Screened Porch Cost](https://www.ldndecks.com/screened-porch-cost-northern-virginia): Screened porch pricing guide
- [How Long Does a Composite Deck Last](https://www.ldndecks.com/how-long-does-a-composite-deck-last): Lifespan by brand
- [Deck ROI & Home Value](https://www.ldndecks.com/does-a-deck-add-value-to-your-home): Resale value data
- [HOA Deck Rules](https://www.ldndecks.com/hoa-deck-rules-northern-virginia): HOA approval guide
- [Deck Permits Loudoun County](https://www.ldndecks.com/deck-permit-loudoun-county-virginia): Loudoun County permit guide with LOLA portal, costs, setbacks
- [Deck Permits Fairfax County](https://www.ldndecks.com/deck-permit-fairfax-county-virginia): Fairfax County permit requirements
- [How to Choose a Deck Builder](https://www.ldndecks.com/how-to-choose-a-deck-builder-northern-virginia): 10 questions + red flags
- [Deck Maintenance Checklist](https://www.ldndecks.com/deck-maintenance-checklist-virginia): Seasonal maintenance guide
- [Blog](https://www.ldndecks.com/blog): Expert articles on deck building
- [Certifications & Licenses](https://www.ldndecks.com/about/certifications-and-licenses): Credentials and verification
- [Our Team](https://www.ldndecks.com/team): Meet the team behind Loudoun Decks

## Detailed Content
For full extractable content, see: https://www.ldndecks.com/llms-full.txt
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
