import { Outfit } from "next/font/google";
import "./variables.css";
import "./globals.css";
import StructuredData from "../components/StructuredData";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  title: "Loudoun Decks | Custom Deck Builder Northern Virginia",
  description: "Premier custom deck builder in Northern Virginia. We design and build high-quality composite and wood decks, patios, and outdoor living spaces.",
});

// Add extra global settings not covered by buildMetadata if necessary
metadata.metadataBase = new URL(SITE_URL);
metadata.title = {
  default: "Loudoun Decks | Custom Deck Builder Northern Virginia",
  template: "%s | Loudoun Decks"
};
metadata.icons = {
  icon: "/ldndecks-logo.webp",
  apple: "/ldndecks-logo.webp",
};

import { ContactProvider } from "@/context/ContactContext";
import LayoutContent from "./LayoutContent";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <ContactProvider>
          <a href="#main" className="skip-link">Skip to main content</a>
          <StructuredData />
          <LayoutContent>
            {children}
          </LayoutContent>
        </ContactProvider>
      </body>
    </html>
  );
}
