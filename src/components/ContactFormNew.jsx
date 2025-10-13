import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

const ContactFormNew = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'consultoria_geral',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '5511999999999'; // Atualizar com número real
    const text = `Olá, Karla! Meu nome é ${formData.name}. Gostaria de uma consultoria sobre ${formData.service.replace('_', ' ')}. Meu email é ${formData.email} e meu telefone é ${formData.phone}. Mensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white relative overflow-hidden">
       <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Vamos Conversar
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solicite sua consultoria gratuita
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo ou chame no WhatsApp. Estou pronta para ajudar você a encontrar a melhor solução.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-2xl border border-gray-100"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div className="relative">
                <User className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
              </div>
              {/* Email */}
              <div className="relative">
                <Mail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* Phone */}
              <div className="relative">
                <Phone className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                <input type="tel" name="phone" placeholder="Seu WhatsApp" value={formData.phone} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
              </div>
              {/* Service of Interest */}
              <div className="relative">
                <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none">
                  <option value="consultoria_geral">Consultoria Geral</option>
                  <option value="seguros">Seguros</option>
                  <option value="consorcios">Consórcios</option>
                  <option value="mentoria_corretores">Mentoria para Corretores</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="relative mb-6">
              <MessageSquare className="absolute top-4 left-4 text-gray-400" />
              <textarea name="message" placeholder="Sua mensagem (opcional)" value={formData.message} onChange={handleChange} rows="4" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Send className="w-5 h-5" />
              Enviar e Chamar no WhatsApp
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">Ao enviar, você será redirecionado para o WhatsApp para iniciar a conversa.</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormNew;
