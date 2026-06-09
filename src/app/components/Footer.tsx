import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from '../../imports/ChatGPT_Image_5_de_jun._de_2026__14_15_49.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ImageWithFallback
                src={logoImg}
                alt="Tactical Engenharia & Construção Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Construindo sonhos e transformando o futuro com qualidade, confiança e excelência há mais de 20 anos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('projetos');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('sobre');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contato');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Tactical Engenharia & Construção. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
