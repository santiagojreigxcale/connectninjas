import { Metadata } from 'next';
import { Users, Target, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre nosotros - ConnectNinjas',
  description: 'Conoced al equipo detrás de ConnectNinjas y nuestra misión de automatizar integraciones API.',
};

const values = [
  {
    icon: Zap,
    title: 'Velocidad letal',
    description: 'Lo que otros entregan en meses, nosotros lo generamos en horas. Así de simple.',
  },
  {
    icon: Shield,
    title: 'Seguridad innegociable',
    description: 'Tu información nunca sale de tu infraestructura. On-prem. By design.',
  },
  {
    icon: Users,
    title: 'Transparencia radical',
    description: 'Nada de sorpresas. Precios claros, procesos visibles y entregas a la vista.',
  },
  {
    icon: Target,
    title: 'Precisión quirúrgica',
    description: 'Como buenos ninjas, no damos un paso en falso.',
  },
];

const team = [
  {
    name: 'Alex Rodríguez',
    role: 'CEO & Fundador',
    description: '15 años en integraciones empresariales. Ex-CTO en startup fintech.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
  },
  {
    name: 'María González',
    role: 'CTO',
    description: 'Experta en IA y automatización. PhD en Computer Science.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
  },
  {
    name: 'Carlos Martín',
    role: 'Lead Developer',
    description: 'Arquitecto de software con 10 años en APIs enterprise.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="ninja-section bg-[#00384d]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h1 className="ninja-heading-xl mb-6">
              Somos ConnectNinjas
            </h1>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Un equipo de expertos en el mundo de las integraciones y el Travel Tech que hemos automatizamos lo imposible: generamos conectores API funcionales con inteligencia artificial. Donde otros ven semanas de desarrollo, nosotros vemos horas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="ninja-section bg-[#004a5c]">
        <div className="ninja-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="ninja-heading-lg mb-6">
                Nuestra misión
              </h2>
              <p className="ninja-body-lg mb-6">
                Hacer que integrar APIs sea tan fácil como pulsar un botón.
                Nos cansamos de la fricción, los costes y la complejidad innecesaria. ConnectNinjas nace para romper esas barreras con automatización real. En ConnectNinjas eliminas las barreras técnicas para poder hacer integraciones Api2Api.
              </p>
              <h3 className="ninja-heading-md mb-4">Nuestro origen</h3>
              <p className="text-[#a0c4d4] leading-relaxed">
                Tras años desarrollando integraciones manualmente, vimos el patrón: trabajo repetitivo, reglas claras, procesos clonables.
                Decidimos hacer lo obvio que nadie estaba haciendo: convertir documentación en conectores reales, con IA.
              </p>
            </div>
            <div className="ninja-card ninja-hover-lift">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#00384d] border-2 border-[#b8ff60] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-12 w-12 text-[#b8ff60]" />
                </div>
                <h3 className="ninja-heading-md mb-4">Desde 2024</h3>
                <p className="text-[#a0c4d4]">
                  Fundamos ConnectNinjas luego de mucha experiencia integrando acomodación y pusimos foco en el sector transporte y en C# y Java como lenguajes principales soportados. Hoy ya preparamos el salto a nuevos sectores y lenguajes.
                  Mismo objetivo, más alcance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="ninja-section bg-[#00384d]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h2 className="ninja-heading-lg mb-6">
              Lo que nos mueve
            </h2>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Nuestros principios, nuestro código fuente:
            </p>
          </div>

          <div className="ninja-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="ninja-card ninja-hover-lift text-center">
                  <div className="w-16 h-16 bg-[#004a5c] border-2 border-[#b8ff60] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-[#b8ff60]" />
                  </div>
                  <h3 className="ninja-heading-md mb-4">{value.title}</h3>
                  <p className="text-[#a0c4d4] leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="ninja-section bg-[#004a5c]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h2 className="ninja-heading-lg mb-6">
              Nuestro equipo
            </h2>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Expertos en integraciones API con décadas de experiencia combinada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="ninja-card ninja-hover-lift text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#b8ff60]"
                  />
                </div>
                <h3 className="ninja-heading-md mb-2">{member.name}</h3>
                <p className="text-[#b8ff60] font-medium mb-4">{member.role}</p>
                <p className="text-[#a0c4d4] leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="ninja-section bg-[#00384d]">
        <div className="ninja-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="ninja-heading-lg mb-8">
              ¿Por qué "Ninjas"?
            </h2>
            <div className="ninja-card ninja-hover-lift">
              <p className="ninja-body-lg mb-6">
                Los ninjas eran conocidos por su velocidad, precisión y capacidad de aparecer donde menos se esperaba. 
                Exactamente lo que hacemos con las integraciones API.
              </p>
              <p className="text-[#a0c4d4] leading-relaxed">
                Mientras otros equipos luchan meses con integraciones complejas, nosotros "aparecemos" 
                con un conector funcional en horas. Rápidos, precisos, y siempre un paso adelante.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}