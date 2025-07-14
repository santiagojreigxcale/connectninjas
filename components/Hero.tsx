'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Upload, Download } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 ninja-gradient" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#b8ff60] rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-[#b8ff60] rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-[#b8ff60] rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="ninja-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className={`ninja-heading-xl mb-6 ninja-text-gradient ${isVisible ? 'ninja-animation-fadeIn' : ''}`}>
            Descargad vuestro conector API en minutos
          </h1>
          
          {/* Subheading */}
          <p className={`ninja-body-lg mb-8 max-w-2xl mx-auto ${isVisible ? 'ninja-animation-slideUp' : ''}`}>
            Integraciones 100% automáticas y on-prem. Sin vendor lock-in.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isVisible ? 'ninja-animation-scaleIn' : ''}`}>
            <Link href="/contacto">
              <Button className="ninja-button ninja-hover-lift">
                Solicitar demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/producto">
              <Button className="ninja-button-secondary ninja-hover-lift">
                <Upload className="mr-2 h-4 w-4" />
                Subid documentación
              </Button>
            </Link>
          </div>
          
          {/* Stats banner */}
          <div className={`inline-flex items-center space-x-4 bg-[#004a5c] border border-[#0a4c5c] rounded-full px-6 py-3 ${isVisible ? 'ninja-animation-fadeIn' : ''}`}>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#b8ff60] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#e8f6ff]">
                90% automatización actual
              </span>
            </div>
            <div className="w-px h-4 bg-[#0a4c5c]" />
            <div className="flex items-center space-x-2">
              <Download className="h-4 w-4 text-[#b8ff60]" />
              <span className="text-sm font-medium text-[#e8f6ff]">
                Entrega en horas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}