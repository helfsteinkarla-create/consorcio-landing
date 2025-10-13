import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Clock, HelpCircle } from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Medo de não ter proteção adequada',
      description: 'Você trabalhou duro para construir seu patrimônio. A falta de um seguro adequado pode colocar tudo em risco em um momento inesperado.',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      iconColor: 'text-red-500'
    },
    {
      icon: DollarSign,
      title: 'Dificuldade em poupar e crescer',
      description: 'Financiamentos tradicionais têm juros altos que impedem seu crescimento. Você precisa de alternativas inteligentes para realizar seus objetivos.',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-500/10',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Clock,
      title: 'Falta de tempo para pesquisar',
      description: 'Comparar dezenas de seguradoras e entender todas as opções de consórcio consome tempo que você não tem. Você precisa de orientação especializada.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-600'
    },
    {
      icon: HelpCircle,
      title: 'Confusão com tantas opções',
      description: 'O mercado oferece centenas de produtos, mas qual é o melhor para você? Você merece uma análise personalizada, não um produto genérico.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
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
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Desafios Comuns
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Você enfrenta esses{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              desafios?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Muitas pessoas e empresas enfrentam dificuldades na hora de proteger e fazer crescer seu patrimônio. Você não está sozinho.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${point.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${point.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${point.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Existe uma solução melhor
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Com a consultoria especializada, você tem acesso a análise personalizada, múltiplas opções do mercado e orientação profissional para tomar as melhores decisões.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero Resolver Isso Agora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;

