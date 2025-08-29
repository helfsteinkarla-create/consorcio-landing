import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail } from 'lucide-react'
import atmaLogo from '../assets/atma-logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleWhatsAppClick = () => {
    const phone = "5564981235976"
    const message = "Olá! Gostaria de saber mais sobre consórcios contemplados."
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={atmaLogo} 
              alt="Atma Seguros e Consórcios" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </a>
            <a href="#simulador" className="text-gray-700 hover:text-blue-600 transition-colors">
              Simulador
            </a>
            <a href="#oportunidades" className="text-gray-700 hover:text-blue-600 transition-colors">
              Oportunidades
            </a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contato
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>(64) 98123-5976</span>
            </div>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={handleWhatsAppClick}
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                Início
              </a>
              <a 
                href="#simulador" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                Simulador
              </a>
              <a 
                href="#oportunidades" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                Oportunidades
              </a>
              <a 
                href="#contato" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                Contato
              </a>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>(64) 98123-5976</span>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleWhatsAppClick}
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

