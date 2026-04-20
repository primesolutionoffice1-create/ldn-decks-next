import { Outfit } from "next/font/google";
import "./variables.css";
import "./globals.css";
import Script from "next/script";
import StructuredData from "../components/StructuredData";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
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
metadata.verification = {
  google: "KqDI0PPrY8iiZYZI-hk1ikIKVqCtIcTrO3dHSM7U-Eg",
  yandex: "yandex-verification-placeholder",
};
// NOTE: Bing verification requires manual step — see instructions below layout

import { ContactProvider } from "@/context/ContactContext";
import LayoutContent from "./LayoutContent";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link rel="preload" href="/home-page-ldn.png" as="image" fetchpriority="high" />
        {/* Google Tag Manager - dataLayer init */}
                    <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N87MG6QS');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N87MG6QS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
