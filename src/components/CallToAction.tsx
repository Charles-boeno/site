import React from 'react';
import { Apple as WhatsApp } from 'lucide-react';

function CallToAction() {
  return (
    <section className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Pronto para fazer seu pedido?</span>
          <span className="block text-blue-200">Entre em contato conosco agora mesmo.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://wa.me/45 9859-9098"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              <WhatsApp className="w-5 h-5 mr-2" />
              Fale pelo WhatsApp
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="tel:45 9859-9098"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction