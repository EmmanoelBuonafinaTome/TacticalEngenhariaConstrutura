import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export function ContactCard({ icon: Icon, title, children }: ContactCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl mb-2">{title}</h3>
      <div className="text-petroleum-100">{children}</div>
    </div>
  );
}
