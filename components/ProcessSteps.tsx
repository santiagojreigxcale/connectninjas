'use client';

import { useEffect, useState } from 'react';
import { Upload, FileText, Code, Download } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Subid vuestro dominio',
    description: 'Cargad la documentación de vuestro dominio de negocio para que nuestra IA comprenda vuestros requisitos.',
    icon: Upload,
  },
  {
    number: 2,
    title: 'Subid la doc del proveedor',
    description: 'Proporcionad la documentación API del proveedor externo que queréis integrar.',
    icon: FileText,
  },
  {
    number: 3,
    title: 'Elegid lenguaje',
    description: 'Seleccionad el lenguaje de programación. Actualmente soportamos C# con más opciones próximamente.',
    icon: Code,
  },
  {
    number: 4,
    title: 'Descargad el artefacto',
    description: 'Recibid vuestro conector completamente funcional, listo para desplegar on-prem.',
    icon: Download,
  },
];

export default function ProcessSteps() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...prev, stepIndex]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ninja-section bg-[#00384d]">
      <div className="ninja-container">
        <div className="text-center mb-16">
          <h2 className="ninja-heading-lg mb-6">
            Cómo funciona en 4 pasos
          </h2>
          <p className="ninja-body-lg max-w-3xl mx-auto">
            Nuestro proceso automatizado convierte documentación API en conectores funcionales en cuestión de horas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            
            return (
              <div
                key={step.number}
                data-step={index}
                className={`relative text-center ${isVisible ? 'ninja-animation-slideUp' : ''}`}
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#b8ff60] to-transparent transform -translate-x-1/2 z-0" />
                )}
                
                {/* Step content */}
                <div className="relative z-10">
                  {/* Icon circle */}
                  <div className="mx-auto w-24 h-24 bg-[#004a5c] border-2 border-[#b8ff60] rounded-full flex items-center justify-center mb-6 ninja-hover-lift">
                    <Icon className="h-10 w-10 text-[#b8ff60]" />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#b8ff60] text-[#00384d] rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <h3 className="ninja-heading-md mb-4 text-[#e8f6ff]">
                    {step.title}
                  </h3>
                  <p className="text-[#a0c4d4] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}