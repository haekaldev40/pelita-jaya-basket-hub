import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-basketball.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent z-10"></div>
        <img
          src={heroImage}
          alt="Basketball Game"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-orange/30 rotate-45 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-orange/20 rotate-12 animate-float" style={{ animationDelay: "1s" }}></div>
      
      {/* Dot Pattern */}
      <div className="absolute top-40 right-1/4 grid grid-cols-3 gap-2 opacity-40">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-orange"></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-orange/20 backdrop-blur-sm rounded-full border border-orange/30 animate-fade-in">
            <span className="text-orange font-semibold text-sm">🏀 Season 2024/2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-slide-up">
            BANGKITKAN
            <br />
            <span className="text-gradient bg-gradient-to-r from-orange to-orange-light bg-clip-text text-transparent">
              SEMANGAT JUARA
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Bergabunglah dengan keluarga besar Pelita Jaya Basketball Club. 
            Saksikan pertandingan seru dan dukung tim kesayangan Anda!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-orange hover:bg-orange-dark text-white text-base px-8 py-6 hover-glow group"
            >
              Beli Tiket Sekarang
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-navy text-base px-8 py-6"
            >
              Lihat Jadwal
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-orange mb-2">15+</div>
              <div className="text-sm text-white/80 font-medium">Tahun Berdiri</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl md:text-4xl font-black text-orange mb-2">50+</div>
              <div className="text-sm text-white/80 font-medium">Pemain Profesional</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-orange mb-2">10+</div>
              <div className="text-sm text-white/80 font-medium">Juara Nasional</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1 bg-gradient-to-l from-orange to-transparent opacity-30"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1 bg-gradient-to-l from-orange to-transparent opacity-20"></div>
    </section>
  );
};

export default HeroSection;
