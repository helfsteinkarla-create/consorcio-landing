import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Análise de Perfil',
      description: 'Conversamos para entender suas necessidades, objetivos e perfil. Identificamos o que você precisa proteger e quais são seus planos de crescimento patrimonial.',
      features: ['Atendimento personalizado', 'Análise de necessidades', 'Identificação de objetivos'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500'
    },
    {
      number: '02',
      icon: FileText,
      title: 'Apresentação de Soluções',
      description: 'Pesquisamos e comparamos as melhores opções do mercado. Apresentamos propostas de múltiplas seguradoras e planos de consórcio adequados ao seu perfil.',
      features: ['Comparação de mercado', 'Múltiplas opções', 'Transparência total'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-500'
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Implementação e Suporte',
      description: 'Cuidamos de toda a burocracia e acompanhamos você durante todo o processo. Você tem suporte contínuo para dúvidas, ajustes e renovações.',
      features: ['Suporte contínuo', 'Acompanhamento', 'Relacionamento de longo prazo'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Processo Simples
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como funciona a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              consultoria
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo transparente e eficiente, pensado para facilitar sua vida e garantir as melhores decisões
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-32 w-0.5 h-32 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-1/2 z-0"></div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-8 items-center mb-16 ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  {/* Number Badge - Mobile */}
                  <div className="lg:hidden text-center mb-4">
                    <span className={`inline-block text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 ${step.iconBg} rounded-xl mb-6 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Number Badge - Desktop */}
                  <div className={`hidden lg:block ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                    <div className="flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className={`w-40 h-40 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl`}>
                          <span className="text-6xl font-bold text-white">
                            {step.number}
                          </span>
                        </div>
                        {/* Pulse Effect */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} animate-ping opacity-20`}></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 rounded-2xl border border-blue-100">
            <div className="text-left">
              <p className="text-gray-900 font-bold text-lg mb-1">Pronto para começar?</p>
              <p className="text-gray-600">Entre em contato e agende sua consultoria gratuita</p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

