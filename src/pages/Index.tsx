import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import ScheduleSection from "@/components/ScheduleSection";
import RosterSection from "@/components/RosterSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NewsSection />
      <ScheduleSection />
      <RosterSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
