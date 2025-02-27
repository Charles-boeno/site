import React from 'react';
import { ShoppingCart } from 'lucide-react';

function Hero() {
  return (
    <div className="relative bg-blue-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80"
          alt="Gás residencial"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Qualidade e Confiança em Cada Entrega
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Entrega rápida, segura e com o melhor preço da região. Peça agora e receba em até 40 minutos!
        </p>
        <div className="mt-10 flex space-x-4">
          <a
            href="#produtos"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Peça seu gás
          </a>
          <a
            href="https://wa.me/45 9859-9098"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 transition-colors"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;