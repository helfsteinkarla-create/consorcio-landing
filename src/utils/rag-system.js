// Sistema RAG - Retrieval-Augmented Generation
// Implementação de busca vetorial e embeddings

import { knowledgeBase, searchKnowledge } from '../data/knowledge-base.js'

// Simulação de embeddings (em produção, usar API real como OpenAI)
class SimpleEmbedding {
  constructor() {
    this.vocabulary = new Map()
    this.buildVocabulary()
  }

  // Constrói vocabulário da base de conhecimento
  buildVocabulary() {
    const allText = knowledgeBase.map(item => 
      `${item.title} ${item.content} ${item.keywords.join(' ')}`
    ).join(' ').toLowerCase()
    
    const words = allText.match(/\b\w+\b/g) || []
    const wordCount = new Map()
    
    words.forEach(word => {
      wordCount.set(word, (wordCount.get(word) || 0) + 1)
    })
    
    // Mantém apenas palavras com frequência > 1
    Array.from(wordCount.entries())
      .filter(([word, count]) => count > 1 && word.length > 2)
      .forEach(([word], index) => {
        this.vocabulary.set(word, index)
      })
  }

  // Gera embedding simples baseado em TF-IDF
  generateEmbedding(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g) || []
    const vector = new Array(this.vocabulary.size).fill(0)
    
    words.forEach(word => {
      const index = this.vocabulary.get(word)
      if (index !== undefined) {
        vector[index] += 1
      }
    })
    
    // Normalização
    const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0))
    return magnitude > 0 ? vector.map(val => val / magnitude) : vector
  }

  // Calcula similaridade de cosseno
  cosineSimilarity(vec1, vec2) {
    if (vec1.length !== vec2.length) return 0
    
    let dotProduct = 0
    let norm1 = 0
    let norm2 = 0
    
    for (let i = 0; i < vec1.length; i++) {
      dotProduct += vec1[i] * vec2[i]
      norm1 += vec1[i] * vec1[i]
      norm2 += vec2[i] * vec2[i]
    }
    
    const magnitude = Math.sqrt(norm1) * Math.sqrt(norm2)
    return magnitude > 0 ? dotProduct / magnitude : 0
  }
}

// Sistema RAG principal
class RAGSystem {
  constructor() {
    this.embedding = new SimpleEmbedding()
    this.knowledgeEmbeddings = this.precomputeEmbeddings()
    this.conversationHistory = []
  }

  // Pré-computa embeddings da base de conhecimento
  precomputeEmbeddings() {
    return knowledgeBase.map(item => ({
      ...item,
      embedding: this.embedding.generateEmbedding(`${item.title} ${item.content} ${item.keywords.join(' ')}`)
    }))
  }

