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

export const metadata = {
  alternates: {
    canonical: "https://ldndecks.com/layout.js"
  },
  metadataBase: new URL("https://ldndecks.com"),
  title: {
    default: "Loudoun Decks | Custom Deck Builder Northern Virginia",
    template: "%s | Loudoun Decks"
  },
  description: "Premier custom deck builder in Northern Virginia. We design and build high-quality composite and wood decks, patios, and outdoor living spaces.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/ldndecks-logo.webp",
    apple: "/ldndecks-logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ldndecks.com",
    siteName: "Loudoun Decks",
    images: [{
      url: "/images/img64.jpeg",
      width: 1200,
      height: 630,
      alt: "Loudoun Decks Custom Project"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Loudoun Decks | Custom Deck Builder",
    description: "Premier custom deck builder in Northern Virginia.",
    images: ["/images/img64.jpeg"],
  }
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
