import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  User, 
  Mail, 
  Phone, 
  Target,
  Send,
  Home,
  Car,
  Wrench,
  CheckCircle,
  AlertCircle,
  Heart,
  Sparkles,
  MessageCircle
} from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    objetivo: '',
    email: '',
    whatsapp: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const objetivos = [
    { id: 'imovel', label: 'Adquirir Imóvel', icon: Home, description: 'Casa, apartamento, terreno' },
    { id: 'veiculo', label: 'Adquirir Veículo', icon: Car, description: 'Carro, moto, caminhão' },
    { id: 'servicos', label: 'Adquirir Serviços', icon: Wrench, description: 'Reformas, viagens, cursos' }
  ]

  const validateForm = () => {
    const newErrors = {}

    // Validar nome
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    } else if (formData.nome.trim().length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres'
    }

    // Validar objetivo
    if (!formData.objetivo) {
      newErrors.objetivo = 'Selecione seu objetivo'
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    // Validar WhatsApp
    const whatsappClean = formData.whatsapp.replace(/\D/g, '')
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório'
    } else if (whatsappClean.length < 10 || whatsappClean.length > 11) {
      newErrors.whatsapp = 'WhatsApp deve ter 10 ou 11 dígitos'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatWhatsApp = (value) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '')
    
    // Aplica máscara (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '')
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '')
    }
  }

  const handleWhatsAppChange = (e) => {
    const formatted = formatWhatsApp(e.target.value)
    setFormData(prev => ({ ...prev, whatsapp: formatted }))
  }

  const generateWhatsAppMessage = () => {
    const objetivoLabel = objetivos.find(obj => obj.id === formData.objetivo)?.label || formData.objetivo
    
    const message = `Olá! Vim através do site da Atma Seguros e Consórcios.

*DADOS PARA CONTATO:*
👤 *Nome:* ${formData.nome}
🎯 *Objetivo:* ${objetivoLabel}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.whatsapp}

Gostaria de receber informações sobre cartas de consórcio contempladas para ${objetivoLabel.toLowerCase()}.

Aguardo retorno! 😊`

    return encodeURIComponent(message)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simular envio (aqui você pode integrar com sua API)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Gerar link do WhatsApp
      const whatsappNumber = '5564981235976' // (64) 98123-5976
      const message = generateWhatsAppMessage()
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

      // Mostrar sucesso
      setShowSuccess(true)

      // Aguardar um pouco e abrir WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
        
        // Reset form após envio
        setTimeout(() => {
          setFormData({
            nome: '',
            objetivo: '',
            email: '',
            whatsapp: ''
          })
          setShowSuccess(false)
        }, 2000)
      }, 1500)

    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (showSuccess) {
    return (
      <section id="contato" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="p-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Formulário Enviado!
              </h3>
              <p className="text-gray-600 mb-4">
                Seus dados foram registrados com sucesso. Você será redirecionado para o WhatsApp em instantes.
              </p>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <ScrollAnimation direction="down" delay={0.2}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-blue-200"
            >
              <Heart className="w-4 h-4 text-red-500" />
              <span>Atendimento Personalizado</span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              <span className="block">Fale</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Conosco
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Preencha o formulário abaixo e receba atendimento personalizado via WhatsApp. 
              Nossa equipe está pronta para ajudar você a realizar seus sonhos!
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="max-w-3xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <CardTitle className="text-2xl lg:text-3xl text-center font-bold relative z-10">
                  <motion.div className="flex items-center justify-center space-x-3">
                    <MessageCircle className="w-8 h-8" />
                    <span>Formulário de Interesse</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="w-6 h-6 text-red-300" />
                    </motion.div>
                  </motion.div>
                </CardTitle>
                <p className="text-center text-blue-100 mt-2 relative z-10">
                  Seus dados serão enviados diretamente para nosso WhatsApp
                </p>
              </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.nome ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Digite seu nome completo"
                />
                {errors.nome && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.nome}
                  </p>
                )}
              </div>

              {/* Objetivo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Target className="w-4 h-4 inline mr-2" />
                  Qual seu objetivo? *
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {objetivos.map((objetivo) => {
                    const Icon = objetivo.icon
                    return (
                      <div
                        key={objetivo.id}
                        onClick={() => handleInputChange('objetivo', objetivo.id)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                          formData.objetivo === objetivo.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="text-center">
                          <Icon className={`w-8 h-8 mx-auto mb-2 ${
                            formData.objetivo === objetivo.id ? 'text-blue-600' : 'text-gray-600'
                          }`} />
                          <h3 className={`font-semibold ${
                            formData.objetivo === objetivo.id ? 'text-blue-800' : 'text-gray-800'
                          }`}>
                            {objetivo.label}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {objetivo.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                {errors.objetivo && (
                  <p className="text-red-600 text-sm mt-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.objetivo}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleWhatsAppChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.whatsapp ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="(64) 98123-5976"
                  maxLength="15"
                />
                {errors.whatsapp && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.whatsapp}
                  </p>
                )}
              </div>

              {/* Botão de Envio */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar via WhatsApp
                  </div>
                )}
              </Button>

              <p className="text-sm text-gray-600 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com suas informações preenchidas
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Informações de Contato */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Outras Formas de Contato
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">WhatsApp</h4>
              <p className="text-gray-600">(64) 98123-5976</p>
            </Card>
            
            <Card className="p-6">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
              <p className="text-gray-600">atma@atmaseguros.com.br</p>
            </Card>
            
            <Card className="p-6">
              <Home className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Endereço</h4>
              <p className="text-gray-600 text-sm">
                R. Benedito Bueno, Chácara C<br />
                Vila São Simão, Indiara - GO
              </p>
            </Card>
          </div>
        </div>
            </motion.div>
          </ScrollAnimation>
      </div>
    </section>
  )
}

export default ContactForm

