import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'O que é consórcio e como funciona?',
      answer: 'Consórcio é um sistema de autofinanciamento onde um grupo de pessoas se reúne para adquirir bens (imóveis, veículos) ou serviços. Cada participante paga uma parcela mensal, e mensalmente são realizados sorteios e lances para contemplação. Diferente do financiamento, não há juros, apenas taxa de administração.'
    },
    {
      question: 'Qual a diferença entre consórcio e financiamento?',
      answer: 'No consórcio, você não paga juros, apenas uma taxa de administração (geralmente 15-20% do valor total). No financiamento, os juros podem ultrapassar 100% do valor do bem. Além disso, no consórcio, o bem fica livre após a quitação, enquanto no financiamento ele fica alienado ao banco.'
    },
    {
      question: 'Como funciona a contemplação?',
      answer: 'A contemplação pode ocorrer de duas formas: por sorteio mensal (todos os consorciados concorrem) ou por lance (você oferece um valor adicional para antecipar a contemplação). Ao ser contemplado, você recebe a carta de crédito para adquirir o bem desejado.'
    },
    {
      question: 'Posso usar meu FGTS no consórcio?',
      answer: 'Sim! Para consórcios de imóveis, você pode utilizar o saldo do FGTS para dar lances, pagar parcelas ou como parte do pagamento do bem após a contemplação. Isso pode acelerar significativamente sua contemplação.'
    },
    {
      question: 'Quais tipos de seguro vocês oferecem?',
      answer: 'Oferecemos uma linha completa: Seguro Auto, Residencial, Vida, Empresarial, Frota e Transporte. Trabalhamos com as principais seguradoras do mercado e fazemos uma análise personalizada para encontrar a melhor cobertura com o melhor custo-benefício para você.'
    },
    {
      question: 'Por que contratar através de uma corretora?',
      answer: 'Uma corretora independente como a nossa compara múltiplas seguradoras e administradoras de consórcio, encontrando a melhor opção para seu perfil. Você economiza tempo, tem atendimento personalizado e conta com suporte durante todo o processo, não apenas na venda.'
    },
    {
      question: 'Quanto tempo leva para ser contemplado?',
      answer: 'Não há um prazo fixo, pois depende de sorteios e lances. Porém, estatisticamente, cerca de 30% dos consorciados são contemplados nos primeiros 30% do prazo. Você pode aumentar suas chances oferecendo lances ou participando de grupos com menos participantes.'
    },
    {
      question: 'A consultoria realmente é gratuita?',
      answer: 'Sim! Nossa consultoria inicial é 100% gratuita. Analisamos seu perfil, necessidades e objetivos sem nenhum custo. Você só paga quando decidir contratar um seguro ou consórcio, e o valor é o mesmo que pagaria diretamente às seguradoras/administradoras.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 justify-center">
            <HelpCircle className="w-4 h-4" />
            Perguntas Frequentes
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tire suas dúvidas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respondemos as perguntas mais comuns sobre seguros e consórcios
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Não encontrou a resposta que procurava?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Fale Conosco
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

