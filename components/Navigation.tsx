'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Producto', href: '/producto' },
  { name: 'Precios', href: '/precios' },
  { name: 'Recursos', href: '/recursos' },
  { name: 'Sobre nosotros', href: '/sobre-nosotros' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
      isScrolled 
        ? 'bg-[#00384d]/95 backdrop-blur-sm border-b border-[#0a4c5c] shadow-lg' 
        : 'bg-transparent'
    )}>
      <div className="ninja-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 ninja-hover-lift">
            <Zap className="h-8 w-8 text-[#b8ff60]" />
            <span className="text-xl font-bold text-[#e8f6ff]">ConnectNinjas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[#b8ff60]',
                  pathname === item.href
                    ? 'text-[#b8ff60]'
                    : 'text-[#e8f6ff]'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contacto">
              <Button className="ninja-button">
                Solicitar demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#e8f6ff] hover:bg-[#004a5c] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#00384d]/95 backdrop-blur-sm border-b border-[#0a4c5c] shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block text-sm font-medium transition-colors hover:text-[#b8ff60]',
                    pathname === item.href
                      ? 'text-[#b8ff60]'
                      : 'text-[#e8f6ff]'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#0a4c5c]">
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                  <Button className="ninja-button w-full">
                    Solicitar demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}