import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import pemain1 from "@/assets/pemain-1.webp";
import pemain2 from "@/assets/pemain-2.jpeg";
import pemain3 from "@/assets/pemain-3.jpg";

const RosterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const players = [
    {
      id: 1,
      name: "Brandon Jawato",
      number: "21",
      position: "Small Forward",
      height: "198 cm",
      image: pemain1,
    },
    {
      id: 2,
      name: "Reymart Alvarez",
      number: "22",
      position: "Point Guard",
      height: "185 cm",
      image: pemain2,
    },
    {
      id: 3,
      name: "Kenneth Mokon",
      number: "2",
      position: "Power Forward",
      height: "203 cm",
      image: pemain3,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % players.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, players.length]);

  const nextPlayer = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % players.length);
  };

  const prevPlayer = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + players.length) % players.length);
  };

  const goToPlayer = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="roster" className="py-24 bg-gradient-to-b from-white to-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange/10 rounded-full">
            <span className="text-orange font-semibold text-sm">🏀 Tim Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">
            Roster Pemain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kenali para atlet berbakat yang membawa nama Pelita Jaya
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-[600px] flex items-center justify-center">
            {players.map((player, index) => {
              const offset = (index - currentIndex + players.length) % players.length;
              const isActive = offset === 0;
              const isPrev = offset === players.length - 1;
              const isNext = offset === 1;
              
              let translateX = 0;
              let scale = 0.7;
              let zIndex = 0;
              let opacity = 0;

              if (isActive) {
                translateX = 0;
                scale = 1;
                zIndex = 30;
                opacity = 1;
              } else if (isNext) {
                translateX = 70;
                scale = 0.85;
                zIndex = 20;
                opacity = 0.6;
              } else if (isPrev) {
                translateX = -70;
                scale = 0.85;
                zIndex = 20;
                opacity = 0.6;
              } else {
                opacity = 0;
              }

              return (
                <Card
                  key={player.id}
                  className="absolute transition-all duration-700 ease-out border-0 shadow-2xl overflow-hidden"
                  style={{
                    transform: `translateX(${translateX}%) scale(${scale})`,
                    zIndex,
                    opacity,
                    width: "400px",
                  }}
                >
                  <div className="relative">
                    {/* Player Image */}
                    <div className="relative h-[480px] overflow-hidden">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                      
                      {/* Jersey Number */}
                      <div className="absolute top-6 right-6">
                        <div className="text-8xl font-black text-white/20">
                          #{player.number}
                        </div>
                      </div>
                    </div>

                    {/* Player Info */}
                    <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="mb-2">
                        <span className="px-3 py-1 bg-orange rounded-full text-sm font-semibold">
                          {player.position}
                        </span>
                      </div>
                      <h3 className="text-3xl font-black mb-2">{player.name}</h3>
                      <div className="flex items-center gap-4 text-white/80">
                        <span className="text-sm">#{player.number}</span>
                        <span className="text-sm">•</span>
                        <span className="text-sm">{player.height}</span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <Button
              onClick={prevPlayer}
              size="icon"
              className="pointer-events-auto bg-white hover:bg-orange text-navy hover:text-white shadow-lg h-12 w-12 rounded-full"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              onClick={nextPlayer}
              size="icon"
              className="pointer-events-auto bg-white hover:bg-orange text-navy hover:text-white shadow-lg h-12 w-12 rounded-full"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {players.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPlayer(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-orange"
                    : "w-2 bg-navy/30 hover:bg-navy/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View Full Roster Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-navy hover:bg-navy-dark text-white"
          >
            Lihat Roster Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RosterSection;
