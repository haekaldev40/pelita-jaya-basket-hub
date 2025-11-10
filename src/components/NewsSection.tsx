import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NewsSection = () => {
  const header = useScrollAnimation();
  
  const news = [
    {
      id: 1,
      title: "Pelita Jaya Raih Kemenangan Telak 98-76",
      excerpt: "Tim berhasil menunjukkan performa terbaik dalam pertandingan melawan rival tradisional dengan skor akhir yang memuaskan.",
      date: "8 November 2025",
      category: "Hasil Pertandingan",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Rekrutmen Pemain Muda Berbakat Musim Ini",
      excerpt: "Pelita Jaya membuka kesempatan untuk pemain muda yang ingin bergabung dalam program pengembangan talenta basket.",
      date: "5 November 2025",
      category: "Rekrutmen",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Persiapan Intensif Jelang Playoff Nasional",
      excerpt: "Tim melakukan training camp intensif untuk mempersiapkan strategi menghadapi babak playoff kejuaraan nasional.",
      date: "2 November 2025",
      category: "Training",
      image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="news" className="py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={header.elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-orange/10 rounded-full">
            <span className="text-orange font-semibold text-sm">📰 Berita Terbaru</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">
            Update Terkini
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ikuti perkembangan terbaru dari Pelita Jaya Basketball Club
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange text-white text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <Button
                  variant="ghost"
                  className="text-orange hover:text-orange-dark p-0 h-auto font-semibold group/btn"
                >
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white"
          >
            Lihat Semua Berita
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
