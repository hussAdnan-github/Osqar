import AboutUsSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";



export default function Home() {
  return (
    <main dir="rtl"> {/* Set direction for the entire page */}
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      
      <ClientsSection />
      <PortfolioSection />

      <FooterSection />
      {/* Other sections will go here */}
    </main>
  );
}