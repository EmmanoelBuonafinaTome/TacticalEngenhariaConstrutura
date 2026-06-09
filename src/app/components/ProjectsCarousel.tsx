import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
      aria-label="Próximo"
    >
      <ChevronRight className="w-6 h-6 text-blue-600" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
      aria-label="Anterior"
    >
      <ChevronLeft className="w-6 h-6 text-blue-600" />
    </button>
  );
}

export function ProjectsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="projetos" className="py-16 md:py-24 bg-gray-50">
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
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-3">
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
