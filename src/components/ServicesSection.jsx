import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TrendingUp, Car, Home, Heart, Briefcase, Building, Truck, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('seguros');

  const seguros = [
    {
      icon: Car,
      title: 'Seguro Auto',
      description: 'Proteção completa para seu veículo com coberturas personalizadas e assistência 24h.',
      features: ['Cobertura total', 'Assistência 24h', 'Carro reserva', 'Proteção contra roubo']
    },
    {
      icon: Home,
      title: 'Seguro Residencial',
      description: 'Proteja seu lar contra incêndios, roubos e danos, com cobertura para conteúdo e estrutura.',
      features: ['Incêndio', 'Roubo e furto', 'Danos elétricos', 'Responsabilidade civil']
    },
    {
      icon: Heart,
      title: 'Seguro de Vida',
      description: 'Garanta a segurança financeira da sua família em momentos difíceis.',
      features: ['Morte natural', 'Invalidez', 'Doenças graves', 'Assistência funeral']
    },
    {
      icon: Briefcase,
      title: 'Seguro Empresarial',
      description: 'Soluções completas para proteger seu negócio, colaboradores e patrimônio empresarial.',
      features: ['Patrimônio', 'Responsabilidade civil', 'Lucros cessantes', 'Equipamentos']
    },
    {
      icon: Truck,
      title: 'Seguro de Frota',
      description: 'Gestão eficiente e proteção para frotas de veículos comerciais.',
      features: ['Múltiplos veículos', 'Gestão centralizada', 'Rastreamento', 'Manutenção preventiva']
    },
    {
      icon: Building,
      title: 'Seguro Transporte',
      description: 'Proteção para cargas e mercadorias em trânsito, nacional e internacional.',
      features: ['Carga nacional', 'Carga internacional', 'RC transportador', 'Avarias']
    }
  ];

  const consorcios = [
    {
      icon: Home,
      title: 'Consórcio de Imóveis',
      description: 'Realize o sonho da casa própria ou invista em imóveis sem juros, com parcelas que cabem no bolso.',
      features: ['Sem juros', 'Use FGTS', 'Parcelas menores', 'Bem livre'],
      highlight: 'Mais popular'
    },
    {
      icon: Car,
      title: 'Consórcio de Veículos',
      description: 'Adquira seu carro, moto ou caminhão de forma planejada e econômica.',
      features: ['0 km ou seminovo', 'Sem entrada', 'Flexibilidade', 'Lance livre'],
      highlight: null
    },
    {
      icon: Briefcase,
      title: 'Consórcio de Serviços',
      description: 'Financie reformas, viagens, festas e outros serviços sem comprometer seu orçamento.',
      features: ['Reformas', 'Viagens', 'Festas', 'Educação'],
      highlight: null
    }
  ];

  const currentServices = activeTab === 'seguros' ? seguros : consorcios;

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proteção e Crescimento{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              para seu patrimônio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em seguros e consórcios, com atendimento personalizado e as melhores condições do mercado
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('seguros')}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'seguros'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Shield className="w-5 h-5" />
              <span>Seguros</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeTab === 'seguros' ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                Proteção
              </span>
            </button>
            <button
              onClick={() => setActiveTab('consorcios')}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'consorcios'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span>Consórcios</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeTab === 'consorcios' ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                Crescimento
              </span>
            </button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {currentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Highlight Badge */}
                  {service.highlight && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {service.highlight}
                      </span>
                    </div>
                  )}

                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 shadow-lg ${
                      activeTab === 'seguros' 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                        : 'bg-gradient-to-r from-green-500 to-emerald-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <svg className={`w-5 h-5 flex-shrink-0 ${
                            activeTab === 'seguros' ? 'text-blue-500' : 'text-green-500'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        const element = document.getElementById('contato');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        activeTab === 'seguros'
                          ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                          : 'bg-green-50 text-green-600 hover:bg-green-100'
                      }`}
                    >
                      Solicitar Cotação
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-6">
              Trabalhamos com soluções personalizadas para cada necessidade. Entre em contato e conte-nos o que você precisa.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Falar com Especialista
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

