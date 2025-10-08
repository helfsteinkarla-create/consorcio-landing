import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Users, Award, Target, Heart } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const SobreAtmaSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      id: 'adv9mw3oJ7Q',
      url: 'https://youtube.com/shorts/adv9mw3oJ7Q?feature=share',
      title: 'Conheça a Atma Corretora',
      description: 'Nossa história e compromisso com você'
    },
    {
      id: 'l6tsvgJSJ7s', 
      url: 'https://youtube.com/shorts/l6tsvgJSJ7s?feature=share',
      title: 'Depoimentos de Clientes',
      description: 'Histórias reais de sucesso'
    }
  ];

  const pilares = [
    {
      icon: Users,
      title: 'Educação Financeira',
      description: 'Capacitamos nossos clientes com conhecimento para tomarem as melhores decisões financeiras.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único. Desenvolvemos estratégias sob medida para cada perfil e objetivo.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Excelência em Resultados',
      description: 'Nosso compromisso é entregar resultados excepcionais e superar expectativas.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const openVideo = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna Esquerda - Vídeo */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="space-y-6">
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Venha conhecer a Atma Corretora!
                </h3>
                
                {/* Vídeo Principal */}
                <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${videos[currentVideo].id}?rel=0&modestbranding=1`}
                    title={videos[currentVideo].title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Informações do Vídeo */}
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-gray-800">
                    {videos[currentVideo].title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {videos[currentVideo].description}
                  </p>
                  <button
                    onClick={() => openVideo(videos[currentVideo].url)}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Ver no YouTube</span>
                  </button>
                </div>

                {/* Navegação dos Vídeos */}
                <div className="flex justify-center space-x-2 mt-4">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideo(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentVideo
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 mb-4">
                  Aceite este convite e venha tomar um café e conversar conosco, estamos ansiosos para recebê-lo!
                </p>
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5 mr-2 inline" />
                  Agendar Visita
                </motion.button>
              </motion.div>
            </div>
          </ScrollAnimation>

          {/* Coluna Direita - Conteúdo */}
          <ScrollAnimation direction="right" delay={0.4}>
            <div className="space-y-8">
              
              {/* Título e Descrição */}
              <div className="space-y-6">
                <motion.h2 
                  className="text-4xl lg:text-5xl font-bold text-gray-800"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Quem é a Atma Corretora?
                </motion.h2>
                
                <motion.div
                  className="space-y-4 text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p>
                    A Atma Corretora é uma das mais renomadas corretoras especializadas em soluções patrimoniais, 
                    contando com profissionais capacitados em dar todo o suporte necessário na área de aquisição 
                    imobiliária e veicular, assim como toda expertise no ramo de investimentos.
                  </p>
                  
                  <p>
                    Nossa missão é transformar sonhos em realidade através de estratégias inteligentes e 
                    personalizadas, sempre priorizando a educação financeira e o atendimento humanizado.
                  </p>
                </motion.div>
              </div>

              {/* Os 3 Pilares */}
              <div className="space-y-6">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Nossos 3 Pilares
                </motion.h3>
                
                <div className="space-y-4">
                  {pilares.map((pilar, index) => {
                    const Icon = pilar.icon;
                    
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${pilar.color} flex-shrink-0`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            {pilar.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {pilar.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Estatísticas */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { label: "Clientes Satisfeitos", value: "1.000+", color: "text-blue-600" },
                  { label: "Anos de Experiência", value: "10+", color: "text-green-600" },
                  { label: "Patrimônio Viabilizado", value: "R$ 50M+", color: "text-purple-600" },
                  { label: "Taxa de Sucesso", value: "95%", color: "text-orange-600" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default SobreAtmaSection;
