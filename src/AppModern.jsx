import React from 'react';
import { motion } from 'framer-motion';
import './styles/animations.css';

// Componentes modernizados
import Header from './components/Header';
import HeroModern from './components/HeroModern';
import ModalidadesSection from './components/ModalidadesSection';
import SobreAtmaSection from './components/SobreAtmaSection';
import ContactFormModern from './components/ContactFormModern';
import Simulator from './components/Simulator';
import InstagramEmbed from './components/InstagramEmbed';
import ChatbotRAG from './components/ChatbotRAG';
import Footer from './components/Footer';

function AppModern() {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header com navegação moderna */}
      <Header />
      
      {/* Hero Section - Inspirado na DW com slides */}
      <HeroModern />
      
      {/* Seção de Modalidades - Grid organizado */}
      <ModalidadesSection />
      
      {/* Formulário de Interesse - Posicionado estrategicamente */}
      <ContactFormModern />
      
      {/* Simulador - Mantido funcional */}
      <Simulator />
      
      {/* Sobre a Atma - Nova seção com vídeos */}
      <SobreAtmaSection />
      
      {/* Instagram - Posts reais integrados */}
      <InstagramEmbed />
      
      {/* Chatbot RAG - Assistente inteligente */}
      <ChatbotRAG />
      
      {/* Footer - Mantido com atualizações */}
      <Footer />
    </motion.div>
  );
}

export default AppModern;
