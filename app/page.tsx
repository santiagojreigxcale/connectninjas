import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import ComparisonTable from '@/components/ComparisonTable';
import PricingCards from '@/components/PricingCards';

export const metadata: Metadata = {
  title: 'ConnectNinjas - Conectores API automáticos on-prem',
  description: 'Descarga tu conector API en minutos. Integraciones 100% automáticas y on-prem. Sin vendor lock-in.',
  openGraph: {
    title: 'ConnectNinjas - Conectores API automáticos on-prem',
    description: 'Descarga tu conector API en minutos. Integraciones 100% automáticas y on-prem. Sin vendor lock-in.',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProcessSteps />
      <ComparisonTable />
      <PricingCards />
    </>
  );
}