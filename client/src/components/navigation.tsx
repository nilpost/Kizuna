import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">JapanRealty Pro</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('reforms')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Reforms
              </button>
              <button onClick={() => scrollToSection('investments')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Investments
              </button>
              <button onClick={() => scrollToSection('partnerships')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Partnerships
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              Services
            </button>
            <button onClick={() => scrollToSection('reforms')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              Reforms
            </button>
            <button onClick={() => scrollToSection('investments')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              Investments
            </button>
            <button onClick={() => scrollToSection('partnerships')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              Partnerships
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
