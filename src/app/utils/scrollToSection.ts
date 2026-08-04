import type { SectionId } from '../constants/site';

export function scrollToSection(id: SectionId): void {
  try {
    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Seção "${id}" não encontrada na página.`);
      return;
    }

    element.scrollIntoView({ behavior: 'smooth' });
  } catch (error) {
    console.error('Erro ao rolar até a seção:', error);
  }
}
