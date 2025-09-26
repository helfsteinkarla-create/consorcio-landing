import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, ExternalLink, Users, Heart, MessageCircle } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const InstagramEmbed = () => {
  // URLs dos perfis do Instagram
  const instagramProfiles = [
    {
      username: 'atmaseguros',
      url: 'https://www.instagram.com/atmaseguros',
      displayName: '@atmaseguros',
      description: 'Perfil oficial da Atma Seguros',
      followers: '5.2K',
      posts: '1.8K'
    },
    {
      username: 'karlahelfstein',
      url: 'https://www.instagram.com/karlahelfstein',
      displayName: '@karlahelfstein',
      description: 'Karla Helfstein - Especialista',
      followers: '3.1K',
      posts: '892'
    },
    {
      username: 'carlos.atma',
      url: 'https://www.instagram.com/carlos.atma',
      displayName: '@carlos.atma',
      description: 'Carlos - Atma Consórcios',
      followers: '2.8K',
      posts: '654'
    }
  ]

  // Função para abrir perfil do Instagram
  const openInstagramProfile = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Componente de card do perfil
  const ProfileCard = ({ profile, index }) => (
    <ScrollAnimation direction="up" delay={0.2 + (index * 0.1)}>
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        whileHover={{ 
          scale: 1.02,
          y: -5,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => openInstagramProfile(profile.url)}
      >
        {/* Header do perfil */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-800">{profile.displayName}</h3>
            <p className="text-gray-600 text-sm">{profile.description}</p>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400" />
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="font-bold text-blue-600">{profile.followers}</span>
            </div>
            <span className="text-xs text-gray-500">Seguidores</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Instagram className="w-4 h-4 text-purple-500" />
              <span className="font-bold text-purple-600">{profile.posts}</span>
            </div>
            <span className="text-xs text-gray-500">Posts</span>
          </div>
        </div>

        {/* Call to Action */}
        <motion.button
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Instagram className="w-5 h-5" />
          <span>Seguir no Instagram</span>
        </motion.button>

        {/* Indicador de posts recentes */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Posts recentes</span>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Heart className="w-3 h-3 text-red-400" />
                <span>95%</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-3 h-3 text-blue-400" />
                <span>Alto</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollAnimation>
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
              <Instagram className="w-4 h-4" />
              <span>Siga nossos especialistas</span>
              <Users className="w-4 h-4" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              <span className="block">Conecte-se com</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Nossa Equipe
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acompanhe dicas exclusivas, histórias de sucesso e novidades sobre consórcios diretamente dos nossos especialistas
            </p>
          </div>
        </ScrollAnimation>

        {/* Grid de Perfis */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {instagramProfiles.map((profile, index) => (
            <ProfileCard key={profile.username} profile={profile} index={index} />
          ))}
        </div>

        {/* Call to Action Global */}
        <ScrollAnimation direction="up" delay={0.8}>
          <div className="text-center">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Não perca nenhuma novidade!
              </h3>
              <p className="text-gray-600 mb-6">
                Siga todos os nossos perfis para receber dicas exclusivas, histórias inspiradoras e as melhores oportunidades em consórcios contemplados.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {instagramProfiles.map((profile) => (
                  <motion.button
                    key={profile.username}
                    onClick={() => openInstagramProfile(profile.url)}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-4 h-4" />
                    <span>{profile.displayName}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollAnimation>

        {/* Nota sobre posts reais */}
        <ScrollAnimation direction="up" delay={1.0}>
          <div className="mt-8 text-center">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 max-w-2xl mx-auto">
              <p className="text-sm text-blue-700">
                <strong>💡 Dica:</strong> Clique nos cards acima para visitar os perfis reais no Instagram e ver os posts mais recentes da nossa equipe!
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default InstagramEmbed