  // Busca documentos relevantes
  retrieveRelevantDocs(query, topK = 3) {
    const queryEmbedding = this.embedding.generateEmbedding(query)
    
    // Calcula similaridade com todos os documentos
    const similarities = this.knowledgeEmbeddings.map(doc => ({
      ...doc,
      similarity: this.embedding.cosineSimilarity(queryEmbedding, doc.embedding)
    }))
    
    // Ordena por similaridade e retorna top K
    return similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK)
      .filter(doc => doc.similarity > 0.1) // Threshold mínimo
  }

  // Busca híbrida (vetorial + palavra-chave)
  hybridSearch(query, topK = 3) {
    // Busca vetorial
    const vectorResults = this.retrieveRelevantDocs(query, topK)
    
    // Busca por palavra-chave
    const keywordResults = searchKnowledge(query)
    
    // Combina resultados removendo duplicatas
    const combinedResults = new Map()
    
    vectorResults.forEach(doc => {
      combinedResults.set(doc.id, { ...doc, score: doc.similarity * 0.7 })
    })
    
    keywordResults.forEach(doc => {
      if (combinedResults.has(doc.id)) {
        const existing = combinedResults.get(doc.id)
        existing.score += 0.3 // Boost para matches de palavra-chave
      } else {
        combinedResults.set(doc.id, { ...doc, score: 0.3 })
      }
    })
    
    return Array.from(combinedResults.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
  }

  // Gera resposta usando RAG
  async generateResponse(userQuery, useGemini = false) {
    try {
      // Recupera documentos relevantes
      const relevantDocs = this.hybridSearch(userQuery, 3)
      
      if (relevantDocs.length === 0) {
        return {
          response: "Desculpe, não encontrei informações específicas sobre sua pergunta. Posso ajudá-lo com informações sobre consórcios, imóveis, veículos ou sobre a Atma Corretora. Que tal reformular sua pergunta?",
          sources: [],
          confidence: 0
        }
      }
      
      // Constrói contexto
      const context = relevantDocs.map(doc => 
        `**${doc.title}**: ${doc.content}`
      ).join('\n\n')
      
      let response
      let confidence = Math.max(...relevantDocs.map(doc => doc.score || doc.similarity || 0))
      
      if (useGemini && process.env.REACT_APP_GEMINI_API_KEY) {
        // Usa Gemini API para gerar resposta mais natural
        response = await this.generateWithGemini(userQuery, context)
      } else {
        // Resposta baseada em templates
        response = this.generateTemplateResponse(userQuery, relevantDocs)
      }
      
      // Adiciona à história da conversa
      this.conversationHistory.push({
        query: userQuery,
        response: response,
        sources: relevantDocs.map(doc => doc.title),
        timestamp: new Date()
      })
      
      return {
        response,
        sources: relevantDocs,
        confidence: Math.round(confidence * 100)
      }
      
    } catch (error) {
      console.error('Erro no RAG:', error)
      return {
        response: "Desculpe, ocorreu um erro ao processar sua pergunta. Nossa equipe está disponível para atendimento direto via WhatsApp.",
        sources: [],
        confidence: 0
      }
    }
  }

  // Gera resposta usando Gemini API
  async generateWithGemini(query, context) {
    const prompt = `
Você é um assistente especializado da Atma Corretora, empresa especializada em consórcios contemplados.

CONTEXTO RELEVANTE:
${context}

PERGUNTA DO CLIENTE: ${query}

INSTRUÇÕES:
- Responda de forma clara, profissional e amigável
- Use apenas informações do contexto fornecido
- Se não souber algo, seja honesto e direcione para atendimento humano
- Mantenha foco em consórcios, imóveis e veículos
- Inclua call-to-action quando apropriado (WhatsApp, simulação, etc.)
- Resposta em português brasileiro, máximo 200 palavras

RESPOSTA:`

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      })
      
      const data = await response.json()
      return data.candidates?.[0]?.content?.parts?.[0]?.text || this.generateTemplateResponse(query, [])
      
    } catch (error) {
      console.error('Erro Gemini API:', error)
      return this.generateTemplateResponse(query, [])
    }
  }

  // Gera resposta baseada em templates
  generateTemplateResponse(query, docs) {
    if (docs.length === 0) {
      return "Não encontrei informações específicas sobre sua pergunta. Nossa equipe especializada pode ajudá-lo melhor via WhatsApp. Que tal fazer uma simulação gratuita?"
    }
    
    const mainDoc = docs[0]
    let response = mainDoc.content
    
    // Adiciona informações complementares se houver mais documentos
    if (docs.length > 1) {
      response += `\n\nInformações adicionais: ${docs[1].title}`
    }
    
    // Adiciona call-to-action baseado na categoria
    const cta = this.getCTAByCategory(mainDoc.category)
    if (cta) {
      response += `\n\n${cta}`
    }
    
    return response
  }

  // Call-to-action por categoria
  getCTAByCategory(category) {
    const ctas = {
      'empresa': '💬 Quer saber mais sobre a Atma? Entre em contato via WhatsApp!',
      'consorcio': '🧮 Faça uma simulação gratuita e descubra as melhores opções para você!',
      'imovel': '🏠 Interessado em consórcio de imóvel? Simule agora e realize seu sonho!',
      'veiculo': '🚗 Quer seu veículo novo? Faça uma simulação de consórcio sem compromisso!',
      'processo': '📋 Precisa de ajuda com o processo? Nossa equipe especializada te orienta!',
      'financeiro': '💰 Quer entender melhor os custos? Solicite uma consulta gratuita!',
      'administradora': '🏦 Conheça nossas parceiras e escolha a melhor opção para você!',
      'contato': '📞 Entre em contato conosco agora mesmo via WhatsApp!'
    }
    
    return ctas[category] || '💬 Precisa de mais informações? Fale conosco via WhatsApp!'
  }

  // Obtém histórico da conversa
  getConversationHistory() {
    return this.conversationHistory
  }

  // Limpa histórico
  clearHistory() {
    this.conversationHistory = []
  }

  // Sugere perguntas relacionadas
  getSuggestedQuestions(query) {
    const suggestions = [
      "Como funciona o consórcio contemplado?",
      "Qual a diferença entre consórcio e financiamento?",
      "Quais documentos preciso para aderir?",
      "Como fazer uma simulação?",
      "Quais são as administradoras parceiras?",
      "Posso usar FGTS no consórcio?",
      "Como funciona a contemplação?",
      "Qual o valor mínimo e máximo?",
      "Posso desistir do consórcio?",
      "Como entrar em contato com a Atma?"
    ]
    
    // Filtra sugestões baseadas na query atual
    return suggestions
      .filter(suggestion => !suggestion.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 3)
  }
}

// Instância singleton do sistema RAG
export const ragSystem = new RAGSystem()

// Funções utilitárias
export const askRAG = async (question) => {
  return await ragSystem.generateResponse(question, true) // Usa Gemini se disponível
}

export const getQuickAnswers = () => {
  return [
    { question: "O que é consórcio?", category: "consorcio" },
    { question: "Como funciona?", category: "processo" },
    { question: "Quais as vantagens?", category: "consorcio" },
    { question: "Documentos necessários?", category: "processo" },
    { question: "Fazer simulação", category: "servico" },
    { question: "Falar com especialista", category: "contato" }
  ]
}

export default ragSystem
