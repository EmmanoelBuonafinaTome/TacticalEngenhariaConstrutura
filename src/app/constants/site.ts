export const SITE = {
  name: 'Tactical Engenharia & Construção',
  shortName: 'Tactical Engenharia',
  description:
    'Mais de 20 anos de experiência em construção civil, entregando qualidade e confiança em cada projeto.',
  foundedYear: 2006,
} as const;

export const CONTACT = {
  phones: [
    { label: '(11) 91219-1008', href: 'tel:+5511912191008' },
    { label: '(11) 3333-4444', href: 'tel:+5511333344445' },
  ],
  emails: [
    { label: 'taticalengenharia@construtora.com.br', href: 'mailto:taticalengenharia@construtora.com.br' },
  ],
  whatsapp: {
    label: 'Fale Conosco pelo WhatsApp',
    href: 'https://wa.me/5511912191008',
  },
  address: {
    street: 'Alameda Inglaterra, 252',
    neighborhood: 'Jardim Europa - Braganca Paulista/SP',
    zipCode: 'CEP: 12919-130',
  },
  hours: {
    weekdays: 'Segunda a Sexta: 08:00 - 18:00',
    saturday: 'Sábado: 08:00 - 12:00',
  },
} as const;

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
] as const;

export type SectionId = 'projetos' | 'sobre' | 'contato';

export const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre', label: 'Sobre Nós' },
  { id: 'contato', label: 'Contato' },
];
