import Link from 'next/link';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  producto: [
    { name: 'Características', href: '/producto' },
    { name: 'Precios', href: '/precios' },
    { name: 'Recursos', href: '/recursos' },
  ],
  empresa: [
    { name: 'Sobre nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { name: 'Política de privacidad', href: '/privacidad' },
    { name: 'Aviso legal', href: '/aviso-legal' },
    { name: 'Cookies', href: '/cookies' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#00384d] border-t border-[#0a4c5c]">
      <div className="ninja-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-[#b8ff60]" />
              <span className="text-xl font-bold text-[#e8f6ff]">Connect Ninjas</span>
            </Link>
            <p className="text-[#a0c4d4] mb-6 max-w-md">
              Integraciones API 100% automáticas y on-prem. Descargad vuestro conector en minutos. Sin vendor lock-in.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#a0c4d4]">
                <Mail className="h-4 w-4" />
                <span>hola@connectninjas.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[#a0c4d4]">
                <Phone className="h-4 w-4" />
                <span>+34 900 000 000</span>
              </div>
              <div className="flex items-center space-x-2 text-[#a0c4d4]">
                <MapPin className="h-4 w-4" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#e8f6ff] font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              {footerLinks.producto.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[#a0c4d4] hover:text-[#b8ff60] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#e8f6ff] font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[#a0c4d4] hover:text-[#b8ff60] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0a4c5c] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#a0c4d4] text-sm">
            © 2024 Connect Ninjas. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#a0c4d4] hover:text-[#b8ff60] transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}