import { Award, Clock, Shield, Users, type LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const ABOUT_FEATURES: Feature[] = [
  {
    icon: Award,
    title: 'Excelência',
    description: 'Comprometimento com a qualidade em cada detalhe da construção',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais qualificados e experientes em cada área',
  },
  {
    icon: Clock,
    title: '20+ Anos',
    description: 'Duas décadas de experiência no mercado de construção civil',
  },
  {
    icon: Shield,
    title: 'Confiança',
    description: 'Transparência e segurança em todos os nossos processos',
  },
];

export const ABOUT_STATS: Stat[] = [
  { value: '150+', label: 'Projetos Concluídos' },
  { value: '20+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Clientes Satisfeitos' },
  { value: '100%', label: 'Qualidade Garantida' },
];
