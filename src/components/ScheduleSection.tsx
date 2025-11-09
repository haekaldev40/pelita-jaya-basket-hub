import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import pelitaLogo from "@/assets/pelita-jaya-logo.png";
import satriaMudaLogo from "@/assets/satria-muda-logo.jpg";
import hangTuahLogo from "@/assets/hang-tuah-logo.png";

const ScheduleSection = () => {
  const matches = [
    {
      id: 1,
      homeTeam: "Pelita Jaya",
      homeTeamLogo: pelitaLogo,
      awayTeam: "Satria Muda Pertamina",
      awayTeamLogo: satriaMudaLogo,
      date: "Sabtu, 15 November 2025",
      time: "19:00 WIB",
      venue: "GBK Arena, Jakarta",
      tournament: "IBL All Indonesia 2025",
      gameNumber: "Game 1",
    },
    {
      id: 2,
      homeTeam: "Pacific Caesar",
      homeTeamLogo: null,
      awayTeam: "Pelita Jaya",
      awayTeamLogo: pelitaLogo,
      date: "Rabu, 20 November 2025",
      time: "20:00 WIB",
      venue: "BritAma Arena, Jakarta",
      tournament: "IBL All Indonesia 2025",
      gameNumber: "Game 2",
    },
    {
      id: 3,
      homeTeam: "Pelita Jaya",
      homeTeamLogo: pelitaLogo,
      awayTeam: "Prawira Bandung",
      awayTeamLogo: null,
      date: "Senin, 25 November 2025",
      time: "18:30 WIB",
      venue: "GBK Arena, Jakarta",
      tournament: "IBL All Indonesia 2025",
      gameNumber: "Game 3",
    },
    {
      id: 4,
      homeTeam: "Amartha Hangtuah",
      homeTeamLogo: hangTuahLogo,
      awayTeam: "Pelita Jaya",
      awayTeamLogo: pelitaLogo,
      date: "Sabtu, 30 November 2025",
      time: "19:30 WIB",
      venue: "DBL Arena, Surabaya",
      tournament: "IBL All Indonesia 2025",
      gameNumber: "Game 4",
    },
  ];

  return (
    <section id="schedule" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border-4 border-orange/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-orange/10 rotate-45"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange/20 backdrop-blur-sm rounded-full border border-orange/30">
            <span className="text-orange font-semibold text-sm">📅 Jadwal Pertandingan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Pertandingan Mendatang
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Jangan lewatkan aksi seru tim Pelita Jaya di setiap pertandingan
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {matches.map((match, index) => (
            <Card
              key={match.id}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-orange/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange/30 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Tournament Badge */}
                <div className="bg-gradient-to-r from-orange to-orange-dark py-3 px-6 text-center">
                  <span className="text-white font-bold text-sm uppercase tracking-wide">
                    {match.tournament}
                  </span>
                </div>

                {/* Main Match Display */}
                <div className="p-8">
                  {/* Teams with Logos */}
                  <div className="flex items-center justify-between mb-8">
                    {/* Home Team */}
                    <div className="flex flex-col items-center flex-1 space-y-3">
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center p-4 group-hover:border-orange/50 transition-all duration-300">
                        {match.homeTeamLogo ? (
                          <img 
                            src={match.homeTeamLogo} 
                            alt={match.homeTeam}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="text-3xl font-black text-white/50">
                            {match.homeTeam.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <h3 className={`text-center font-bold text-lg leading-tight max-w-[140px] ${
                        match.homeTeam === "Pelita Jaya" ? "text-orange" : "text-white"
                      }`}>
                        {match.homeTeam}
                      </h3>
                    </div>

                    {/* VS & Score */}
                    <div className="flex flex-col items-center px-6 space-y-3">
                      <div className="text-5xl font-black text-white/30">VS</div>
                      <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <span className="text-white/50 font-bold text-sm">
                          {match.gameNumber}
                        </span>
                      </div>
                    </div>

                    {/* Away Team */}
                    <div className="flex flex-col items-center flex-1 space-y-3">
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center p-4 group-hover:border-orange/50 transition-all duration-300">
                        {match.awayTeamLogo ? (
                          <img 
                            src={match.awayTeamLogo} 
                            alt={match.awayTeam}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="text-3xl font-black text-white/50">
                            {match.awayTeam.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <h3 className={`text-center font-bold text-lg leading-tight max-w-[140px] ${
                        match.awayTeam === "Pelita Jaya" ? "text-orange" : "text-white"
                      }`}>
                        {match.awayTeam}
                      </h3>
                    </div>
                  </div>

                  {/* Match Details */}
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <div className="flex items-start gap-3 text-white">
                      <Calendar size={20} className="text-orange flex-shrink-0 mt-0.5" />
                      <span className="text-base font-medium leading-relaxed">{match.date}</span>
                    </div>
                    <div className="flex items-start gap-3 text-white">
                      <Clock size={20} className="text-orange flex-shrink-0 mt-0.5" />
                      <span className="text-base font-medium leading-relaxed">{match.time}</span>
                    </div>
                    <div className="flex items-start gap-3 text-white">
                      <MapPin size={20} className="text-orange flex-shrink-0 mt-0.5" />
                      <span className="text-base font-medium leading-relaxed">{match.venue}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
