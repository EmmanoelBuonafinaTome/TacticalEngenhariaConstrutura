import { Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from '../../imports/ChatGPT_Image_5_de_jun._de_2026__14_15_49.png';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={logoImg}
              alt="ConstrutoraPro Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 flex-wrap">
            <button 
              onClick={() => scrollToSection('projetos')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+5511912191008" 
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(11) 91219-1008</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
