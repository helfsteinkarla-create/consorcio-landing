import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart, Users, ArrowRight } from 'lucide-react';

const B2BSection = () => {
  return (
    <section id="mentoria" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-4">
              Para Corretores
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Eleve sua produção e eficiência como corretor
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Compartilho meu conhecimento e estratégias para ajudar outros corretores a alcançarem o próximo nível. Através de mentorias e materiais exclusivos, você aprenderá a otimizar seus processos, captar mais clientes e construir uma marca de autoridade no mercado.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-300" />
                </div>
                <p className="text-gray-300"><strong className="text-white">Estratégias de Vendas:</strong> Aprenda técnicas comprovadas para fechar mais negócios.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center">
                  <BarChart className="w-5 h-5 text-purple-300" />
                </div>
                <p className="text-gray-300"><strong className="text-white">Marketing Digital:</strong> Crie sua presença online e atraia clientes qualificados.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-300" />
                </div>
                <p className="text-gray-300"><strong className="text-white">Gestão de Clientes:</strong> Desenvolva relacionamentos de longo prazo e fidelize sua base.</p>
              </div>
            </div>

            <button
              // onClick={() => window.location.href = '/mentoria'} // Levaria para uma página dedicada
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Quero Saber Mais sobre a Mentoria
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Image/Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-gray-800 rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">Programa de Mentoria</h3>
                <p className="text-gray-300 mb-6">Transforme sua carreira de corretor</p>
                <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                    <BarChart className="w-12 h-12 text-purple-300" />
                </div>
                <p className="text-sm text-gray-400">Vagas limitadas. Inscrições abertas em breve.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
