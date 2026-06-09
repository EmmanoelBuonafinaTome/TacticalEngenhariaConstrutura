import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Edifício Residencial Horizonte',
    description: 'Complexo residencial de alto padrão com 120 apartamentos, área de lazer completa e localização privilegiada.',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3ODA1ODI1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'São Paulo - SP'
  },
  {
    id: 2,
    title: 'Condomínio Residencial Vila Verde',
    description: 'Casas de alto padrão com arquitetura moderna, jardins paisagísticos e infraestrutura completa.',
    image: 'https://images.unsplash.com/photo-1621511075938-f03482369feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbnN0cnVjdGlvbiUyMHByb2plY3R8ZW58MXx8fHwxNzgwNjYzMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'Campinas - SP'
  },
  {
    id: 3,
    title: 'Centro Empresarial Corporate Tower',
    description: 'Torre comercial com 25 andares, tecnologia de ponta e certificação ambiental LEED.',
    image: 'https://images.unsplash.com/photo-1777919393703-ad0a60555274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc4MDY2MzAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'São Paulo - SP'
  },
  {
    id: 4,
    title: 'Residencial Jardim das Flores',
    description: 'Edifício residencial com 80 unidades, piscina, academia e espaço gourmet.',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc4MDYxNDYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'Santos - SP'
  },
  {
    id: 5,
    title: 'Business Center Innovation',
    description: 'Complexo comercial moderno com salas corporativas, auditório e estacionamento amplo.',
    image: 'https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3ODA2NjMwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'Ribeirão Preto - SP'
  }
];

export function ProjectsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="projetos" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            Nossos Projetos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos empreendimentos que transformaram sonhos em realidade
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: 'start' }}
            className="relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl mb-2 text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-600 mb-3">{project.location}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="absolute left-2 sm:left-4 top-32 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="absolute right-2 sm:right-4 top-32 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para o slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
