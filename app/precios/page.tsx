import { Metadata } from 'next';
import PricingCards from '@/components/PricingCards';
import { Check, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Precios - Connect Ninjas',
  description: 'Precios transparentes para conectores API. 20.000€ por conector nuevo, 2.000€/año mantenimiento.',
};

const faqs = [
  {
    question: '¿Qué incluye el precio del conector?',
    answer: 'El precio incluye la generación completa del conector, documentación técnica, código fuente, y soporte durante la implementación. Sin costes adicionales.',
  },
  {
    question: '¿Qué pasa si el proveedor cambia su API?',
    answer: 'Con el mantenimiento anual, actualizamos automáticamente tu conector cuando el proveedor modifica su API. Recibes notificaciones y el nuevo conector sin coste adicional.',
  },
  {
    question: '¿Puedo modificar el código del conector?',
    answer: 'Sí, recibes el código fuente completo. Puedes modificarlo, extenderlo o mantenerlo internamente. No hay vendor lock-in.',
  },
  {
    question: '¿Qué significa "1 cambio de dominio del cliente"?',
    answer: 'Si necesitas modificar tu modelo de datos o lógica de negocio, incluimos 1 cambio gratuito al año. Cambios adicionales se facturan por separado.',
  },
  {
    question: '¿Qué son los "requisitos ad-hoc"?',
    answer: 'Incluimos hasta 3 modificaciones menores al año: cambios de configuración, ajustes de mapeo de datos, o pequeñas personalizaciones funcionales.',
  },
  {
    question: '¿Ofrecéis descuentos por volumen?',
    answer: 'Sí, para múltiples conectores o contratos plurianuales ofrecemos descuentos. Contacta con nuestro equipo comercial para más información.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="ninja-section bg-[#00384d]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h1 className="ninja-heading-xl mb-6">
              Precios simples y transparentes
            </h1>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Sin costes ocultos, sin facturación por uso. Pagas una vez, usas para siempre.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingCards />

      {/* Value Proposition */}
      <section className="ninja-section bg-[#004a5c]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h2 className="ninja-heading-lg mb-6">
              ¿Por qué elegir Connect Ninjas?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="ninja-card ninja-hover-lift text-center">
              <div className="w-16 h-16 bg-[#00384d] border-2 border-[#b8ff60] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-[#b8ff60]" />
              </div>
              <h3 className="ninja-heading-md mb-4">Sin vendor lock-in</h3>
              <p className="text-[#a0c4d4]">
                Recibes el código fuente completo. Puedes modificarlo y mantenerlo internamente sin depender de nosotros.
              </p>
            </div>

            <div className="ninja-card ninja-hover-lift text-center">
              <div className="w-16 h-16 bg-[#00384d] border-2 border-[#b8ff60] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-[#b8ff60]" />
              </div>
              <h3 className="ninja-heading-md mb-4">ROI inmediato</h3>
              <p className="text-[#a0c4d4]">
                Ahorras meses de desarrollo y miles de euros en costes de personal. El ROI se ve desde el primer día.
              </p>
            </div>

            <div className="ninja-card ninja-hover-lift text-center">
              <div className="w-16 h-16 bg-[#00384d] border-2 border-[#b8ff60] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-[#b8ff60]" />
              </div>
              <h3 className="ninja-heading-md mb-4">Soporte continuo</h3>
              <p className="text-[#a0c4d4]">
                Mantenimiento automático, actualizaciones de API, y soporte técnico incluido en el plan anual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ninja-section bg-[#00384d]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h2 className="ninja-heading-lg mb-6">
              Preguntas frecuentes
            </h2>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros precios y servicios.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="ninja-card ninja-hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#b8ff60] text-[#00384d] rounded-full flex items-center justify-center">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="ninja-heading-md mb-3">{faq.question}</h3>
                    <p className="text-[#a0c4d4] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}