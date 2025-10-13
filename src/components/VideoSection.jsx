import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      id: 'l6tsvgJSJ7s',
      title: 'Dicas de Seguros',
      thumbnail: `https://img.youtube.com/vi/l6tsvgJSJ7s/maxresdefault.jpg`
    },
    {
      id: 'adv9mw3oJ7Q',
      title: 'Como Funciona o Consórcio',
      thumbnail: `https://img.youtube.com/vi/adv9mw3oJ7Q/maxresdefault.jpg`
    },
    {
      id: 'iDBu1xZ3ZL0',
      title: 'Planejamento Patrimonial',
      thumbnail: `https://img.youtube.com/vi/iDBu1xZ3ZL0/maxresdefault.jpg`
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 justify-center">
            <Play className="w-4 h-4" />
            Conteúdo Educativo
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Aprenda com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              conteúdo exclusivo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe dicas valiosas sobre seguros, consórcios e planejamento patrimonial direto do meu canal
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Video Embed */}
                <div className="relative aspect-[9/16] bg-gray-900">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <a
                    href={`https://youtube.com/shorts/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    Ver no YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to YouTube Channel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Quer ver mais conteúdo?</p>
          <a
            href="https://www.youtube.com/@karlahelfstein"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            Inscreva-se no Canal
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

