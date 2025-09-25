import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Simulator from './components/Simulator'
import ContactForm from './components/ContactForm'
import AdminRoute from './components/AdminRoute'
import Footer from './components/Footer'
import './App.css'

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
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Simulator />
        
        {/* Placeholder sections for future components */}
        <section id="oportunidades" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Oportunidades Disponíveis
            </h2>
            <p className="text-gray-600 mb-8">
              Em breve: Grid de cartas contempladas
            </p>
          </div>
        </section>

        {/* Formulário de Contato */}
        <ContactForm />
      </main>
      <Footer />
      
      {/* Link discreto para admin no footer */}
      <div className="text-center py-2 bg-gray-900">
        <a 
          href="#admin" 
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          Área Administrativa
        </a>
      </div>
    </div>
  )
}

export default App

