import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { NAV_LINKS, SITE, SOCIAL_LINKS } from '../constants/site';
import { scrollToSection } from '../utils/scrollToSection';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from '../../imports/ChatGPT_Image_5_de_jun._de_2026__14_15_49.png';

const SOCIAL_ICONS = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
} as const;

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <ImageWithFallback
                src={logoImg}
                alt={`${SITE.name} Logo`}
                className="h-14 sm:h-16 md:h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Construindo sonhos e transformando o futuro com qualidade,
              confiança e excelência há mais de 20 anos.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon =
                  SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-lg hover:bg-petroleum-900 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
