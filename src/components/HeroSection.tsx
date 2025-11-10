import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-team.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const badge = useScrollAnimation();
  const title = useScrollAnimation();
  const description = useScrollAnimation();
  const buttons = useScrollAnimation();
  const stats = useScrollAnimation();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/60 to-orange/25 z-10"></div>
        <img
          src={heroImage}
          alt="Pelita Jaya Basketball Team"
          className="w-full h-full object-cover object-center scale-105"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />
      </div>

      {/* Glassmorphism Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl rotate-45 animate-float"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-orange/10 backdrop-blur-md border border-orange/20 rounded-3xl rotate-12 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-orange/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-tl from-navy/30 to-transparent rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <div 
            ref={badge.elementRef}
            className={`inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg transition-all duration-1000 ${
              badge.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-white font-semibold text-sm tracking-wide">🏀 Season 2024/2025</span>
          </div>
          
          <h1 
            ref={title.elementRef}
            className={`text-5xl md:text-7xl font-black text-white mb-6 leading-tight transition-all duration-1000 delay-100 ${
              title.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            BANGKITKAN
            <br />
            <span className="text-gradient bg-gradient-to-r from-orange to-orange-light bg-clip-text text-transparent">
              SEMANGAT JUARA
            </span>
          </h1>
          
          <p 
            ref={description.elementRef}
            className={`text-lg md:text-xl text-white/90 mb-8 max-w-2xl transition-all duration-1000 delay-200 ${
              description.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Bergabunglah dengan keluarga besar Pelita Jaya Basketball Club. 
            Saksikan pertandingan seru dan dukung tim kesayangan Anda!
          </p>
          
          <div 
            ref={buttons.elementRef}
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
              buttons.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange to-orange-light hover:from-orange-dark hover:to-orange text-white text-base px-8 py-6 hover-glow group shadow-xl"
            >
              Beli Tiket Sekarang
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white hover:text-navy text-base px-8 py-6 shadow-xl transition-all"
            >
              Lihat Jadwal
            </Button>
          </div>

          {/* Stats with Glassmorphism */}
          <div 
            ref={stats.elementRef}
            className={`grid grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-400 ${
              stats.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-center p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
              <div className="text-3xl md:text-4xl font-black text-orange mb-2">15+</div>
              <div className="text-sm text-white/90 font-medium">Tahun Berdiri</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
              <div className="text-3xl md:text-4xl font-black text-orange mb-2">50+</div>
              <div className="text-sm text-white/90 font-medium">Pemain Profesional</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
              <div className="text-3xl md:text-4xl font-black text-orange mb-2">10+</div>
              <div className="text-sm text-white/90 font-medium">Juara Nasional</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Lines */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1 bg-gradient-to-l from-orange via-orange/50 to-transparent opacity-40 shadow-glow"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1 bg-gradient-to-l from-white/60 to-transparent opacity-30"></div>
    </section>
  );
};

export default HeroSection;
