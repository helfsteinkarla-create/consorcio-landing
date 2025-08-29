import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: `Olá! 👋 Seja bem-vindo(a) à Atma Seguros e Consórcios!

Sou seu assistente virtual especializado em **GRUPOS DE CONSÓRCIO**.

🎯 **Nossas especialidades:**
🆕 **Grupos em Formação** - Taxa 15% (máxima economia)
⏳ **Grupos em Andamento** - Alta chance de contemplação
💰 **Economia de até 40%** vs financiamento bancário

✅ **Vantagens dos nossos grupos:**
• Entrada facilitada
• Sem juros abusivos
• Economia real comprovada
• Acompanhamento especializado

**Para quando você precisa do bem que deseja adquirir?**`,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const API_BASE = 'https://xlhyimcdj3p8.manus.space/api'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: inputMessage
        })
      })

      const data = await response.json()

      if (data.success) {
        const botMessage = {
          id: Date.now() + 1,
          type: 'bot',
          content: data.response,
          timestamp: new Date(),
          fallback: data.fallback || false
        }

        setMessages(prev => [...prev, botMessage])
      } else {
        throw new Error(data.error || 'Erro na resposta')
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: `Desculpe, ocorreu um erro temporário. 😔

Mas não se preocupe! Você pode entrar em contato diretamente conosco:

📱 **WhatsApp:** (64) 98123-5976
📧 **Email:** atma@atmaseguros.com.br

Estamos prontos para atender você!`,
        timestamp: new Date(),
        error: true
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatMessage = (content) => {
    // Converter markdown básico para HTML
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/•/g, '•')
      .split('\n')
      .map((line, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
      ))
  }

  const quickReplies = [
    'Grupos em formação',
    'Grupos em andamento', 
    'Quero economizar',
    'Como funciona?',
    'Falar com consultor'
  ]

  const handleQuickReply = (reply) => {
    setInputMessage(reply)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* Ícone principal do chatbot com destaque máximo */}
        <div className="relative">
          {/* Círculos de pulsação para chamar atenção */}
          <div className="absolute inset-0 w-20 h-20 bg-blue-500 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 w-20 h-20 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
          
          {/* Botão principal */}
          <Button
            onClick={() => setIsOpen(true)}
            className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
          >
            <MessageCircle className="w-10 h-10 text-white group-hover:animate-bounce" />
            
            {/* Badge de notificação */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </Button>
          
          {/* Tooltip animado */}
          <div className="absolute bottom-24 right-0 bg-gray-900 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">💬 Fale conosco agora!</span>
            </div>
            <div className="text-xs text-gray-300 mt-1">Especialistas em consórcios online</div>
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
          
          {/* Texto flutuante chamativo */}
          <div className="absolute -left-48 top-2 bg-yellow-400 text-gray-900 px-3 py-2 rounded-lg text-sm font-bold shadow-lg animate-bounce hidden lg:block">
            <div className="flex items-center space-x-1">
              <span>🆕</span>
              <span>Grupos em formação disponíveis!</span>
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-yellow-400"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 transition-all duration-300 shadow-2xl ${isMinimized ? 'h-16' : 'h-[600px]'}`}>
        <CardHeader className="p-4 bg-blue-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Assistente Atma</CardTitle>
                <p className="text-blue-100 text-sm">Online agora</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-blue-700"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[536px]">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : message.error
                        ? 'bg-red-50 border border-red-200 text-red-800'
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && (
                        <Bot className={`w-4 h-4 mt-1 flex-shrink-0 ${message.error ? 'text-red-600' : 'text-blue-600'}`} />
                      )}
                      {message.type === 'user' && (
                        <User className="w-4 h-4 mt-1 flex-shrink-0 text-white" />
                      )}
                      <div className="text-sm leading-relaxed">
                        {formatMessage(message.content)}
                      </div>
                    </div>
                    <div className={`text-xs mt-2 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString('pt-BR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                      {message.fallback && (
                        <span className="ml-2 text-yellow-600">• Modo offline</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="p-3 border-t bg-white">
                <p className="text-xs text-gray-600 mb-2">Respostas rápidas:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 resize-none border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="1"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Powered by Atma Seguros e Consórcios
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

export default Chatbot

