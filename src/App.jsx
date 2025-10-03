import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Simulator from './components/Simulator'
import ContactForm from './components/ContactForm'
import InstagramEmbed from './components/InstagramEmbed'
import ChatbotRAG from './components/ChatbotRAG'
import AdminRoute from './components/AdminRoute'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import './App.css'
import './styles/animations.css'

function App() {
  const [currentRoute, setCurrentRoute] = useState('home')

  useEffect(() => {
    // Verificar hash da URL para navegação simples
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove o #
      if (hash === 'admin') {
        setCurrentRoute('admin')
      } else {
        setCurrentRoute('home')
      }
    }

    // Verificar hash inicial
    handleHashChange()

    // Escutar mudanças no hash
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // Renderizar painel administrativo
  if (currentRoute === 'admin') {
    return <AdminRoute />
  }

  // Renderizar landing page normal
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Hero />
        
        {/* Formulário de Contato */}
        <ContactForm />
        
        <Simulator />
        
        {/* Seção de Oportunidades Modernizada */}
        <section id="oportunidades" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
                <span className="block">Oportunidades</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Disponíveis
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Explore nossa seleção de cartas contempladas e encontre a oportunidade perfeita para você
              </p>
              
              <motion.div 
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[
                  { title: 'Imóveis', count: '500+', icon: '🏠' },
                  { title: 'Veículos', count: '300+', icon: '🚗' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">{item.count}</p>
                    <p className="text-gray-600">cartas disponíveis</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Instagram Embed */}
        <InstagramEmbed />
      </main>
      <Footer />
      
      {/* Chatbot RAG */}
      <ChatbotRAG />
      
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
  )
}

export default App

