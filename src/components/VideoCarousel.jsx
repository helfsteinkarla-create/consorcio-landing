import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react'

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Lista de vídeos com informações
  const videos = [
    {
      id: 'adv9mw3oJ7Q',
      url: 'https://youtube.com/shorts/adv9mw3oJ7Q?feature=share',
      title: 'Como Funciona o Consórcio Contemplado',
      description: 'Entenda de forma simples como você pode ter acesso imediato ao crédito através de cartas contempladas. Realize seus sonhos sem esperar!',
      category: 'Educativo',
      duration: '0:45'
    },
    {
      id: 'l6tsvgJSJ7s',
      url: 'https://youtube.com/shorts/l6tsvgJSJ7s?feature=share',
      title: 'Vantagens do Consórcio vs Financiamento',
      description: 'Descubra por que o consórcio pode ser uma opção mais inteligente que o financiamento tradicional. Taxas menores e mais flexibilidade!',
      category: 'Comparativo',
      duration: '0:52'
    },
    {
      id: 'ohvzg3UuCeg',
      url: 'https://youtube.com/shorts/ohvzg3UuCeg?feature=share',
      title: 'Documentos Necessários para Consórcio',
      description: 'Saiba exatamente quais documentos você precisa para aderir ao consórcio. Processo simples e descomplicado!',
      category: 'Prático',
      duration: '0:38'
    },
    {
      id: 'pYVeAJWN5gc',
      url: 'https://youtube.com/shorts/pYVeAJWN5gc?feature=share',
      title: 'Cases de Sucesso - Clientes Atma',
      description: 'Conheça histórias reais de clientes que realizaram seus sonhos através dos consórcios da Atma. Inspiração e resultados!',
      category: 'Depoimentos',
      duration: '1:02'
    }
  ]

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }, 8000) // Troca a cada 8 segundos

    return () => clearInterval(interval)
  }, [isAutoPlaying, videos.length])

  // Navegação do carrossel
  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
    setIsAutoPlaying(false)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
    setIsAutoPlaying(false)
  }

  const goToVideo = (index) => {
    setCurrentVideo(index)
    setIsAutoPlaying(false)
  }

  // Abrir vídeo no YouTube
  const openVideo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Play className="w-4 h-4 mr-2" />
            Conteúdo Educativo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Aprenda com Nossos Especialistas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vídeos educativos sobre consórcios, dicas práticas e cases de sucesso para você tomar a melhor decisão
          </p>
        </motion.div>

        {/* Carrossel Principal */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Container do Vídeo Principal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Vídeo Embed */}
              <div className="relative aspect-video bg-gray-900">
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
                      src={`https://www.youtube.com/embed/${videos[currentVideo].id}?rel=0&modestbranding=1&showinfo=0`}
                      title={videos[currentVideo].title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Overlay com informações */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                        {videos[currentVideo].category}
                      </span>
                      <span className="text-white/80 text-sm">
                        {videos[currentVideo].duration}
                      </span>
                    </div>
                    <button
                      onClick={() => openVideo(videos[currentVideo].url)}
                      className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Ver no YouTube</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Informações do Vídeo */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVideo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {videos[currentVideo].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {videos[currentVideo].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controles de Navegação */}
              <button
                onClick={prevVideo}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <button
                onClick={nextVideo}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </motion.div>

            {/* Indicadores de Vídeo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mt-8 space-x-3"
            >
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => goToVideo(index)}
                  className={`relative group ${
                    index === currentVideo
                      ? 'bg-blue-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  } w-3 h-3 rounded-full transition-all duration-300`}
                >
                  {/* Tooltip com título do vídeo */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                      {video.title}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Thumbnails dos Outros Vídeos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {videos.map((video, index) => {
              if (index === currentVideo) return null
              
              return (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                  onClick={() => goToVideo(index)}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Play className="w-6 h-6 text-gray-700 ml-1" />
                      </div>
                    </div>
                    
                    {/* Badge da categoria */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                        {video.category}
                      </span>
                    </div>
                    
                    {/* Duração */}
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                        {video.duration}
                      </span>
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Gostou do Conteúdo? Vamos Conversar!
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para esclarecer suas dúvidas e criar a estratégia perfeita para seus objetivos patrimoniais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Agendar Consulta Gratuita
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
                >
                  Fazer Simulação
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VideoCarousel
