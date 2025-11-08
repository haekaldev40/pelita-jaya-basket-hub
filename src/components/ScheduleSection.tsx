import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ScheduleSection = () => {
  const matches = [
    {
      id: 1,
      homeTeam: "Pelita Jaya",
      awayTeam: "Satria Muda",
      date: "15 November 2025",
      time: "19:00 WIB",
      venue: "GBK Arena, Jakarta",
      status: "Upcoming",
    },
    {
      id: 2,
      homeTeam: "Pacific Caesar",
      awayTeam: "Pelita Jaya",
      date: "20 November 2025",
      time: "20:00 WIB",
      venue: "BritAma Arena, Jakarta",
      status: "Upcoming",
    },
    {
      id: 3,
      homeTeam: "Pelita Jaya",
      awayTeam: "Prawira Bandung",
      date: "25 November 2025",
      time: "18:30 WIB",
      venue: "GBK Arena, Jakarta",
      status: "Upcoming",
    },
    {
      id: 4,
      homeTeam: "Amartha Hangtuah",
      awayTeam: "Pelita Jaya",
      date: "30 November 2025",
      time: "19:30 WIB",
      venue: "DBL Arena, Surabaya",
      status: "Upcoming",
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
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {matches.map((match, index) => (
            <Card
              key={match.id}
              className="group bg-white/5 backdrop-blur-md border border-white/10 hover:border-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Teams */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center flex-1">
                    <div className={`text-lg font-bold mb-2 ${match.homeTeam === "Pelita Jaya" ? "text-orange" : "text-white"}`}>
                      {match.homeTeam}
                    </div>
                    <div className="text-2xl font-black text-white/50">-</div>
                  </div>
                  
                  <div className="px-4 py-2 bg-orange/20 rounded-lg">
                    <span className="text-orange font-bold text-sm">VS</span>
                  </div>
                  
                  <div className="text-center flex-1">
                    <div className={`text-lg font-bold mb-2 ${match.awayTeam === "Pelita Jaya" ? "text-orange" : "text-white"}`}>
                      {match.awayTeam}
                    </div>
                    <div className="text-2xl font-black text-white/50">-</div>
                  </div>
                </div>

                {/* Match Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-white/80">
                    <Calendar size={18} className="text-orange" />
                    <span className="text-sm">{match.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Clock size={18} className="text-orange" />
                    <span className="text-sm">{match.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin size={18} className="text-orange" />
                    <span className="text-sm">{match.venue}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-orange hover:bg-orange-dark text-white group-hover:shadow-lg group-hover:shadow-orange/30 transition-all">
                  Beli Tiket
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Full Schedule */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-navy"
          >
            Lihat Jadwal Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
