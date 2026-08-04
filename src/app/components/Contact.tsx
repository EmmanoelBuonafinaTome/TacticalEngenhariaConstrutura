import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '../constants/site';
import { ContactCard } from './ContactCard';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-gradient-to-br from-petroleum-800 to-petroleum-950 text-white"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Entre em Contato"
          subtitle="Estamos prontos para transformar seu projeto em realidade. Fale conosco!"
          variant="light"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <ContactCard icon={Phone} title="Telefone">
            {CONTACT.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="block hover:text-white transition-colors mb-1"
              >
                {phone.label}
              </a>
            ))}
          </ContactCard>

          <ContactCard icon={Mail} title="Email">
            {CONTACT.emails.map((email) => (
              <a
                key={email.href}
                href={email.href}
                className="block hover:text-white transition-colors break-all"
              >
                {email.label}
              </a>
            ))}
          </ContactCard>

          <ContactCard icon={MapPin} title="Endereço">
            <p>
              {CONTACT.address.street}
              <br />
              {CONTACT.address.neighborhood}
              <br />
              {CONTACT.address.zipCode}
            </p>
          </ContactCard>

          <ContactCard icon={Clock} title="Horário">
            <p>
              {CONTACT.hours.weekdays}
              <br />
              {CONTACT.hours.saturday}
            </p>
          </ContactCard>
        </div>

        <div className="mt-12 text-center">
          <a
            href={CONTACT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-petroleum-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-petroleum-50 transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            {CONTACT.whatsapp.label}
          </a>
        </div>
      </div>
    </section>
  );
}
