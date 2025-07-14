import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#00384d]">
      <div className="ninja-container">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-[#b8ff60] mb-4">404</h1>
            <h2 className="ninja-heading-lg mb-6">Página no encontrada</h2>
            <p className="ninja-body-lg max-w-2xl mx-auto">
              Lo sentimos, la página que buscáis no existe o ha sido movida.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="ninja-button ninja-hover-lift">
                <Home className="mr-2 h-4 w-4" />
                Ir al inicio
              </Button>
            </Link>
            <Link href="/contacto">
              <Button className="ninja-button-secondary ninja-hover-lift">
                <Search className="mr-2 h-4 w-4" />
                Contactar soporte
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}