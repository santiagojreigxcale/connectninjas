'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Zap, Shield, RefreshCw } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter Connector',
    price: '20.000',
    currency: '€',
    period: 'pago único',
    description: 'Perfecto para comenzar con vuestra primera integración API',
    features: [
      'Conector API personalizado',
      'Documentación completa',
      'Código fuente incluido',
      'Despliegue on-prem',
      'Soporte durante implementación',
      'Sin vendor lock-in',
    ],
    icon: Zap,
    popular: true,
  },
  {
    name: 'Mantenimiento Anual',
    price: '2.000',
    currency: '€',
    period: 'por año',
    description: 'Mantened vuestro conector actualizado automáticamente',
    features: [
      'Actualizaciones ilimitadas del proveedor',
      '1 cambio de dominio del cliente',
      '3 requisitos ad-hoc',
      'Soporte técnico prioritario',
      'Monitoreo proactivo',
      'Notificaciones de cambios API',
    ],
    icon: RefreshCw,
    popular: false,
  },
];

export default function PricingCards() {
  return (
    <section className="ninja-section bg-[#00384d]">
      <div className="ninja-container">
        <div className="text-center mb-16">
          <h2 className="ninja-heading-lg mb-6">
            Precios transparentes
          </h2>
          <p className="ninja-body-lg max-w-3xl mx-auto">
            Sin costes ocultos, sin facturación por llamadas. Pagad una vez, usad para siempre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            
            return (
              <div
                key={plan.name}
                className={`ninja-pricing-card ninja-hover-lift ${plan.popular ? 'featured' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#b8ff60] text-[#00384d] px-4 py-2 rounded-full text-sm font-medium">
                      Recomendado
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#00384d] border-2 border-[#b8ff60] rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-[#b8ff60]" />
                    </div>
                  </div>
                  
                  <h3 className="ninja-heading-md mb-2">{plan.name}</h3>
                  <p className="text-[#a0c4d4] mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-[#b8ff60]">{plan.price}</span>
                    <span className="text-xl text-[#e8f6ff] ml-1">{plan.currency}</span>
                  </div>
                  <p className="text-[#a0c4d4] text-sm">{plan.period}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-[#b8ff60] mt-0.5 flex-shrink-0" />
                      <span className="text-[#e8f6ff]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contacto" className="block">
                  <Button 
                    className={`w-full ${plan.popular ? 'ninja-button' : 'ninja-button-secondary'}`}
                  >
                    {plan.popular ? 'Empezar ahora' : 'Contactar'}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto ninja-card">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-[#b8ff60]" />
            </div>
            <h3 className="ninja-heading-md mb-4">Garantía de satisfacción</h3>
            <p className="text-[#a0c4d4]">
              Si no estáis satisfechos con el conector en los primeros 30 días, 
              os devolvemos el 100% del importe. Sin preguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}