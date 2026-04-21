import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';
import ContactHome from '@/components/ContactHome';

export const metadata = buildMetadata({
  path: '/deck-cost-calculator',
  title: 'Deck Cost Calculator | Northern Virginia 2026 Prices | Loudoun Decks',
  description: 'Free interactive deck cost calculator for Northern Virginia. Get instant estimates by material, size, and add-ons. Based on 200+ real projects. 2026 pricing.',
});

export default function Layout({ children }) {
  return (
    <>
      <Breadcrumbs />
      {children}
      <RelatedGuides currentPath="/deck-cost-calculator" />
      <ContactHome />
    </>
  );
}
