import React from 'react';
import { Home, Building2, Factory, Truck } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Gás Residencial',
      description: 'Botijões P13 e P45 para sua casa',
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Gás Comercial',
      description: 'Soluções para restaurantes e comércios',
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Gás Industrial',
      description: 'Fornecimento para indústrias',
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Entrega Expressa',
      description: 'Entrega em até 40 minutos',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Oferecemos soluções completas em gás para sua casa ou negócio
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600">{service.icon}</div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services