import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MangoVarietiesSection from "@/components/MangoVarietiesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import JourneySection from "@/components/JourneySection";
import HowToOrderSection from "@/components/HowToOrderSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MangoVarietiesSection />
        <WhyChooseSection />
        <JourneySection />
        <HowToOrderSection />
        <GallerySection />
        <AboutSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
