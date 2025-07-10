import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import KeyFeatures from "@/components/key-features";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import IntegralReformsSection from "@/components/integral-reforms-section";
import VirtualTourDemo from "@/components/virtual-tour-demo";
import InvestmentOpportunities from "@/components/investment-opportunities";
import UniversityPartnerships from "@/components/university-partnerships";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <KeyFeatures />
      <AboutSection />
      <ServicesSection />
      <IntegralReformsSection />
      <VirtualTourDemo />
      <InvestmentOpportunities />
      <UniversityPartnerships />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
