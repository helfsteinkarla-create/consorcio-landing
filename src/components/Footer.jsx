import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import atmaLogo from '../assets/atma-logo.png'

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phone = "5564981235976"
    const message = "Olá, Karla! Vim através do site e gostaria de uma consultoria sobre seguros e consórcios."
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleInstagramAtma = () => {
    window.open('https://instagram.com/atmaseguros', '_blank')
  }

  const handleInstagramKarla = () => {
    window.open('https://instagram.com/karlahelfstein', '_blank')
  }

  const handleInstagramCarlos = () => {
    window.open('https://instagram.com/carlos.atma', '_blank')
  }

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/profile.php?id=100011839336247', '_blank')
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Karla Helfstein</h3>
                <p className="text-sm text-gray-400">Consultora Patrimonial</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Especialista em planejamento patrimonial, seguros e consórcios. 
              Mais de 15 anos de experiência ajudando você a proteger e fazer crescer seu patrimônio.
            </p>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-200">Siga-nos no Instagram:</h4>
              <div className="space-y-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start p-2 hover:bg-blue-600 text-left"
                  onClick={handleInstagramAtma}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @atmaseguros
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start p-2 hover:bg-blue-600 text-left"
                  onClick={handleInstagramKarla}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @karlahelfstein
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start p-2 hover:bg-blue-600 text-left"
                  onClick={handleInstagramCarlos}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @carlos.atma
                </Button>
              </div>
              <div className="pt-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 hover:bg-blue-600"
                  onClick={handleFacebookClick}
                >
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">
                Início
              </a>
              <a href="#simulador" className="text-gray-300 hover:text-white transition-colors">
                Simulador
              </a>
              <a href="#oportunidades" className="text-gray-300 hover:text-white transition-colors">
                Oportunidades
              </a>
              <a href="#contato" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nossos Produtos</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-gray-300">Consórcios de Imóveis</span>
              <span className="text-gray-300">Consórcios de Veículos</span>
              <span className="text-gray-300">Consultoria Especializada</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(64) 98123-5976</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">atma@atmaseguros.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  R. Benedito Bueno, Chácara C<br />
                  Vila São Simão<br />
                  Indiara - GO, 75955-000
                </span>
              </div>
              <div className="pt-3">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleWhatsAppClick}
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Karla Helfstein - Consultora Patrimonial. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

