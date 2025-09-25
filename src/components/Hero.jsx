import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Star } from 'lucide-react'

const Hero = () => {
  const benefits = [
    "Crédito liberado imediatamente",
    "Sem análise de crédito rigorosa", 
    "Parcelas que cabem no seu bolso",
    "Mais de 1000 cartas disponíveis"
  ]

  const scrollToSimulator = () => {
    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToOpportunities = () => {
    document.getElementById('oportunidades')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>Mais de 5.000 clientes realizaram seus sonhos</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Realize seu sonho
                <span className="block text-yellow-400">hoje mesmo!</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Cartas de consórcio contempladas com crédito liberado na hora. 
                Compre seu imóvel, veículo ou realize seus projetos sem burocracia.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
                onClick={scrollToSimulator}
              >
                Simular Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg"
                onClick={scrollToOpportunities}
              >
                Ver Oportunidades
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-blue-200">Cartas Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-blue-200">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-blue-200">Taxa de Aprovação</div>
              </div>
            </div>
          </div>

          {/* Vídeo YouTube */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Veja Como Funciona</h3>
                  <p className="text-blue-100">Entenda o processo de consórcio contemplado</p>
                </div>
                
                {/* YouTube Video Embed */}
                <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/adv9mw3oJ7Q"
                    title="Como funciona o consórcio contemplado - Atma"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-bold">Imóveis</div>
                    <div className="text-xs text-blue-200">R$ 50k - R$ 800k</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-bold">Veículos</div>
                    <div className="text-xs text-blue-200">R$ 20k - R$ 200k</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-bold">Serviços</div>
                    <div className="text-xs text-blue-200">R$ 10k - R$ 100k</div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                  onClick={scrollToSimulator}
                >
                  Começar Simulação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

