import { Metadata } from 'next';
import { Users, Target, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre nosotros - Connect Ninjas',
  description: 'Conoced al equipo detrás de Connect Ninjas y nuestra misión de automatizar integraciones API.',
};

const values = [
  {
    icon: Zap,
    title: 'Velocidad',
    description: 'Entregamos en horas lo que otros tardan meses. La velocidad es nuestra ventaja competitiva.',
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Tus datos nunca salen de tu infraestructura. Seguridad by design.',
  },
  {
    icon: Users,
    title: 'Transparencia',
    description: 'Precios claros, procesos transparentes, sin sorpresas. Construimos relaciones duraderas.',
  },
  {
    icon: Target,
    title: 'Precisión',
    description: 'Como verdaderos ninjas, atacamos el problema con precisión quirúrgica.',
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
              Somos Connect Ninjas
            </h1>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Un equipo de expertos en integraciones API que ha automatizado lo imposible: 
              generar conectores funcionales mediante inteligencia artificial.
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
                Eliminar las barreras técnicas en las integraciones API. Creemos que conectar sistemas 
                no debería ser un proceso lento y costoso.
              </p>
              <p className="text-[#a0c4d4] leading-relaxed">
                Después de años desarrollando integraciones manualmente, nos dimos cuenta de que 
                la mayoría del trabajo era repetitivo y automatizable. Así nació Connect Ninjas: 
                una solución que convierte documentación API en conectores funcionales.
              </p>
            </div>
            <div className="ninja-card ninja-hover-lift">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#00384d] border-2 border-[#b8ff60] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-12 w-12 text-[#b8ff60]" />
                </div>
                <h3 className="ninja-heading-md mb-4">2024</h3>
                <p className="text-[#a0c4d4]">
                  Año de fundación. Comenzamos con el dominio de transporte y C#, 
                  con planes de expansión a otros sectores y lenguajes.
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
              Nuestros valores
            </h2>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Los principios que guían todo lo que hacemos.
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