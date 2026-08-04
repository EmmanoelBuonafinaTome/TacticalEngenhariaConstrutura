import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { SITE } from '../constants/site';
import { scrollToSection } from '../utils/scrollToSection';

const HERO_BENEFITS = [
  'Qualidade Garantida',
  'Prazos Cumpridos',
  'Equipe Especializada',
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-petroleum-800 to-petroleum-950 text-white py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-medium leading-tight"
          >
            Transformamos seus sonhos em realidade
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-petroleum-100"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              type="button"
              onClick={() => scrollToSection('contato')}
              className="bg-white text-petroleum-900 px-6 sm:px-8 py-3 rounded-lg hover:bg-petroleum-50 transition-all transform hover:scale-105"
            >
              Solicite um Orçamento
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('projetos')}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white hover:text-petroleum-900 transition-all"
            >
              Ver Projetos
            </button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            {HERO_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <CheckCircle
                  className="w-5 h-5 text-petroleum-300 shrink-0"
                  aria-hidden="true"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
