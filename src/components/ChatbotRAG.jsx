import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  Send, 
  X, 
  Bot, 
  User, 
  Loader2, 
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  ExternalLink,
  Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { askRAG, getQuickAnswers } from '../utils/rag-system'

const ChatbotRAG = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showQuickAnswers, setShowQuickAnswers] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Mensagem de boas-vindas
  const welcomeMessage = {
    id: 'welcome',
    type: 'bot',
    content: `Olá! 👋 Sou o assistente virtual da Atma Corretora, especialista em consórcios contemplados.

Como posso ajudá-lo hoje? Posso esclarecer dúvidas sobre:
• Consórcios de imóveis e veículos
• Processo de contemplação
• Documentação necessária
• Simulações e valores
• Nossas administradoras parceiras`,
    timestamp: new Date(),
    confidence: 100
  }

  // Inicializa chat com mensagem de boas-vindas
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([welcomeMessage])
    }
  }, [isOpen])

  // Auto-scroll para última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Foca no input quando abre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Envia mensagem
  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)
    setShowQuickAnswers(false)

    try {
      // Chama sistema RAG
      const ragResponse = await askRAG(userMessage.content)
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: ragResponse.response,
        sources: ragResponse.sources,
        confidence: ragResponse.confidence,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Erro no chatbot:', error)
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Desculpe, ocorreu um erro. Nossa equipe está disponível via WhatsApp para atendimento direto. 📱',
        timestamp: new Date(),
        confidence: 0
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Envia pergunta rápida
  const sendQuickQuestion = async (question) => {
    setInputValue(question)
    setTimeout(sendMessage, 100)
  }

  // Abre WhatsApp
  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Vim através do site e gostaria de mais informações sobre consórcios.')
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
  }

  // Componente de mensagem
  const Message = ({ message }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          message.type === 'user' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
        }`}>
          {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </div>

        {/* Mensagem */}
        <div className={`rounded-2xl px-4 py-3 ${
          message.type === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-800 border border-gray-200'
        }`}>
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content}
          </div>
          
          {/* Fontes (apenas para bot) */}
          {message.type === 'bot' && message.sources && message.sources.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-300">
              <div className="text-xs text-gray-600 mb-2">Baseado em:</div>
              <div className="space-y-1">
                {message.sources.slice(0, 2).map((source, index) => (
                  <div key={index} className="text-xs bg-white rounded px-2 py-1 border">
                    📚 {source.title}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Confiança */}
          {message.type === 'bot' && message.confidence !== undefined && (
            <div className="mt-2 flex items-center justify-between">
              <div className="text-xs text-gray-500">
                Confiança: {message.confidence}%
              </div>
              <div className="flex space-x-1">
                <button className="text-gray-400 hover:text-green-500 transition-colors">
                  <ThumbsUp className="w-3 h-3" />
                </button>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <ThumbsDown className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <>
      {/* Botão flutuante */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Indicador de novo */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-2 h-2 text-white" />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistente Atma</h3>
                  <p className="text-xs opacity-90">Especialista em Consórcios</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setMessages([welcomeMessage])
                    setShowQuickAnswers(true)
                  }}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  title="Reiniciar conversa"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center space-x-2 bg-gray-100 rounded-2xl px-4 py-3">
                    <Loader2 className="w-4 h-4 animate-spin text-purple-500" />
                    <span className="text-sm text-gray-600">Pensando...</span>
                  </div>
                </motion.div>
              )}
              
              {/* Quick answers */}
              {showQuickAnswers && messages.length <= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-xs text-gray-500 text-center">Perguntas frequentes:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {getQuickAnswers().map((item, index) => (
                      <motion.button
                        key={index}
                        onClick={() => sendQuickQuestion(item.question)}
                        className="text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-2 rounded-lg border border-purple-200 transition-colors text-left"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Digite sua pergunta..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    disabled={isLoading}
                  />
                </div>
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              {/* WhatsApp CTA */}
              <motion.button
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4" />
                <span>Falar com Especialista</span>
                <ExternalLink className="w-3 h-3" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatbotRAG
