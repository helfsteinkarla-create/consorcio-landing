import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Star, Play, Shield, Zap, TrendingUp, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ScrollAnimation from './ScrollAnimation'
import heroBackground from '../assets/new-hero-background.png'
import portoConsorcio from '../assets/porto-consorcio.webp'
import hsConsorcio from '../assets/hs-consorcio.png'
import volkswagenConsorcio from '../assets/volkswagen-consorcio.jpg'

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0)

  // Lista de vídeos sem descrições longas
  const videos = [
    {
      id: 'adv9mw3oJ7Q',
      url: 'https://youtube.com/shorts/adv9mw3oJ7Q?feature=share',
      title: 'Como Funciona o Consórcio Contemplado'
    },
    {
      id: 'l6tsvgJSJ7s', 
      url: 'https://youtube.com/shorts/l6tsvgJSJ7s?feature=share',
      title: 'Vantagens do Consórcio vs Financiamento'
    },
    {
      id: 'ohvzg3UuCeg',
      url: 'https://youtube.com/shorts/ohvzg3UuCeg?feature=share', 
      title: 'Documentos Necessários para Consórcio'
    },
    {
      id: 'pYVeAJWN5gc',
      url: 'https://youtube.com/shorts/pYVeAJWN5gc?feature=share',
      title: 'Cases de Sucesso - Clientes Atma'
    }
  ]

  const benefits = [
    "Realize seus sonhos com segurança",
    "Atendimento personalizado e especializado", 
    "Soluções financeiras inteligentes",
    "Experiência comprovada no mercado"
  ]

  // Navegação dos vídeos
  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const openVideo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToOpportunities = () => {
    document.getElementById('oportunidades')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Casa dos sonhos - Consórcio Atma"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradiente para melhor legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      </div>
      
      {/* Background Effects Sutis */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <ScrollAnimation direction="down" delay={0.2}>
              <motion.div 
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </motion.div>
                <span>Mais de 5.000 clientes realizaram seus sonhos</span>
              </motion.div>
            </ScrollAnimation>

            {/* Main Headline */}
            <div className="space-y-6">
              <ScrollAnimation direction="left" delay={0.4}>
                <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Atma, especialista
                  </motion.span>
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    em soluções patrimoniais
                  </motion.span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation direction="left" delay={0.6}>
                <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl">
                  Atma, sua consultoria profissional em consórcio. Trabalhamos com as maiores administradoras do Brasil.
                </p>
              </ScrollAnimation>
              
              {/* Logos das Administradoras */}
              <ScrollAnimation direction="up" delay={0.7}>
                <div className="mt-8">
                  <p className="text-sm text-gray-300 mb-4 text-center">Parceiros de confiança:</p>
                  <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img 
                        src={portoConsorcio} 
                        alt="Porto Seguro Consórcio" 
                        className="h-12 w-auto object-contain"
                      />
                    </motion.div>
                    
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img 
                        src={hsConsorcio} 
                        alt="HS Consórcio" 
                        className="h-12 w-auto object-contain"
                      />
                    </motion.div>
                    
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img 
                        src={volkswagenConsorcio} 
                        alt="Volkswagen Consórcio Nacional" 
                        className="h-12 w-auto object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Benefits */}
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const icons = [Shield, Zap, TrendingUp, CheckCircle]
                  const Icon = icons[index] || CheckCircle
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                      whileHover={{ 
                        scale: 1.02, 
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-100">{benefit}</span>
                    </motion.div>
                  )
                })}
              </div>
            </ScrollAnimation>

            {/* CTAs */}
            <ScrollAnimation direction="up" delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
                    onClick={scrollToContact}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Simular Agora
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg backdrop-blur-sm bg-white/10 hover:shadow-xl transition-all duration-300"
                    onClick={scrollToOpportunities}
                  >
                    Ver Oportunidades
                  </Button>
                </motion.div>
              </div>
            </ScrollAnimation>

            {/* Social Proof */}
            <ScrollAnimation direction="up" delay={1.2}>
              <div className="flex items-center justify-between pt-8 border-t border-white/20">
                <motion.div 
                  className="text-center flex-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    1000+
                  </motion.div>
                  <div className="text-sm text-gray-200 mt-1">Cartas Disponíveis</div>
                </motion.div>
                
                <div className="w-px h-12 bg-white/20 mx-4"></div>
                
                <motion.div 
                  className="text-center flex-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    5000+
                  </motion.div>
                  <div className="text-sm text-gray-200 mt-1">Clientes Satisfeitos</div>
                </motion.div>
                
                <div className="w-px h-12 bg-white/20 mx-4"></div>
                
                <motion.div 
                  className="text-center flex-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    98%
                  </motion.div>
                  <div className="text-sm text-gray-200 mt-1">Taxa de Aprovação</div>
                </motion.div>
              </div>
            </ScrollAnimation>

            {/* Instagram Links */}
            <ScrollAnimation direction="up" delay={1.4}>
              <div className="pt-6 border-t border-white/20">
                <p className="text-gray-100 text-sm mb-3">Siga-nos no Instagram:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { handle: '@atmaseguros', url: 'https://instagram.com/atmaseguros' },
                    { handle: '@karlahelfstein', url: 'https://instagram.com/karlahelfstein' },
                    { handle: '@carlos.atma', url: 'https://instagram.com/carlos.atma' }
                  ].map((account, index) => (
                    <motion.a 
                      key={account.handle}
                      href={account.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 rounded-full text-sm transition-all duration-300 border border-white/20 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.6 + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {account.handle}
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Vídeo YouTube */}
          <ScrollAnimation direction="right" delay={0.5}>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <ScrollAnimation direction="down" delay={0.7}>
                    <div className="text-center">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        Veja Como Funciona
                      </h3>
                      <p className="text-blue-100">Entenda o processo de consórcio contemplado</p>
                    </div>
                  </ScrollAnimation>
                  
                  {/* Carrossel de Vídeos */}
                  <ScrollAnimation direction="scale" delay={0.9}>
                    <div className="relative">
                      {/* Vídeo Principal */}
                      <motion.div 
                        className="relative w-full overflow-hidden rounded-xl shadow-2xl"
                        style={{ paddingBottom: '177.78%' }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentVideo}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                          >
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${videos[currentVideo].id}?rel=0&modestbranding=1`}
                              title={videos[currentVideo].title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </motion.div>
                        </AnimatePresence>

                        {/* Controles de Navegação */}
                        <button
                          onClick={prevVideo}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 z-10"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>

                        <button
                          onClick={nextVideo}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 z-10"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>

                        {/* Overlay com informações */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <AnimatePresence mode="wait">
                                <motion.h4
                                  key={currentVideo}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.3 }}
                                  className="text-white font-semibold text-sm"
                                >
                                  {videos[currentVideo].title}
                                </motion.h4>
                              </AnimatePresence>
                            </div>
                            <button
                              onClick={() => openVideo(videos[currentVideo].url)}
                              className="flex items-center space-x-1 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors text-xs"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>YouTube</span>
                            </button>
                          </div>
                        </div>
                      </motion.div>

                      {/* Indicadores de Vídeo */}
                      <div className="flex justify-center mt-4 space-x-2">
                        {videos.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentVideo(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentVideo
                                ? 'bg-blue-400 w-6'
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Thumbnails dos Outros Vídeos */}
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {videos.map((video, index) => {
                          if (index === currentVideo) return null
                          return (
                            <motion.button
                              key={video.id}
                              onClick={() => setCurrentVideo(index)}
                              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <img
                                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                                  <Play className="w-3 h-3 text-gray-700 ml-0.5" />
                                </div>
                              </div>
                            </motion.button>
                          )
                        })}
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation direction="up" delay={1.1}>
                    <div className="grid grid-cols-2 gap-3 text-center text-sm">
                      {[
                        { type: 'Imóveis', range: 'R$ 50k - R$ 800k', color: 'from-blue-400 to-cyan-400' },
                        { type: 'Veículos', range: 'R$ 20k - R$ 200k', color: 'from-green-400 to-emerald-400' }
                      ].map((item, index) => (
                        <motion.div 
                          key={item.type}
                          className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.3 + (index * 0.1) }}
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
                        >
                          <div className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.type}
                          </div>
                          <div className="text-xs text-blue-200 mt-1">{item.range}</div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation direction="up" delay={1.3}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
                        onClick={scrollToContact}
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Formulário de Interesse
                      </Button>
                    </motion.div>
                  </ScrollAnimation>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Hero

