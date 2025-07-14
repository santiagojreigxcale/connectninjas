import { Metadata } from 'next';
import { Code, Zap, Shield, RefreshCw, Download, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Producto - ConnectNinjas',
  description: 'Descubrid cómo funcionan nuestros conectores API automáticos. Proceso de 4 pasos para integraciones on-prem.',
};

const features = [
  {
    icon: Zap,
    title: 'Generación automática',
    description: 'Nuestra IA analiza tu documentación y genera el conector completo sin intervención manual.',
  },
  {
    icon: Shield,
    title: 'Despliegue on-prem',
    description: 'Tus datos nunca salen de tu infraestructura. Control total y seguridad garantizada.',
  },
  {
    icon: RefreshCw,
    title: 'Actualizaciones automáticas',
    description: 'Cuando el proveedor actualiza su API, regeneramos tu conector automáticamente.',
  },
  {
    icon: Code,
    title: 'C# nativo',
    description: 'Código limpio y optimizado en C#. Próximamente: Python, Java y Node.js.',
  },
  {
    icon: Download,
    title: 'Sin vendor lock-in',
    description: 'Recibes el código fuente completo. Puedes modificarlo y mantenerlo internamente.',
  },
  {
    icon: Clock,
    title: 'Entrega rápida',
    description: 'De documentación a conector funcional en horas, no meses.',
  },
];

const languages = [
  { name: 'C#', status: 'available', description: 'Completamente soportado' },
  { name: 'Python', status: 'coming', description: 'Q2 2024' },
  { name: 'Java', status: 'coming', description: 'Q3 2024' },
  { name: 'Node.js', status: 'coming', description: 'Q4 2024' },
];

export default function ProductPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="ninja-section bg-[#00384d]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h1 className="ninja-heading-xl mb-6">
              Conectores API que se crean solos
            </h1>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Transformamos documentación API en conectores funcionales mediante inteligencia artificial. 
              Rápido, seguro y sin vendor lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="ninja-section bg-[#004a5c]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h2 className="ninja-heading-lg mb-6">
              Características principales
            </h2>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Todo lo que necesitas para integraciones API exitosas.
            </p>
          </div>

          <div className="ninja-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="ninja-card ninja-hover-lift">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#00384d] border-2 border-[#b8ff60] rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-[#b8ff60]" />
                    </div>
                    <h3 className="ninja-heading-md">{feature.title}</h3>
                  </div>
                  <p className="text-[#a0c4d4] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="ninja-section bg-[#00384d]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h2 className="ninja-heading-lg mb-6">
              Lenguajes soportados
            </h2>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Comenzamos con C# y expandimos el soporte a más lenguajes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="ninja-card ninja-hover-lift text-center">
                <div className="mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                    lang.status === 'available' ? 'bg-[#b8ff60] text-[#00384d]' : 'bg-[#00384d] border-2 border-[#a0c4d4]'
                  }`}>
                    <Code className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="ninja-heading-md mb-2">{lang.name}</h3>
                <p className={`text-sm ${lang.status === 'available' ? 'text-[#b8ff60]' : 'text-[#a0c4d4]'}`}>
                  {lang.description}
                </p>
                {lang.status === 'available' && (
                  <div className="mt-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-[#b8ff60] text-[#00384d] font-medium">
                      Disponible
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ninja-section bg-[#004a5c]">
        <div className="ninja-container">
          <div className="text-center">
            <h2 className="ninja-heading-lg mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="ninja-body-lg mb-8 max-w-2xl mx-auto">
              Solicita una demo personalizada y ve cómo podemos acelerar tus integraciones.
            </p>
            <Link href="/contacto">
              <Button className="ninja-button ninja-hover-lift">
                Solicitar demo gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}