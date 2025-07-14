import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight, FileText, Video, Book } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recursos - ConnectNinjas',
  description: 'Blog técnico, documentación y recursos sobre integraciones API on-prem y conectores automáticos.',
};

const blogPosts = [
  {
    title: 'Guía completa: Integraciones API on-prem vs Cloud',
    excerpt: 'Comparamos las ventajas y desventajas de cada aproximación, con casos de uso reales del sector transporte.',
    date: '15 Mar 2024',
    author: 'Alex Rodríguez',
    category: 'Guías',
    readTime: '8 min',
    slug: 'integraciones-api-on-prem-vs-cloud',
  },
  {
    title: 'Automatización de conectores C# con IA',
    excerpt: 'Descubre cómo nuestra IA analiza documentación API y genera código C# optimizado para integraciones.',
    date: '10 Mar 2024',
    author: 'María González',
    category: 'Técnico',
    readTime: '12 min',
    slug: 'automatizacion-conectores-csharp-ia',
  },
  {
    title: 'Mejores prácticas para integraciones NDC',
    excerpt: 'Consejos esenciales para implementar con éxito integraciones NDC en el sector del transporte aéreo.',
    date: '5 Mar 2024',
    author: 'Carlos Martín',
    category: 'Caso de uso',
    readTime: '10 min',
    slug: 'mejores-practicas-integraciones-ndc',
  },
  {
    title: 'Seguridad en integraciones API: Guía 2024',
    excerpt: 'Todo lo que necesitas saber sobre seguridad en integraciones API, con foco en despliegues on-prem.',
    date: '28 Feb 2024',
    author: 'Alex Rodríguez',
    category: 'Seguridad',
    readTime: '15 min',
    slug: 'seguridad-integraciones-api-2024',
  },
];

const resources = [
  {
    title: 'Documentación técnica',
    description: 'Guías completas de implementación, APIs de referencia y ejemplos de código.',
    icon: Book,
    link: '/docs',
  },
  {
    title: 'Webinars',
    description: 'Sesiones en vivo sobre integraciones API, casos de uso y mejores prácticas.',
    icon: Video,
    link: '/webinars',
  },
  {
    title: 'Whitepapers',
    description: 'Estudios técnicos profundos sobre automatización de integraciones API.',
    icon: FileText,
    link: '/whitepapers',
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="ninja-section bg-[#00384d]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h1 className="ninja-heading-xl mb-6">
              Recursos y conocimiento
            </h1>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Blog técnico, documentación y recursos para dominar las integraciones API.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="ninja-section bg-[#004a5c]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h2 className="ninja-heading-lg mb-6">
              Recursos disponibles
            </h2>
          </div>

          <div className="ninja-grid">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link key={index} href={resource.link} className="ninja-card ninja-hover-lift block">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#00384d] border-2 border-[#b8ff60] rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-[#b8ff60]" />
                    </div>
                    <h3 className="ninja-heading-md">{resource.title}</h3>
                  </div>
                  <p className="text-[#a0c4d4] leading-relaxed mb-4">{resource.description}</p>
                  <div className="flex items-center text-[#b8ff60] font-medium">
                    <span>Explorar</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="ninja-section bg-[#00384d]">
        <div className="ninja-container">
          <div className="text-center mb-16">
            <h2 className="ninja-heading-lg mb-6">
              Últimos artículos del blog
            </h2>
            <p className="ninja-body-lg max-w-3xl mx-auto">
              Artículos técnicos sobre integraciones API, automatización y mejores prácticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="ninja-card ninja-hover-lift block">
                <div className="mb-4">
                  <div className="flex items-center space-x-4 text-sm text-[#a0c4d4] mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="inline-block bg-[#b8ff60] text-[#00384d] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {post.category}
                  </div>
                </div>
                
                <h3 className="ninja-heading-md mb-4">{post.title}</h3>
                <p className="text-[#a0c4d4] leading-relaxed mb-4">{post.excerpt}</p>
                
                <div className="flex items-center text-[#b8ff60] font-medium">
                  <span>Leer más</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="ninja-button-secondary ninja-hover-lift">
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}