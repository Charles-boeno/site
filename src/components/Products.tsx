import React from 'react';

function Products() {
  const products = [
    {
      name: 'Botijão P13',
      image: '.img/Botijão P13.png',
      price: 'R$ 110,00',
      description: 'Gás de cozinha residencial - 13kg',
      whatsappMessage: 'Olá! Gostaria de fazer um pedido de um Botijão P13.'
    },
    {
      name: 'Botijão P45',
      image: 'https://images.unsplash.com/photo-1672060058797-41caf3b0e600?auto=format&fit=crop&q=80',
      price: 'R$ 360,00',
      description: 'Ideal para comércios - 45kg',
      whatsappMessage: 'Olá! Gostaria de fazer um pedido de um Botijão P45.'
    },
    {
      name: 'Kit Regulador',
      image: 'https://images.unsplash.com/photo-1635274605638-d44babc08a4f?auto=format&fit=crop&q=80',
      price: 'R$ 100;00',
      description: 'Regulador de pressão + mangueira',
      whatsappMessage: 'Olá! Gostaria de comprar um Kit Regulador.'
    },
    {
      name: 'Botijão Industrial',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80',
      price: 'R$ 480,00',
      description: 'Para uso industrial - 90kg',
      whatsappMessage: 'Olá! Gostaria de fazer um pedido de um Botijão Industrial.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Produtos
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Qualidade e segurança para sua casa ou negócio
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <p className="mt-4 text-2xl font-bold text-blue-600">{product.price}</p>
                <a
                  href={`https://wa.me/5500000000000?text=${encodeURIComponent(product.whatsappMessage)}`}
                  className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;