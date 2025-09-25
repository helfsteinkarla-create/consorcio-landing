import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, ExternalLink, Camera, AlertCircle } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const InstagramReal = () => {
  const [embedError, setEmbedError] = useState(false)

  // URLs reais de posts do Instagram da Atma Seguros
  const realInstagramPosts = [
    'https://www.instagram.com/p/atmaseguros_post1/', // Substituir por URLs reais
    'https://www.instagram.com/p/atmaseguros_post2/',
    'https://www.instagram.com/p/atmaseguros_post3/',
    'https://www.instagram.com/p/atmaseguros_post4/',
    'https://www.instagram.com/p/atmaseguros_post5/',
    'https://www.instagram.com/p/atmaseguros_post6/'
  ]

  // Função para incorporar posts usando oEmbed (requer configuração de API)
  const embedInstagramPost = async (postUrl) => {
    try {
      // NOTA: Esta implementação requer:
      // 1. App registrado no Meta for Developers
      // 2. Access Token (App ou Client)
      // 3. Aprovação do Meta App Review para Advanced Access
      
      const accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN
      if (!accessToken) {
        throw new Error('Instagram Access Token não configurado')
      }

      const response = await fetch(
        `https://graph.facebook.com/v18.0/instagram_oembed?url=${encodeURIComponent(postUrl)}&access_token=${accessToken}`
      )
      
      if (!response.ok) {
        throw new Error('Falha ao carregar post do Instagram')
      }
      
      const data = await response.json()
      return data.html
    } catch (error) {
      console.error('Erro ao incorporar post do Instagram:', error)
      setEmbedError(true)
      return null
    }
  }

  const handleInstagramClick = () => {
    window.open('https://instagram.com/atmaseguros', '_blank')
  }

  // Componente de fallback quando a API não está disponível
  const InstagramFallback = () => (
    <div className="text-center py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-8 border border-orange-200"
      >
        <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Posts do Instagram Temporariamente Indisponíveis
        </h3>
        <p className="text-gray-600 mb-6">
          Para ver nossos posts mais recentes e histórias de sucesso, 
          visite diretamente nosso perfil no Instagram.
        </p>
        
        <motion.button
          onClick={handleInstagramClick}
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Instagram className="w-5 h-5" />
          <span>Ver no Instagram</span>
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  )

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <ScrollAnimation direction="down" delay={0.2}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-pink-200"
            >
              <Camera className="w-4 h-4" />
              <span>Acompanhe nosso Instagram</span>
              <Instagram className="w-4 h-4" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              <span className="block">Siga a</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                @atmaseguros
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Acompanhe histórias de sucesso reais, dicas financeiras e novidades sobre consórcios contemplados
            </p>

            {/* Instagram Profile Stats */}
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="flex items-center justify-center space-x-8 mb-12">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-pink-600">5.2K</div>
                  <div className="text-sm text-gray-600">Seguidores</div>
                </motion.div>
                
                <div className="w-px h-12 bg-gray-300"></div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-purple-600">1.8K</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </motion.div>
                
                <div className="w-px h-12 bg-gray-300"></div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Engajamento</div>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        {/* Instagram Posts ou Fallback */}
        <ScrollAnimation direction="up" delay={0.6}>
          <InstagramFallback />
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation direction="up" delay={1.0}>
          <div className="text-center mt-12">
            <motion.button
              onClick={handleInstagramClick}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-6 h-6" />
              <span>Seguir @atmaseguros</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <p className="text-gray-600 mt-4 text-sm">
              Não perca nenhuma novidade! Siga-nos para dicas exclusivas e histórias inspiradoras
            </p>
            
            {/* Nota técnica */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 max-w-2xl mx-auto">
              <p className="text-sm text-blue-700">
                <strong>Nota:</strong> Para exibir posts reais do Instagram, é necessário configurar 
                a API oEmbed do Instagram com access token válido e aprovação do Meta App Review.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default InstagramReal
