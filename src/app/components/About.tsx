import { motion } from 'motion/react';
import { ABOUT_FEATURES, ABOUT_STATS } from '../data/about';
import { SITE } from '../constants/site';

export function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Sobre a {SITE.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Fundada em {SITE.foundedYear}, a {SITE.name} é referência em
              construção civil na região. Nossa missão é transformar projetos
              em realidade, sempre priorizando a qualidade, segurança e
              satisfação dos nossos clientes.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Com uma equipe altamente qualificada e equipamentos modernos,
              entregamos empreendimentos residenciais e comerciais que superam
              expectativas. Cada projeto é tratado com dedicação e atenção aos
              detalhes.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Nossa trajetória é marcada por construções sólidas, clientes
              satisfeitos e relacionamentos duradouros. Construímos não apenas
              edifícios, mas sonhos e futuro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {ABOUT_FEATURES.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-petroleum-50 p-5 sm:p-6 rounded-lg text-center hover:bg-petroleum-100 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-petroleum-900 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl text-petroleum-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
