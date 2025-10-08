import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Star, CheckCircle, Home, Car, DollarSign, ArrowRight } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import heroBackground from '../assets/new-hero-background.png';
import portoConsorcio from '../assets/porto-consorcio.webp';
import hsConsorcio from '../assets/hs-consorcio.png';
import volkswagenConsorcio from '../assets/volkswagen-consorcio.jpg';

const HeroModern = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);

  // Slides principais inspirados na DW
  const slides = [
    {
      id: 1,
      title: "Consórcio de Imóvel",
      subtitle: "Realize o sonho da casa própria com as melhores condições do mercado",
      description: "Uma maneira prática e inteligente de adquirir seu imóvel. Não pague juros e escolha o valor das suas parcelas.",
      icon: Home,
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Consórcio de Veículo", 
      subtitle: "Seu carro novo está mais próximo do que você imagina",
      description: "No Consórcio de Veículo, você pode comprar carros, motos, pick-ups, vans, ônibus, caminhão novo ou seminovo.",
      icon: Car,
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      title: "Consórcio para Investimento",
      subtitle: "Invista e ganhe dinheiro através do consórcio",
      description: "Uma alternativa inteligente para fazer seu dinheiro render e conquistar seus objetivos de forma planejada.",
      icon: DollarSign,
      color: "from-purple-600 to-pink-600", 
      bgColor: "bg-purple-50"
    }
  ];

  // Vídeos educativos
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
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openVideo = (url) => {
    window.open(url, '_blank');
  };

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background com overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Coluna Esquerda - Conteúdo Principal */}
          <div className="space-y-8">
            
            {/* Badge da Empresa */}
            <ScrollAnimation direction="up" delay={0.2}>
              <motion.div 
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm font-medium">Especialistas em Soluções Patrimoniais</span>
              </motion.div>
            </ScrollAnimation>

            {/* Slide Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Ícone do Slide */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentSlideData.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Título Principal */}
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {currentSlideData.title}
                </h1>

                {/* Subtítulo */}
                <h2 className="text-xl lg:text-2xl text-gray-200 font-medium">
                  {currentSlideData.subtitle}
                </h2>

                {/* Descrição */}
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  {currentSlideData.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Logos das Administradoras */}
            <ScrollAnimation direction="up" delay={0.6}>
              <div className="space-y-4">
                <p className="text-sm text-gray-400 text-center lg:text-left">Parceiros de confiança:</p>
                <div className="flex items-center justify-center lg:justify-start space-x-6 flex-wrap gap-4">
                  {[
                    { src: portoConsorcio, alt: "Porto Seguro Consórcio" },
                    { src: hsConsorcio, alt: "HS Consórcio" },
                    { src: volkswagenConsorcio, alt: "Volkswagen Consórcio Nacional" }
                  ].map((logo, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="h-10 w-auto object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* CTAs */}
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => scrollToSection('contato')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  📊 Simule Agora!
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('modalidades')}
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
              </div>
            </ScrollAnimation>

            {/* Navegação do Slider */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Coluna Direita - Vídeo Educativo */}
          <div className="space-y-6">
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Veja Como Funciona
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

                {/* Título do Vídeo */}
                <div className="text-center mb-4">
                  <h4 className="text-white font-semibold">
                    {videos[currentVideo].title}
                  </h4>
                  <button
                    onClick={() => openVideo(videos[currentVideo].url)}
                    className="text-blue-300 hover:text-blue-200 text-sm mt-1 transition-colors"
                  >
                    Ver no YouTube →
                  </button>
                </div>

                {/* Navegação dos Vídeos */}
                <div className="grid grid-cols-4 gap-2">
                  {videos.map((video, index) => (
                    <motion.button
                      key={video.id}
                      onClick={() => setCurrentVideo(index)}
                      className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                        index === currentVideo 
                          ? 'ring-2 ring-blue-400 scale-105' 
                          : 'hover:scale-105 opacity-70 hover:opacity-100'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-3 h-3 text-gray-700 ml-0.5" />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Estatísticas */}
            <ScrollAnimation direction="up" delay={0.6}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Clientes Atendidos", value: "1.000+", color: "text-green-400" },
                  { label: "Taxa de Satisfação", value: "95%", color: "text-blue-400" },
                  { label: "Patrimônio Viabilizado", value: "R$ 50M+", color: "text-yellow-400" },
                  { label: "Anos de Experiência", value: "10+", color: "text-purple-400" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroModern;
