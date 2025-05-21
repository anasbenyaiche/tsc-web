import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ERP_Section from "@/components/home/ERP_Section";
import TeamSection from "@/components/home/TeamSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ALTAQA - Solutions de Digitalisation et Services Professionnels</title>
        <meta 
          name="description" 
          content="ALTAQA vous aide à prospérer dans l'ère numérique en transformant vos opérations traditionnelles en processus efficaces et innovants."
        />
      </Helmet>
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ERP_Section />
      <TeamSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default Home;
