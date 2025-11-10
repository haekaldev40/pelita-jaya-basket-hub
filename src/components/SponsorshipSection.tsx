import pelitaAir from "@/assets/sponsor-pelita-air.png";
import redBull from "@/assets/sponsor-redbull.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SponsorshipSection = () => {
  const header = useScrollAnimation();
  
  const sponsors = [
    {
      id: 1,
      name: "Pelita Air",
      logo: pelitaAir,
      tier: "Platinum Sponsor",
    },
    {
      id: 2,
      name: "Red Bull",
      logo: redBull,
      tier: "Official Energy Drink Partner",
    },
    {
      id: 3,
      name: "Nike",
      logo: null,
      tier: "Official Apparel Partner",
    },
    {
      id: 4,
      name: "Gatorade",
      logo: null,
      tier: "Official Sports Drink",
    },
    {
      id: 5,
      name: "Bank Mandiri",
      logo: null,
      tier: "Official Banking Partner",
    },
  ];

  return (
    <section id="sponsors" className="py-24 bg-gradient-to-b from-navy via-navy-dark to-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div 
          ref={header.elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-orange/20 backdrop-blur-sm rounded-full border border-orange/30">
            <span className="text-orange font-semibold text-sm">🤝 Official Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Sponsor Kami
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Terima kasih kepada para sponsor yang mendukung perjalanan Pelita Jaya Basketball Club
          </p>
        </div>

        {/* Sponsors Grid - Logo Only */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-7xl mx-auto items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-32 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:rotate-3">
                {sponsor.logo ? (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain transition-all duration-500 drop-shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.6)] group-hover:brightness-110"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-orange/50 group-hover:shadow-lg group-hover:shadow-orange/30">
                    <span className="text-5xl font-black text-white/30 group-hover:text-orange transition-colors duration-300">
                      {sponsor.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">
              Tertarik Menjadi Sponsor?
            </h3>
            <p className="text-white/70 mb-6">
              Bergabunglah dengan keluarga besar Pelita Jaya Basketball Club dan dukung prestasi olahraga Indonesia
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-orange to-orange-dark text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
