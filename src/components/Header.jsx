import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phone = "5564981235976"
    const message = "Olá, Karla! Vim através do site e gostaria de uma consultoria sobre seguros e consórcios."
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const menuItems = [
    { id: 'inicio', label: 'Início', color: 'bg-green-500 hover:bg-green-600', textColor: 'text-white' },
    { id: 'sobre', label: 'Sobre Mim', color: 'bg-blue-500 hover:bg-blue-600', textColor: 'text-white' },
    { id: 'servicos', label: 'Serviços', color: 'bg-orange-500 hover:bg-orange-600', textColor: 'text-white' },
    { id: 'videos', label: 'Vídeos', color: 'bg-red-500 hover:bg-red-600', textColor: 'text-white' },
    { id: 'contato', label: 'Contato', color: 'bg-pink-500 hover:bg-pink-600', textColor: 'text-white' }
  ];

  return (
    <>
      {/* Top Bar com Contatos */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+5564981235976" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
              <Phone size={16} />
              <span>(64) 98123-5976</span>
            </a>
            <a href="mailto:karla@helfstein.com.br" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
              <Mail size={16} />
              <span>karla@helfstein.com.br</span>
            </a>
          </div>
          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-full transition-colors"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Header Principal */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KH</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Karla Helfstein</h1>
                <p className="text-sm text-gray-600">Consultora Patrimonial</p>
              </div>
            </motion.div>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${item.color} ${item.textColor}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('contato')}
              className="hidden lg:block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              📊 Simule Já!
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ maxHeight: isMobileMenuOpen ? 384 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 bg-gray-50 border-t">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${item.color} ${item.textColor}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contato')}
                className="w-full text-left px-4 py-3 rounded-lg font-bold bg-red-600 hover:bg-red-700 text-white transition-colors"
              >
                📊 Simule Já!
              </button>
            </nav>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}

export default Header

