import React from 'react';
import { Shield, Clock, Truck, CreditCard } from 'lucide-react';

function WhyChooseUs() {
  const reasons = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Entrega Rápida',
      description: 'Entregamos em até 40 minutos após seu pedido',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Segurança Garantida',
      description: 'Produtos certificados e equipe treinada',
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Várias Formas de Pagamento',
      description: 'Aceitamos PIX, cartões e dinheiro',
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Entrega Gratuita',
      description: 'Para toda nossa área de cobertura',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Por que nos escolher?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Compromisso com qualidade e satisfação do cliente
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                {reason.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{reason.title}</h3>
              <p className="mt-2 text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs