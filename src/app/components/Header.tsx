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
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-start justify-between gap-3">
          {/* Logo + botão de telefone (mobile) */}
          <div className="flex flex-col gap-2 shrink-0">
            <ImageWithFallback
              src={logoImg}
              alt="ConstrutoraPro Logo"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
            <a
              href="tel:+5511912191008"
              className="md:hidden inline-flex items-center justify-center bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition-colors w-fit"
              aria-label="Ligar para (11) 91219-1008"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2 sm:gap-4 md:gap-6 pt-1 shrink-0">
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Contato
            </button>
          </nav>

          {/* Telefone (desktop) */}
          <a
            href="tel:+5511912191008"
            className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>(11) 91219-1008</span>
          </a>
        </div>
      </div>
    </header>
  );
}
