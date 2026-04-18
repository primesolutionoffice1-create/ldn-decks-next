import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HandCraftedDecks from "@/components/HandCraftedDecks";
import Introduction from "@/components/Introduction";
import PromoModal from "@/components/PromoModal";
import HowItWorks from "@/components/HowItWorks";
import MaterialPartners from "@/components/MaterialPartners";
import ServicesHome from "@/components/ServicesHome";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustLogos from "@/components/TrustLogos";
import ContactMap from "@/components/ContactMap";
import ContactHome from "@/components/ContactHome";
import styles from "./page.module.css";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
    path: "/",
    title: "Deck Builder in Loudoun County | Custom Decks | LDN Decks",
    description: "Top-rated deck builder in Loudoun County, VA. Trex Platinum Partner & TimberTech Certified. Custom composite & wood decks from $15k+. Serving Ashburn, Leesburg & Northern VA. Free estimate — (571) 655-7207.",
    image: "/images/img64.jpeg",
});

export default function Home() {
    return (
          <main className={styles.main}>
      <PromoModal />
            <Hero />
            <Features />
            <MaterialPartners />
            <Introduction />
            <HowItWorks />
            <HandCraftedDecks />
            <ServicesHome />
            <Testimonials />
            <FAQ />
            <TrustLogos />
            <ContactMap />
            <ContactHome />
      </main>
    );
}
