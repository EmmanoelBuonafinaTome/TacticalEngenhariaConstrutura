import { Award, Users, Clock, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometimento com a qualidade em cada detalhe da construção'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e experientes em cada área'
    },
    {
      icon: Clock,
      title: '20+ Anos',
      description: 'Duas décadas de experiência no mercado de construção civil'
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Transparência e segurança em todos os nossos processos'
    }
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Sobre a Tactical Engenharia & Construção
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fundada em 2006, a Tactical Engenharia & Construção é referência em construção civil na região. 
              Nossa missão é transformar projetos em realidade, sempre priorizando a qualidade, 
              segurança e satisfação dos nossos clientes.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Com uma equipe altamente qualificada e equipamentos modernos, entregamos 
              empreendimentos residenciais e comerciais que superam expectativas. Cada projeto 
              é tratado com dedicação e atenção aos detalhes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa trajetória é marcada por construções sólidas, clientes satisfeitos e 
              relacionamentos duradouros. Construímos não apenas edifícios, mas sonhos e futuro.
            </p>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-blue-600 mb-2">20+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Qualidade Garantida</div>
          </div>
        </div>
      </div>
    </section>
  );
}
