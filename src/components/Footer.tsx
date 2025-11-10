import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/pelita-jaya-logo.png";

const Footer = () => {
  const brand = useScrollAnimation();
  const club = useScrollAnimation();
  const fans = useScrollAnimation();
  const contact = useScrollAnimation();
  
  const footerLinks = {
    club: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Sejarah", href: "#history" },
      { name: "Manajemen", href: "#management" },
      { name: "Prestasi", href: "#achievements" },
    ],
    fans: [
      { name: "Berita", href: "#news" },
      { name: "Galeri", href: "#gallery" },
      { name: "Merchandise", href: "#merch" },
      { name: "Fan Club", href: "#fanclub" },
    ],
    info: [
      { name: "Jadwal", href: "#schedule" },
      { name: "Tiket", href: "#tickets" },
      { name: "Lokasi", href: "#location" },
      { name: "Kontak", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div 
            ref={brand.elementRef}
            className={`transition-all duration-1000 ${
              brand.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Pelita Jaya" className="h-16 w-16" />
              <div>
                <h3 className="text-2xl font-black">Pelita Jaya</h3>
                <p className="text-sm text-white/70">Basketball Club</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Klub basket profesional terkemuka di Indonesia dengan dedikasi tinggi 
              untuk mengembangkan olahraga basket nasional.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Club Links */}
          <div 
            ref={club.elementRef}
            className={`transition-all duration-1000 delay-100 ${
              club.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h4 className="text-lg font-bold mb-6">Klub</h4>
            <ul className="space-y-3">
              {footerLinks.club.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-orange transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fans Links */}
          <div 
            ref={fans.elementRef}
            className={`transition-all duration-1000 delay-200 ${
              fans.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h4 className="text-lg font-bold mb-6">Untuk Fans</h4>
            <ul className="space-y-3">
              {footerLinks.fans.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-orange transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div 
            ref={contact.elementRef}
            className={`transition-all duration-1000 delay-300 ${
              contact.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h4 className="text-lg font-bold mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Jl. Pintu Satu Senayan, Jakarta Pusat, DKI Jakarta 10270
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange flex-shrink-0" />
                <a href="tel:+622157902000" className="text-white/80 hover:text-orange transition-colors text-sm">
                  +62 21 5790 2000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-orange flex-shrink-0" />
                <a href="mailto:info@pelitajaya.id" className="text-white/80 hover:text-orange transition-colors text-sm">
                  info@pelitajaya.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2025 Pelita Jaya Basketball Club. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-orange transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
