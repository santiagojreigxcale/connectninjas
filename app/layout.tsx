import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Connect Ninjas - Conectores API automáticos on-prem',
  description: 'Integraciones API 100% automáticas y on-prem. Descargad vuestro conector en minutos. Sin vendor lock-in.',
  keywords: 'integraciones API on-prem, conector C#, NDC integration, conectores automáticos',
  authors: [{ name: 'Connect Ninjas' }],
  creator: 'Connect Ninjas',
  publisher: 'Connect Ninjas',
  metadataBase: new URL('https://connectninjas.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://connectninjas.com',
    siteName: 'Connect Ninjas',
    title: 'Connect Ninjas - Conectores API automáticos on-prem',
    description: 'Integraciones API 100% automáticas y on-prem. Descargad vuestro conector en minutos. Sin vendor lock-in.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Connect Ninjas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@connectninjas',
    creator: '@connectninjas',
    title: 'Connect Ninjas - Conectores API automáticos on-prem',
    description: 'Integraciones API 100% automáticas y on-prem. Descargad vuestro conector en minutos. Sin vendor lock-in.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Connect Ninjas',
  description: 'Artefactos de integración API generados y mantenidos automáticamente mediante IA, entregados para ejecución on-prem',
  url: 'https://connectninjas.com',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Windows, Linux, macOS',
  programmingLanguage: 'C#',
  offers: {
    '@type': 'Offer',
    price: '20000',
    priceCurrency: 'EUR',
    description: 'Conector nuevo - pago único',
  },
  provider: {
    '@type': 'Organization',
    name: 'Connect Ninjas',
    url: 'https://connectninjas.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(inter.className, 'min-h-screen flex flex-col')}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}