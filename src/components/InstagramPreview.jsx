import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle, ExternalLink, Users, Camera } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const InstagramPreview = () => {
  // Posts simulados do Instagram da Atma Corretora
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop&crop=center",
      caption: "🏠 Mais uma família realizando o sonho da casa própria com nosso consórcio contemplado! Parabéns aos novos proprietários! 🎉",
      likes: 127,
      comments: 23,
      date: "2 dias"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop&crop=center",
      caption: "🚗 Carro zero na garagem! Nosso cliente conseguiu sua carta contemplada e já está aproveitando seu novo veículo. Você também pode! 💪",
      likes: 89,
      comments: 15,
      date: "4 dias"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&crop=center",
      caption: "🏢 Investimento em imóvel comercial aprovado! Nossos consórcios também são ideais para quem quer empreender. Fale conosco! 📈",
      likes: 156,
      comments: 31,
      date: "1 semana"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center",
      caption: "✨ Dica da semana: Consórcios contemplados têm crédito liberado na hora! Sem burocracia, sem análise de crédito rigorosa. Simule já! 🎯",
      likes: 203,
      comments: 42,
      date: "1 semana"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=400&fit=crop&crop=center",
      caption: "🎉 Equipe Atma celebrando mais uma conquista! Obrigado pela confiança de todos os nossos clientes. Somos #1 em satisfação! 🏆",
      likes: 94,
      comments: 18,
      date: "2 semanas"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
      caption: "📚 Educação financeira é fundamental! Acompanhe nossas dicas para fazer o melhor investimento da sua vida. Conhecimento é poder! 💡",
      likes: 67,
      comments: 12,
      date: "2 semanas"
    }
  ]

  const handleInstagramClick = () => {
    window.open('https://instagram.com/atmaseguros', '_blank')
  }

  const handlePostClick = (postId) => {
    // Simula redirecionamento para o post específico
    window.open('https://instagram.com/atmaseguros', '_blank')
  }

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
              Acompanhe histórias de sucesso, dicas financeiras e novidades sobre consórcios contemplados
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

        {/* Instagram Posts Grid */}
        <ScrollAnimation direction="up" delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                onClick={() => handlePostClick(post.id)}
              >
                {/* Post Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={`Post ${post.id}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{post.comments}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-3">
                    {post.caption}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3 text-red-500" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3 text-blue-500" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation direction="up" delay={1.0}>
          <div className="text-center">
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
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default InstagramPreview
