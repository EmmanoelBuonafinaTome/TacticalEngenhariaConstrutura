import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos prontos para transformar seu projeto em realidade. Fale conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl mb-2">Telefone</h3>
            <a href="tel:+5511912191008" className="text-blue-100 hover:text-white transition-colors">
              (11) 91219-1008
            </a>
            <br />
            <a href="tel:+5511333344445" className="text-blue-100 hover:text-white transition-colors">
              (11) 3333-4444
            </a>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl mb-2">Email</h3>
            <a href="mailto:taticalengenharia@construtora.com.brr" className="text-blue-100 hover:text-white transition-colors break-all">
              taticalengenharia@construtora.com.br
            </a>
            <br />
            <a href="mailto:taticalengenharia@construtora.com.br" className="text-blue-100 hover:text-white transition-colors break-all">
              taticalengenharia@construtora.com.br
            </a>
          </div>

          {/* Address */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl mb-2">Endereço</h3>
            <p className="text-blue-100">
              Alameda Inglaterra, 252<br />
              Jardim Europa - Braganca Paulista/SP<br />
              CEP: 12919-130
            </p>
          </div>

          {/* Hours */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl mb-2">Horário</h3>
            <p className="text-blue-100">
              Segunda a Sexta<br />
              08:00 - 18:00<br />
              Sábado: 08:00 - 12:00
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/5511912191008" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
