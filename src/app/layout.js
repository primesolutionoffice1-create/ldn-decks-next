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
    title: "Deck Builder in Loudoun County | Custom Decks | LDN Decks",
    description: "Top-rated deck builder in Loudoun County, VA. Trex Platinum Partner & TimberTech Certified. Custom composite & wood decks from $15k+. Serving Ashburn, Leesburg & all of Northern VA. Free estimate — call (571) 655-7207.",
    image: "/images/img64.jpeg",
});

// Global metadata overrides
metadata.metadataBase = new URL(SITE_URL);
metadata.title = {
  default: "Deck Builder in Loudoun County | Custom Decks | LDN Decks",
    template: "%s | LDN Decks",
};
metadata.icons = {
    icon: "/ldndecks-logo.webp",
    apple: "/ldndecks-logo.webp",
};
metadata.other = {
    "geo.region": "US-VA",
    "geo.placename": "Loudoun County, Virginia",
    "geo.position": "38.8404;-77.4289",
    "ICBM": "38.8404, -77.4289",
};

import { ContactProvider } from "@/context/ContactContext";
import LayoutContent from "./LayoutContent";

export default function RootLayout({ children }) {
    return (
          <html lang="en" className={outfit.variable}>
      <head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
