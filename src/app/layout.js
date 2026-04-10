import { Outfit } from "next/font/google";
import "./variables.css";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import StructuredData from "../components/StructuredData";
import Breadcrumbs from "../components/Breadcrumbs";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ldndecks.com"),
  title: {
    default: "Loudoun Decks | Custom Deck Builder Northern Virginia",
    template: "%s | Loudoun Decks"
  },
  description: "Premier custom deck builder in Northern Virginia. We design and build high-quality composite and wood decks, patios, and outdoor living spaces.",
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
      url: "/main-hero.jpeg", // Using a fallback high-quality hero image
      width: 1200,
      height: 630,
      alt: "Loudoun Decks Custom Project"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Loudoun Decks | Custom Deck Builder",
    description: "Premier custom deck builder in Northern Virginia.",
    images: ["/main-hero.jpeg"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <StructuredData />
        <Header />
        <Breadcrumbs />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
