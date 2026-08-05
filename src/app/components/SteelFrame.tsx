import { motion } from 'motion/react';
import { ABOUT_STATS } from '../data/about';
import { SITE } from '../constants/site';
import { ImageWithFallback } from './figma/ImageWithFallback';
import steelFrame from '../../imports/steel-frame.jpg';

export function SteelFrame() {
  return (
    <section id="steelFrame" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Construção em Steel Frame
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              A {SITE.name} é referência em construção civil na região e
              trabalha com o sistema steel frame, uma tecnologia moderna que
              utiliza estrutura em aço galvanizado para levantar edificações
              residenciais e comerciais com mais agilidade e precisão.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              O método reduz o tempo de obra, gera menos desperdício de
              material e garante excelente desempenho térmico e acústico,
              sem abrir mão da resistência e da durabilidade que um projeto
              de qualidade exige.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Desde {SITE.foundedYear}, aplicamos essa técnica com equipe
              qualificada e equipamentos modernos, entregando construções
              sólidas e projetos que se transformam em realidade para
              nossos clientes.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden"
          >
            <ImageWithFallback
              src={steelFrame}
              alt="Estrutura de construção em steel frame"
              className="w-full h-64 sm:h-80 md:h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}