import React from 'react';
import { Shield, Users, Target } from 'lucide-react';

function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre a Da Silva Gás
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Mais de 10 anos de experiência e compromisso com nossos clientes
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Missão</h3>
              <p className="mt-2 text-base text-gray-600">
                Fornecer gás com segurança e qualidade, garantindo a satisfação total dos nossos clientes.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Visão</h3>
              <p className="mt-2 text-base text-gray-600">
                Ser referência no mercado de distribuição de gás, reconhecida pela excelência no atendimento.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Valores</h3>
              <p className="mt-2 text-base text-gray-600">
                Comprometimento, segurança, pontualidade e respeito ao cliente.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Nossa História
            </h3>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Desde 2010, a Da Silva Gás tem se dedicado a fornecer o melhor serviço de distribuição de gás 
              para nossa comunidade. Começamos como uma pequena empresa familiar e crescemos graças à 
              confiança de nossos clientes e ao compromisso com a qualidade e segurança.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;