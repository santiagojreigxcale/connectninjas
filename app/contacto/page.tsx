'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Gracias por tu interés. Nos pondremos en contacto pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="ninja-section bg-[#00384d]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h1 className="ninja-heading-xl mb-6">
              Hablemos de tus integraciones
            </h1>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Contacta con nuestro equipo para una demo personalizada o resolver cualquier duda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="ninja-section bg-[#004a5c]">
        <div className="ninja-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="ninja-heading-lg mb-8">Solicita una demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#e8f6ff] mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="ninja-input"
                      placeholder="Nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#e8f6ff] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="ninja-input"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#e8f6ff] mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="ninja-input"
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#e8f6ff] mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="ninja-input"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#e8f6ff] mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="ninja-textarea"
                    placeholder="Cuéntanos sobre tus necesidades de integración..."
                  />
                </div>

                <Button type="submit" className="ninja-button ninja-hover-lift">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="ninja-heading-lg mb-8">Información de contacto</h2>
              <div className="space-y-8">
                <div className="ninja-card ninja-hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#00384d] border-2 border-[#b8ff60] rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-[#b8ff60]" />
                    </div>
                    <div>
                      <h3 className="ninja-heading-md mb-2">Email</h3>
                      <p className="text-[#a0c4d4]">hola@connectninjas.com</p>
                      <p className="text-[#a0c4d4] text-sm mt-1">
                        Respondemos en menos de 24 horas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ninja-card ninja-hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#00384d] border-2 border-[#b8ff60] rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-[#b8ff60]" />
                    </div>
                    <div>
                      <h3 className="ninja-heading-md mb-2">Teléfono</h3>
                      <p className="text-[#a0c4d4]">+34 900 000 000</p>
                      <p className="text-[#a0c4d4] text-sm mt-1">
                        Lunes a viernes, 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ninja-card ninja-hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#00384d] border-2 border-[#b8ff60] rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-[#b8ff60]" />
                    </div>
                    <div>
                      <h3 className="ninja-heading-md mb-2">Oficina</h3>
                      <p className="text-[#a0c4d4]">Madrid, España</p>
                      <p className="text-[#a0c4d4] text-sm mt-1">
                        Reuniones presenciales disponibles
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendar Integration */}
              <div className="mt-8">
                <div className="ninja-card ninja-hover-lift text-center">
                  <h3 className="ninja-heading-md mb-4">Reserva una reunión</h3>
                  <p className="text-[#a0c4d4] mb-6">
                    ¿Prefieres hablar directamente? Reserva un hueco en nuestro calendario.
                  </p>
                  <Button className="ninja-button-secondary">
                    Abrir calendario
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}