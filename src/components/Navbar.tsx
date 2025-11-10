import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/pelita-jaya-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Berita", href: "#news" },
    { name: "Jadwal", href: "#schedule" },
    { name: "Roster", href: "#roster" },
    { name: "Tentang", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-navy/30 backdrop-blur-md py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 hover-scale">
            <img src={logo} alt="Pelita Jaya" className="h-12 w-12" />
            <div className="hidden md:block">
              <h1 className={`text-xl font-bold transition-colors ${isScrolled ? "text-navy" : "text-white"}`}>
                Pelita Jaya
              </h1>
              <p className={`text-xs transition-colors ${isScrolled ? "text-navy/70" : "text-white/80"}`}>
                Basketball Club
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  isScrolled ? "text-navy hover:text-orange" : "text-white hover:text-orange"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="outline" 
              className={`transition-all ${
                isScrolled 
                  ? "border-navy text-navy hover:bg-navy hover:text-white" 
                  : "border-white text-white bg-white/10 hover:bg-white hover:text-navy"
              }`}
            >
              Gabung Tim
            </Button>
            <Button className="bg-orange hover:bg-orange-dark text-white">
              Beli Tiket
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors ${isScrolled ? "text-navy" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-6 pb-6 animate-fade-in rounded-lg ${
            isScrolled ? "bg-white" : "bg-navy/50 backdrop-blur-md"
          }`}>
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-2 ${
                    isScrolled ? "text-navy hover:text-orange" : "text-white hover:text-orange"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button 
                  variant="outline" 
                  className={`w-full ${
                    isScrolled 
                      ? "border-navy text-navy hover:bg-navy hover:text-white" 
                      : "border-white text-white hover:bg-white hover:text-navy"
                  }`}
                >
                  Gabung Tim
                </Button>
                <Button className="bg-orange hover:bg-orange-dark text-white w-full">
                  Beli Tiket
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
