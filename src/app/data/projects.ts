import reformaCompleta from '../../imports/reforma-completa.jpg';
import filtro from '../../imports/filtro.jpg';
import salaoFestas from '../../imports/salao-festas.jpg';
import steelFrame from '../../imports/steel-frame.jpg';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Reforma Casa Alto Padrao',
    description:
      'Reforma residencial de alto padrão com soluções personalizadas, acabamentos premium e alto nível de qualidade.',
    image:
      reformaCompleta,
    location: 'Bragança Paulista - SP',
  },
  {
    id: 2,
    title: 'Filtro anaeróbio',
    description:
      'Projeto e execução de filtro anaeróbio, oferecendo uma solução eficiente e sustentável para o tratamento de efluentes.',
    image:
      filtro,
    location: 'Bragança Paulista - SP',
  },
  {
    id: 3,
    title: 'Salão de Festas',
    description:
      'Projeto completo de salão de festas, oferecendo ambientes funcionais, acabamento refinado e soluções construtivas de alta qualidade.',
    image:
      salaoFestas,
    location: 'Bragança Paulista - SP',
  },
  {
    id: 4,
    title: 'Steel Frame',
    description:
      'Projeto em Steel Frame executado com tecnologia de ponta, proporcionando rapidez na construção, sustentabilidade e alto padrão de qualidade.',
    image:
      steelFrame,
    location: 'Santo Antonio do Pinha - SP',
  },
];
