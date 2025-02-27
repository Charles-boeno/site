import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <section id="inicio">
          <Hero />
          <About />
        </section>
        <section id="produtos">
          <Products />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <WhyChooseUs />
        <section id="contato">
          <CallToAction />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App
