import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Introduction from "@/components/Introduction";
import ServicesHome from "@/components/ServicesHome";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactHome from "@/components/ContactHome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Features />
      <Introduction />
      <ServicesHome />
      <Testimonials />
      <FAQ />
      <ContactHome />
    </main>
  );
}
