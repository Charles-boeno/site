import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Da Silva Gás</h3>
            <p className="text-gray-400">
              Sua fornecedora de gás de confiança, atendendo com qualidade e segurança desde 2010.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                0800 123 456
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                contato@dasilvagás.com.br
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Av. Principal, 1000 - Centro
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Horário</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Clock className="h-5 w-5 mr-2" />
                Segunda a Sábado: 7h às 21h
              </li>
              <li className="text-gray-400 ml-7">
                Domingo: 8h às 18h
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-white">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Da Silva Gás. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer