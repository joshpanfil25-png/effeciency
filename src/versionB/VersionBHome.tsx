// Version B — Lia's Lovable homepage, reproduced faithfully.
// Everything renders inside .version-b-root so her teal/navy/Playfair tokens
// (which share variable names with Version A) stay fully scoped to this subtree.
import Navbar from "@/versionB/components/Navbar";
import HeroSection from "@/versionB/components/HeroSection";
import AboutSection from "@/versionB/components/AboutSection";
import ServicesSection from "@/versionB/components/ServicesSection";
import TestimonialsSection from "@/versionB/components/TestimonialsSection";
import TeamSection from "@/versionB/components/TeamSection";
import ContactSection from "@/versionB/components/ContactSection";
import Footer from "@/versionB/components/Footer";

export default function VersionBHome() {
  return (
    <div className="version-b-root">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
