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
    title: 'Edifício Residencial Horizonte',
    description:
      'Complexo residencial de alto padrão com 120 apartamentos, área de lazer completa e localização privilegiada.',
    image:
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3ODA1ODI1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'São Paulo - SP',
  },
  {
    id: 2,
    title: 'Condomínio Residencial Vila Verde',
    description:
      'Casas de alto padrão com arquitetura moderna, jardins paisagísticos e infraestrutura completa.',
    image:
      'https://images.unsplash.com/photo-1621511075938-f03482369feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbnN0cnVjdGlvbiUyMHByb2plY3R8ZW58MXx8fHwxNzgwNjYzMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Campinas - SP',
  },
  {
    id: 3,
    title: 'Centro Empresarial Corporate Tower',
    description:
      'Torre comercial com 25 andares, tecnologia de ponta e certificação ambiental LEED.',
    image:
      'https://images.unsplash.com/photo-1777919393703-ad0a60555274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc4MDY2MzAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'São Paulo - SP',
  },
  {
    id: 4,
    title: 'Residencial Jardim das Flores',
    description:
      'Edifício residencial com 80 unidades, piscina, academia e espaço gourmet.',
    image:
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc4MDYxNDYwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Santos - SP',
  },
  {
    id: 5,
    title: 'Business Center Innovation',
    description:
      'Complexo comercial moderno com salas corporativas, auditório e estacionamento amplo.',
    image:
      'https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3ODA2NjMwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Ribeirão Preto - SP',
  },
];
