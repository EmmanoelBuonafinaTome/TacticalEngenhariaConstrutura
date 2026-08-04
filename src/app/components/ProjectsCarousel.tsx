import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import {
  useCarouselAutoplay,
  useCarouselIndex,
} from '../hooks/useCarouselAutoplay';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionHeading } from './SectionHeading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';

function getDotClassName(isActive: boolean): string {
  if (isActive) {
    return 'bg-petroleum-900';
  }

  return 'bg-gray-300';
}

export function ProjectsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const currentIndex = useCarouselIndex(api);

  useCarouselAutoplay(api);

  return (
    <section id="projetos" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Nossos Projetos"
          subtitle="Conheça alguns dos empreendimentos que transformaram sonhos em realidade"
        />

        <div className="max-w-7xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: 'start' }}
            className="relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {PROJECTS.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                    <div className="relative h-52 sm:h-64 overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl mb-2 text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-sm text-petroleum-900 mb-3">
                        {project.location}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-petroleum-900" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-petroleum-900" />
            </button>

            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Indicadores do carrossel">
              {PROJECTS.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={index === currentIndex}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${getDotClassName(index === currentIndex)}`}
                  aria-label={`Ir para o projeto ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
