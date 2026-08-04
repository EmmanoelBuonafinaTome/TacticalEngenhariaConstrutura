import { useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { CONTACT, NAV_LINKS, SITE, type SectionId } from '../constants/site';
import { scrollToSection } from '../utils/scrollToSection';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import logoImg from '../../imports/Logo.png';

function handleNavClick(sectionId: SectionId, onNavigate?: () => void) {
  scrollToSection(sectionId);

  if (onNavigate) {
    onNavigate();
  }
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center shrink-0">
            <ImageWithFallback
              src={logoImg}
              alt={`${SITE.name} Logo`}
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
            />
          </div>

          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="text-gray-700 hover:text-petroleum-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={CONTACT.phones[0].href}
              className="flex items-center gap-2 bg-petroleum-900 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-petroleum-950 transition-colors text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">{CONTACT.phones[0].label}</span>
              <span className="sm:hidden">Ligar</span>
            </a>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-petroleum-900">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6" aria-label="Menu mobile">
                  {NAV_LINKS.map((link) => (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleNavClick(link.id, closeMenu)}
                      className="text-left text-lg text-gray-700 hover:text-petroleum-900 transition-colors py-2"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
