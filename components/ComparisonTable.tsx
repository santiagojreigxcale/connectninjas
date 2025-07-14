'use client';

import { Check, X, Clock, Euro, Wrench } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Tiempo de entrega',
    connectNinjas: {
      value: 'Horas',
      icon: Clock,
      positive: true,
    },
    manual: {
      value: '3-12 meses',
      icon: Clock,
      positive: false,
    },
  },
  {
    feature: 'Actualizaciones API',
    connectNinjas: {
      value: 'Automáticas',
      icon: Check,
      positive: true,
    },
    manual: {
      value: 'Trabajo humano',
      icon: Wrench,
      positive: false,
    },
  },
  {
    feature: 'Precio fijo',
    connectNinjas: {
      value: 'Sí (20k €)',
      icon: Euro,
      positive: true,
    },
    manual: {
      value: 'Variable',
      icon: X,
      positive: false,
    },
  },
  {
    feature: 'Mantenimiento',
    connectNinjas: {
      value: '2k €/año',
      icon: Check,
      positive: true,
    },
    manual: {
      value: 'Coste elevado',
      icon: X,
      positive: false,
    },
  },
  {
    feature: 'Documentación',
    connectNinjas: {
      value: 'Incluida',
      icon: Check,
      positive: true,
    },
    manual: {
      value: 'Adicional',
      icon: X,
      positive: false,
    },
  },
];

export default function ComparisonTable() {
  return (
    <section className="ninja-section bg-[#004a5c]">
      <div className="ninja-container">
        <div className="text-center mb-16">
          <h2 className="ninja-heading-lg mb-6">
            ¿Por qué Connect Ninjas?
          </h2>
          <p className="ninja-body-lg max-w-3xl mx-auto">
            Compara nuestra solución automatizada con el desarrollo manual tradicional.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full ninja-table">
              <thead>
                <tr>
                  <th className="text-left">Característica</th>
                  <th className="text-center">Connect Ninjas</th>
                  <th className="text-center">Desarrollo manual</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="ninja-hover-lift">
                    <td className="font-medium">{row.feature}</td>
                    <td className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <row.connectNinjas.icon 
                          className={`h-5 w-5 ${row.connectNinjas.positive ? 'text-[#b8ff60]' : 'text-red-400'}`} 
                        />
                        <span className={row.connectNinjas.positive ? 'text-[#b8ff60]' : 'text-red-400'}>
                          {row.connectNinjas.value}
                        </span>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <row.manual.icon 
                          className={`h-5 w-5 ${row.manual.positive ? 'text-[#b8ff60]' : 'text-red-400'}`} 
                        />
                        <span className={row.manual.positive ? 'text-[#b8ff60]' : 'text-red-400'}>
                          {row.manual.value}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}