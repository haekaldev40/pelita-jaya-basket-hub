import { useState } from "react";
import { X } from "lucide-react";
import heroBasketball from "@/assets/hero-basketball.jpg";
import heroTeam from "@/assets/hero-team.jpeg";
import pemain1 from "@/assets/pemain-1.webp";
import pemain2 from "@/assets/pemain-2.jpeg";
import pemain3 from "@/assets/pemain-3.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: heroTeam,
      alt: "Tim Pelita Jaya Basketball",
      category: "Team",
    },
    {
      id: 2,
      src: heroBasketball,
      alt: "Pertandingan Basketball",
      category: "Match",
    },
    {
      id: 3,
      src: pemain1,
      alt: "Pemain Pelita Jaya",
      category: "Player",
    },
    {
      id: 4,
      src: pemain2,
      alt: "Pemain Pelita Jaya",
      category: "Player",
    },
    {
      id: 5,
      src: pemain3,
      alt: "Pemain Pelita Jaya",
      category: "Player",
    },
    {
      id: 6,
      src: heroBasketball,
      alt: "Aksi Pertandingan",
      category: "Match",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-navy via-navy-dark to-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-4 px-4 py-2 bg-orange/20 backdrop-blur-sm rounded-full border border-orange/30">
            <span className="text-orange font-semibold text-sm">📸 Gallery Foto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Momen Berharga Tim
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Dokumentasi aksi, kemenangan, dan kehebatan Pelita Jaya Basketball Club
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
              
              {/* Border Glow Effect */}
              <div className="absolute inset-0 border-2 border-white/10 group-hover:border-orange/50 rounded-2xl transition-all duration-500 z-20"></div>
              
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-30">
                <span className="px-3 py-1 bg-orange/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-orange/30">
                  {image.category}
                </span>
              </div>

              {/* Hover Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-navy/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-orange hover:border-orange transition-all duration-300 group"
            onClick={() => setSelectedImage(null)}
          >
            <X className="text-white group-hover:rotate-90 transition-transform duration-300" size={24} />
          </button>

          {/* Image Container with Glassmorphism */}
          <div className="relative max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-orange/20">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
