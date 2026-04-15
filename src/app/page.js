import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HandCraftedDecks from "@/components/HandCraftedDecks";
import Introduction from "@/components/Introduction";
import PromoModal from "@/components/PromoModal";
import ServicesHome from "@/components/ServicesHome";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustLogos from "@/components/TrustLogos";
import ContactHome from "@/components/ContactHome";
import styles from "./page.module.css";

export const metadata = {
  description: "Premier custom deck builder in Northern Virginia. We design and install high-quality composite and wood decks, patios, and outdoor living spaces.",
  alternates: {
    canonical: "https://ldndecks.com"
  }
};

export default function Home() {
  return (
    <main className={styles.main}>
      <PromoModal />
      <Hero />
      <Features />
      <Introduction />
      <HandCraftedDecks />
      <ServicesHome />
      <Testimonials />
      <FAQ />
      <TrustLogos />
      <ContactHome />
    </main>
  );
}
