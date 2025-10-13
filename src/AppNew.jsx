import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Componentes Reutilizados
import Header from './components/Header';
import Footer from './components/Footer';
import ChatbotRAG from './components/ChatbotRAG';
import AdminRoute from './components/AdminRoute';

// Novos Componentes Estruturais
import HeroNew from './components/HeroNew';
import PainPointsSection from './components/PainPointsSection';
import HowItWorksSection from './components/HowItWorksSection';
import ServicesSection from './components/ServicesSection';
import AboutKarlaSection from './components/AboutKarlaSection';
import VideoSection from './components/VideoSection';
import TestimonialsSection from './components/TestimonialsSection';
import B2BSection from './components/B2BSection';
import FAQSection from './components/FAQSection';
import ContactFormNew from './components/ContactFormNew';
import WhatsAppFloat from './components/WhatsAppFloat';

// Estilos
import './App.css';
import './styles/animations.css';

function AppNew() {
  const [currentRoute, setCurrentRoute] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentRoute(hash === 'admin' ? 'admin' : 'home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentRoute === 'admin') {
    return <AdminRoute />;
  }

  return (
    <motion.div
      className="bg-white antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <section id="inicio">
          <HeroNew />
        </section>
        <PainPointsSection />
        <HowItWorksSection />
        <section id="servicos">
          <ServicesSection />
        </section>
        <section id="sobre">
          <AboutKarlaSection />
        </section>
        <section id="videos">
          <VideoSection />
        </section>
        <TestimonialsSection />
        <B2BSection />
        <FAQSection />
        <section id="contato">
          <ContactFormNew />
        </section>
      </main>
      <Footer />
      <ChatbotRAG />
      <WhatsAppFloat />
      
      {/* Link discreto para admin no footer */}
      <div className="text-center py-2 bg-gray-900">
        <a 
          href="#admin" 
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          Área Administrativa
        </a>
      </div>
    </motion.div>
  );
}

export default AppNew;

