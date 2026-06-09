import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 sm:py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
          >
            Transformamos seus sonhos em realidade
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100"
          >
            Mais de 20 anos de experiência em construção civil, entregando qualidade e confiança em cada projeto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Solicite um Orçamento
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('projetos');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Ver Projetos
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <span>Qualidade Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <span>Prazos Cumpridos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <span>Equipe Especializada</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
