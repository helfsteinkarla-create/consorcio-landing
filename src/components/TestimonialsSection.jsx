import React from 'react';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Cliente de Seguro de Vida',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      testimonial: 'A Karla foi incrível! Ela me ajudou a entender a importância do seguro de vida e encontrou um plano perfeito para minha família. Atendimento humano e super profissional.',
      rating: 5
    },
    {
      name: 'Marcos Oliveira',
      role: 'Contemplado em Consórcio de Imóvel',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      testimonial: 'Consegui comprar meu apartamento graças à consultoria da Karla. Ela me guiou em todo o processo do consórcio, desde a escolha do plano até a contemplação. Recomendo demais!',
      rating: 5
    },
    {
      name: 'Empresa XYZ Ltda',
      role: 'Cliente de Seguro Empresarial',
      avatar: null, // No avatar for company
      testimonial: 'A consultoria da Karla foi fundamental para a reestruturação dos seguros da nossa empresa. Conseguimos otimizar as apólices e ainda reduzir custos. Excelente trabalho.',
      rating: 5
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
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            Prova Social
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A confiança e a satisfação de quem já trabalhou conosco é nosso maior ativo.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
                “{testimonial.testimonial}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-6 h-6 text-gray-500" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-lg font-semibold text-gray-600 mb-6">Trabalhamos com as melhores seguradoras do mercado</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
            {/* Substituir com logos reais */}
            <img src="https://via.placeholder.com/120x40?text=Porto+Seguro" alt="Porto Seguro" className="h-8" />
            <img src="https://via.placeholder.com/120x40?text=Bradesco+Seguros" alt="Bradesco Seguros" className="h-8" />
            <img src="https://via.placeholder.com/120x40?text=SulAmérica" alt="SulAmérica" className="h-8" />
            <img src="https://via.placeholder.com/120x40?text=Allianz" alt="Allianz" className="h-8" />
            <img src="https://via.placeholder.com/120x40?text=Tokio+Marine" alt="Tokio Marine" className="h-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

