import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioGallery from "@/components/PortfolioGallery";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <PortfolioGallery preview />
      <TestimonialsCarousel />
      <ContactForm />
    </>
  );
}
