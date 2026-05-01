import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0A0A0A" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
