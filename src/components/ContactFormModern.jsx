import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Target,
  Send,
  Home,
  Car,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const ContactFormModern = () => {
  const [formData, setFormData] = useState({
    nome: '',
    objetivo: '',
    email: '',
    whatsapp: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const objetivos = [
    { 
      id: 'imovel', 
      label: 'Adquirir Imóvel', 
      icon: Home, 
      description: 'Casa, apartamento, terreno',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    { 
      id: 'veiculo', 
      label: 'Adquirir Veículo', 
      icon: Car, 
      description: 'Carro, moto, caminhão',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    } else if (formData.nome.trim().length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres';
    }

    if (!formData.objetivo) {
      newErrors.objetivo = 'Selecione seu objetivo';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório';
    } else if (!/^[\d\s\(\)\-\+]{10,}$/.test(formData.whatsapp.replace(/\D/g, ''))) {
      newErrors.whatsapp = 'WhatsApp inválido';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Simular envio
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Preparar mensagem para WhatsApp
        const message = `Olá! Meu nome é ${formData.nome}.\n\nTenho interesse em: ${objetivos.find(obj => obj.id === formData.objetivo)?.label}\n\nMeus dados:\n📧 E-mail: ${formData.email}\n📱 WhatsApp: ${formData.whatsapp}\n\nGostaria de mais informações sobre consórcios.`;
        
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        setShowSuccess(true);
        setFormData({ nome: '', objetivo: '', email: '', whatsapp: '' });
        
        setTimeout(() => setShowSuccess(false), 5000);
      } catch (error) {
        console.error('Erro ao enviar:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">Formulário de Interesse</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Vamos realizar seus sonhos juntos!
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar as melhores opções para você.
            </motion.p>
          </div>
        </ScrollAnimation>

        {/* Formulário */}
        <ScrollAnimation direction="up" delay={0.4}>
          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-red-600 to-pink-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                Comece sua jornada patrimonial agora!
              </h3>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Nome */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    <User className="w-4 h-4 inline mr-2" />
                    Nome Completo
                  </label>
                  <motion.input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                      errors.nome 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-blue-500'
                    }`}
                    placeholder="Digite seu nome completo"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <AnimatePresence>
                    {errors.nome && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.nome}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Objetivo */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">
                    <Target className="w-4 h-4 inline mr-2" />
                    Qual é seu objetivo?
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {objetivos.map((objetivo) => {
                      const Icon = objetivo.icon;
                      const isSelected = formData.objetivo === objetivo.id;
                      
                      return (
                        <motion.button
                          key={objetivo.id}
                          type="button"
                          onClick={() => handleInputChange('objetivo', objetivo.id)}
                          className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                            isSelected
                              ? `${objetivo.borderColor} ${objetivo.bgColor} shadow-lg`
                              : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                          }`}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-start space-x-4">
                            <motion.div
                              className={`p-3 rounded-xl ${
                                isSelected 
                                  ? `bg-gradient-to-r ${objetivo.color}` 
                                  : 'bg-gray-200'
                              }`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                            </motion.div>
                            <div>
                              <h4 className={`font-bold ${isSelected ? 'text-gray-800' : 'text-gray-600'}`}>
                                {objetivo.label}
                              </h4>
                              <p className={`text-sm ${isSelected ? 'text-gray-600' : 'text-gray-500'}`}>
                                {objetivo.description}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                  <AnimatePresence>
                    {errors.objetivo && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.objetivo}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* E-mail */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    <Mail className="w-4 h-4 inline mr-2" />
                    E-mail
                  </label>
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-blue-500'
                    }`}
                    placeholder="seu@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    <Phone className="w-4 h-4 inline mr-2" />
                    WhatsApp
                  </label>
                  <motion.input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                      errors.whatsapp 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-blue-500'
                    }`}
                    placeholder="(11) 99999-9999"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <AnimatePresence>
                    {errors.whatsapp && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.whatsapp}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Botão Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>Falar no WhatsApp</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </motion.button>
              </form>

              {/* Mensagem de Sucesso */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <div className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Sucesso!</span>
                    </div>
                    <p className="text-green-600 text-sm mt-1">
                      Redirecionando para o WhatsApp. Nossa equipe entrará em contato em breve!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </ScrollAnimation>

        {/* Informações Adicionais */}
        <ScrollAnimation direction="up" delay={0.6}>
          <motion.div
            className="text-center mt-12 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Atendimento gratuito</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Resposta rápida</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
            </p>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ContactFormModern;
