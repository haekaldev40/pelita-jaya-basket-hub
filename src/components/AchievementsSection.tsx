import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import trophyGold from "@/assets/trophy-gold.png";

const achievements = [
  {
    year: "2017",
    title: "Juara 1",
    competition: "Indonesian Basketball League (IBL)",
    showTrophy: true,
  },
  {
    year: "2024",
    title: "Juara 1",
    competition: "Indonesian Basketball League (IBL)",
    showTrophy: true,
  },
  {
    year: "2025",
    title: "Juara 3",
    competition: "Basketball Champions League Asia – East (BCL Asia-East)",
    showTrophy: false,
  },
];

const AchievementsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Kejuaraan & Partisipasi
          </h2>
          <p className="text-muted-foreground text-lg">
            Prestasi yang telah diraih Pelita Jaya Basketball Club
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative h-full backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-primary/10 rounded-2xl transition-all duration-500" />
                
                <div className="relative z-10">
                  {/* Trophy Image for 1st Place */}
                  {achievement.showTrophy ? (
                    <div className="mb-6 flex justify-center">
                      <img
                        src={trophyGold}
                        alt="Trophy"
                        className="w-32 h-32 object-contain drop-shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                      />
                    </div>
                  ) : (
                    <div className="mb-6 h-32"></div>
                  )}

                  {/* Year Badge */}
                  <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full">
                    <span className="text-2xl font-bold text-white">{achievement.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:via-yellow-200 group-hover:to-yellow-300 transition-all duration-500">
                    {achievement.title}
                  </h3>

                  {/* Competition Name */}
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {achievement.competition}
                  </p>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl group-hover:border-primary/50 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/20 rounded-br-2xl group-hover:border-accent/50 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
