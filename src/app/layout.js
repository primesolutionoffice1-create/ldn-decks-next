import { Outfit } from "next/font/google";
import "./variables.css";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import FloatingCallButton from "../components/FloatingCallButton";
import StructuredData from "../components/StructuredData";
import Breadcrumbs from "../components/Breadcrumbs";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <StructuredData />
        <Header />
        <Breadcrumbs />
        <main id="main">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingCallButton />
      </body>
    </html>
  );
}
