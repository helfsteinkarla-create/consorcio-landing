import React from 'react';
import { motion } from 'framer-motion';
import { Home, Car, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const ModalidadesSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const modalidades = [
    {
      id: 'imovel',
      title: 'Consórcio de Imóvel',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'No Consórcio de Imóvel, você pode comprar imóveis residenciais ou imóveis comerciais. Essa modalidade também é ideal para quem quer construir ou reformar a casa, além da possibilidade de compra de terrenos, sítios e fazendas.',
      features: [
        'Imóveis residenciais e comerciais',
        'Construção e reforma',
        'Terrenos, sítios e fazendas',
        'Sem juros abusivos'
      ],
      valueRange: 'R$ 50.000 a R$ 800.000',
      buttonText: 'Simule agora!',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 'veiculo',
      title: 'Consórcio de Veículo',
      icon: Car,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'No Consórcio de Veículo, seu carro, moto, pick-up, van, ônibus, caminhão novo ou seminovo é conquistado em suaves parcelas e sem complicação. Com a oportunidade de escolher onde e com quem comprar o veículo, nacional ou importado.',
      features: [
        'Carros, motos e caminhões',
        'Veículos novos e seminovos',
        'Nacionais e importados',
        'Liberdade de escolha'
      ],
      valueRange: 'R$ 20.000 a R$ 200.000',
      buttonText: 'Simule agora!',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      id: 'investimento',
      title: 'Consórcio a título de Investimento',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      description: 'Invista e ganhe dinheiro através do consórcio. Uma alternativa inteligente para fazer seu dinheiro render e conquistar seus objetivos de forma planejada.',
      features: [
        'Venda da carta contemplada',
        'Aplicação da carta contemplada',
        'Aumento de patrimônio',
        'Previdência privada'
      ],
      valueRange: 'R$ 10.000 a R$ 100.000',
      buttonText: 'Saiba mais!',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  return (
    <section id="modalidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header da Seção */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Modalidades de Consórcio
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Uma maneira prática e inteligente de adquirir o seu bem. Não pague juros e escolha o valor das suas parcelas. Uma solução simples e segura de conquistar os seus objetivos de forma planejada.
            </motion.p>
          </div>
        </ScrollAnimation>

        {/* Grid de Modalidades */}
        <div className="grid lg:grid-cols-3 gap-8">
          {modalidades.map((modalidade, index) => {
            const Icon = modalidade.icon;
            
            return (
              <ScrollAnimation key={modalidade.id} direction="up" delay={0.3 + (index * 0.2)}>
                <motion.div
                  className={`${modalidade.bgColor} rounded-2xl p-8 border-2 ${modalidade.borderColor} h-full flex flex-col`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Ícone */}
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${modalidade.color} mb-6 w-fit`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {modalidade.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {modalidade.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {modalidade.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Valor */}
                  <div className="bg-white/70 rounded-lg p-4 mb-6">
                    <div className="text-sm text-gray-500 mb-1">Faixa de valores:</div>
                    <div className="text-lg font-bold text-gray-800">{modalidade.valueRange}</div>
                  </div>

                  {/* Botão CTA */}
                  <motion.button
                    onClick={() => scrollToSection('contato')}
                    className={`w-full ${modalidade.buttonColor} text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center space-x-2`}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{modalidade.buttonText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={0.8}>
          <motion.div
            className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Não sabe qual modalidade escolher?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para te ajudar a encontrar a melhor opção para seu perfil e objetivos.
            </p>
            <motion.button
              onClick={() => scrollToSection('contato')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Falar com Especialista
            </motion.button>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ModalidadesSection;
