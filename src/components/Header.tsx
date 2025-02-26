import React from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#inicio" className="text-2xl font-bold text-blue-600">Da Silva Gás</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
            <a href="#sobre" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#produtos" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition-colors">Produtos</a>
            <a href="#servicos" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#contato" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0800123456" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              0800 123 456
            </a>
            <a 
              href="#produtos"
              onClick={handleNavClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Peça Agora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Início</a>
            <a href="#sobre" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#produtos" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Produtos</a>
            <a href="#servicos" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#contato" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;