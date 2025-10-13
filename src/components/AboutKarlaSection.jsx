import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users } from 'lucide-react';

const AboutKarlaSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-blue-200 to-green-200 rounded-2xl transform -rotate-3"></div>
              <img 
                src="/src/assets/images/karla-helfstein.jpg"
                alt="Karla Helfstein - Especialista em Seguros e Consórcios" 
                className="relative w-full h-auto rounded-2xl shadow-2xl z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-48 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 z-20">
                <h4 className="font-bold text-gray-800">Karla Helfstein</h4>
                <p className="text-sm text-gray-600">Especialista em Patrimônio</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-semibold">Disponível para consultoria</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Sua Especialista de Confiança
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mais que uma corretora, uma parceira para sua jornada
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com mais de <strong>15 anos de experiência</strong> no mercado financeiro e de seguros, minha missão é traduzir o complexo mundo dos investimentos e da proteção em soluções simples e eficazes para você. Acredito que um planejamento patrimonial bem-sucedido é construído com base na confiança, transparência e, acima de tudo, em um relacionamento próximo e humano.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900">+15 anos</p>
                <p className="text-sm text-gray-600">de Mercado</p>
              </div>
              <div className="text-center bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Briefcase className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900">+R$50M</p>
                <p className="text-sm text-gray-600">em Patrimônio Gerenciado</p>
              </div>
              <div className="text-center bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Users className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900">1000+</p>
                <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Seja para proteger sua família, adquirir um bem ou fazer seu patrimônio crescer, estou aqui para oferecer a orientação que você precisa para tomar as melhores decisões com segurança e tranquilidade.
            </p>

            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Agendar uma Conversa
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutKarlaSection;

