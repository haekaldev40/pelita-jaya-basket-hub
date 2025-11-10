import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import ScheduleSection from "@/components/ScheduleSection";
import RosterSection from "@/components/RosterSection";
import AchievementsSection from "@/components/AchievementsSection";
import GallerySection from "@/components/GallerySection";
import SponsorshipSection from "@/components/SponsorshipSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NewsSection />
      <ScheduleSection />
      <RosterSection />
      <AchievementsSection />
      <GallerySection />
      <SponsorshipSection />
      <Footer />
    </div>
  );
};

export default Index;
