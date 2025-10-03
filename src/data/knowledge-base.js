// Base de Conhecimento da Atma Corretora
// Sistema RAG - Retrieval-Augmented Generation

export const knowledgeBase = [
  // SOBRE A ATMA CORRETORA
  {
    id: 'atma-empresa',
    category: 'empresa',
    title: 'Sobre a Atma Corretora',
    content: `A Atma é uma corretora especializada em consórcios contemplados, atuando como consultoria profissional no mercado brasileiro. 
    Trabalhamos com as maiores administradoras do país: Porto Seguro Consórcio, HS Consórcio e Volkswagen Consórcio Nacional. 
    Nossa missão é conectar pessoas aos seus sonhos através de soluções patrimoniais inteligentes e seguras.`,
    keywords: ['atma', 'empresa', 'corretora', 'consultoria', 'especialista', 'quem somos', 'sobre']
  },
  
  {
    id: 'atma-diferenciais',
    category: 'empresa',
    title: 'Diferenciais da Atma',
    content: `Nossos diferenciais incluem: atendimento personalizado e especializado, soluções financeiras inteligentes, 
    experiência comprovada no mercado, parcerias com as maiores administradoras do Brasil, e foco exclusivo em 
    consórcios contemplados para imóveis e veículos. Realizamos seus sonhos com segurança e transparência.`,
    keywords: ['diferenciais', 'vantagens', 'benefícios', 'por que escolher', 'atendimento', 'especializado']
  },

  // CONSÓRCIOS - CONCEITOS BÁSICOS
  {
    id: 'consorcio-definicao',
    category: 'consorcio',
    title: 'O que é Consórcio',
    content: `Consórcio é um sistema de autofinanciamento que reúne um grupo de pessoas com o mesmo objetivo: 
    adquirir um bem (imóvel ou veículo). Cada participante paga uma parcela mensal e concorre mensalmente 
    ao sorteio ou pode dar um lance para ser contemplado. É regulamentado pelo Banco Central do Brasil.`,
    keywords: ['consórcio', 'definição', 'o que é', 'como funciona', 'autofinanciamento', 'grupo']
  },

  {
    id: 'consorcio-contemplado',
    category: 'consorcio',
    title: 'Consórcio Contemplado',
    content: `Consórcio contemplado é quando um participante já foi sorteado ou deu lance e tem o direito de usar 
    o crédito para comprar o bem desejado. A pessoa pode usar o crédito imediatamente, sem precisar esperar 
    ser contemplada. É uma excelente oportunidade para quem tem pressa em adquirir o bem.`,
    keywords: ['contemplado', 'sorteado', 'lance', 'crédito liberado', 'imediato', 'oportunidade']
  },

  {
    id: 'consorcio-vantagens',
    category: 'consorcio',
    title: 'Vantagens do Consórcio',
    content: `As principais vantagens do consórcio são: não paga juros (apenas taxa de administração), 
    parcelas menores que financiamentos tradicionais, possibilidade de quitar antecipadamente com desconto, 
    bem fica livre de alienação após quitação, e é uma forma disciplinada de poupança. Ideal para 
    planejamento financeiro de longo prazo.`,
    keywords: ['vantagens', 'benefícios', 'sem juros', 'parcelas menores', 'quitar', 'poupança']
  },

  // IMÓVEIS
  {
    id: 'consorcio-imovel',
    category: 'imovel',
    title: 'Consórcio de Imóvel',
    content: `O consórcio de imóvel permite adquirir casa, apartamento, terreno ou imóvel comercial. 
    Valores disponíveis de R$ 50.000 a R$ 800.000. Prazos de 12 a 200 meses. O imóvel pode ser 
    novo ou usado, na planta ou pronto. Aceita financiamento complementar se o valor do imóvel 
    for maior que o crédito do consórcio.`,
    keywords: ['imóvel', 'casa', 'apartamento', 'terreno', 'comercial', 'valores', 'prazos']
  },

  {
    id: 'imovel-documentacao',
    category: 'imovel',
    title: 'Documentação para Imóvel',
    content: `Para consórcio de imóvel é necessário: RG, CPF, comprovante de renda, comprovante de residência, 
    certidões negativas (SPC, Serasa, Receita Federal). Para liberação do crédito: documentos do imóvel, 
    matrícula atualizada, certidões do imóvel, avaliação técnica. O processo é simples e nossa equipe 
    auxilia em todas as etapas.`,
    keywords: ['documentação', 'documentos', 'rg', 'cpf', 'renda', 'certidões', 'matrícula', 'avaliação']
  },

  // VEÍCULOS
  {
    id: 'consorcio-veiculo',
    category: 'veiculo',
    title: 'Consórcio de Veículo',
    content: `O consórcio de veículo permite adquirir carro, moto, caminhão ou veículo comercial. 
    Valores disponíveis de R$ 20.000 a R$ 200.000. Prazos de 12 a 100 meses. O veículo pode ser 
    novo ou usado, nacional ou importado. Aceita troca com veículo usado como entrada.`,
    keywords: ['veículo', 'carro', 'moto', 'caminhão', 'comercial', 'novo', 'usado', 'troca']
  },

  {
    id: 'veiculo-documentacao',
    category: 'veiculo',
    title: 'Documentação para Veículo',
    content: `Para consórcio de veículo é necessário: RG, CPF, CNH válida, comprovante de renda, 
    comprovante de residência, certidões negativas. Para liberação: documentos do veículo, 
    nota fiscal (se novo), documento de transferência (se usado), vistoria técnica. 
    Processo rápido com nossa assessoria completa.`,
    keywords: ['documentação', 'cnh', 'habilitação', 'nota fiscal', 'transferência', 'vistoria']
  },

  // PROCESSO E PROCEDIMENTOS
  {
    id: 'como-aderir',
    category: 'processo',
    title: 'Como Aderir ao Consórcio',
    content: `Para aderir ao consórcio: 1) Entre em contato conosco, 2) Escolha o valor e prazo desejado, 
    3) Envie a documentação, 4) Assinatura do contrato, 5) Pagamento da primeira parcela. 
    Todo processo pode ser feito online. Nossa equipe especializada orienta em cada etapa 
    garantindo segurança e transparência.`,
    keywords: ['aderir', 'como participar', 'processo', 'contrato', 'primeira parcela', 'online']
  },

  {
    id: 'contemplacao-processo',
    category: 'processo',
    title: 'Processo de Contemplação',
    content: `A contemplação acontece por sorteio mensal ou lance. No sorteio, números são sorteados 
    aleatoriamente. No lance, quem oferece maior valor de entrada é contemplado. Após contemplação, 
    o participante tem prazo para apresentar documentação do bem e liberar o crédito. 
    Processo transparente e regulamentado.`,
    keywords: ['contemplação', 'sorteio', 'lance', 'entrada', 'liberar crédito', 'prazo']
  },

  {
    id: 'taxas-custos',
    category: 'financeiro',
    title: 'Taxas e Custos do Consórcio',
    content: `O consórcio possui taxa de administração (varia de 15% a 25% do valor total), 
    fundo de reserva (pequeno percentual para garantias), seguro prestamista (opcional), 
    e taxa de adesão (valor único na entrada). Não há juros como no financiamento tradicional. 
    Todas as taxas são transparentes e informadas previamente.`,
    keywords: ['taxas', 'custos', 'administração', 'fundo reserva', 'seguro', 'adesão', 'sem juros']
  },

  // ADMINISTRADORAS PARCEIRAS
  {
    id: 'porto-seguro',
    category: 'administradora',
    title: 'Porto Seguro Consórcio',
    content: `A Porto Seguro é uma das maiores e mais confiáveis administradoras de consórcio do Brasil. 
    Oferece grupos para imóveis e veículos com excelente histórico de contemplações. 
    Possui sistema online moderno, atendimento 24h e ampla rede de credenciados. 
    Empresa sólida com mais de 70 anos de mercado.`,
    keywords: ['porto seguro', 'administradora', 'confiável', 'contemplações', 'online', 'credenciados']
  },

  {
    id: 'hs-consorcio',
    category: 'administradora',
    title: 'HS Consórcio',
    content: `A HS Consórcio, do Grupo Herval, é reconhecida pela agilidade e inovação. 
    Oferece consórcios de imóveis e veículos com processos digitais e contemplações frequentes. 
    Possui app próprio, atendimento personalizado e parcerias estratégicas. 
    Empresa gaúcha com forte presença nacional.`,
    keywords: ['hs consórcio', 'herval', 'agilidade', 'inovação', 'digital', 'app', 'gaúcha']
  },

  {
    id: 'volkswagen-consorcio',
    category: 'administradora',
    title: 'Volkswagen Consórcio Nacional',
    content: `A Volkswagen Consórcio Nacional é especializada em veículos da marca Volkswagen. 
    Oferece condições especiais para carros novos e seminovos VW. Possui relacionamento 
    direto com concessionárias, facilitando a compra. Tradição e confiabilidade da marca 
    alemã no mercado brasileiro.`,
    keywords: ['volkswagen', 'vw', 'veículos', 'carros novos', 'seminovos', 'concessionárias', 'alemã']
  },

  // DÚVIDAS FREQUENTES
  {
    id: 'consorcio-vs-financiamento',
    category: 'comparacao',
    title: 'Consórcio vs Financiamento',
    content: `Consórcio: sem juros, parcelas menores, bem livre após quitação, precisa aguardar contemplação. 
    Financiamento: com juros, parcelas maiores, bem alienado até quitação, crédito imediato. 
    Consórcio é melhor para quem pode aguardar e quer economia. Financiamento para urgência. 
    Consórcio contemplado une o melhor dos dois mundos.`,
    keywords: ['comparação', 'financiamento', 'diferença', 'juros', 'parcelas', 'melhor opção']
  },

  {
    id: 'desistencia-consorcio',
    category: 'processo',
    title: 'Desistência do Consórcio',
    content: `É possível desistir do consórcio a qualquer momento. Valores pagos são devolvidos 
    conforme regulamento: contemplados recebem após encerramento do grupo, não contemplados 
    podem receber antecipadamente com desconto. Sempre há carência mínima. 
    Nossa equipe esclarece todas as condições antes da adesão.`,
    keywords: ['desistência', 'desistir', 'devolução', 'valores pagos', 'carência', 'regulamento']
  },

  // CONTATO E ATENDIMENTO
  {
    id: 'atendimento-atma',
    category: 'contato',
    title: 'Atendimento Atma',
    content: `A Atma oferece atendimento personalizado através de nossa equipe especializada: 
    Karla Helfstein e Carlos Atma. Atendemos por WhatsApp, telefone, e-mail e redes sociais. 
    Horário comercial de segunda a sexta, 8h às 18h. Plantão de urgência nos finais de semana. 
    Consulta gratuita e sem compromisso.`,
    keywords: ['atendimento', 'karla', 'carlos', 'whatsapp', 'telefone', 'email', 'consulta gratuita']
  },

  {
    id: 'simulacao-consorcio',
    category: 'servico',
    title: 'Simulação de Consórcio',
    content: `Oferecemos simulação gratuita e personalizada de consórcio. Informe o valor desejado, 
    prazo preferido e tipo de bem (imóvel ou veículo). Calculamos as melhores opções disponíveis 
    nas administradoras parceiras. Simulação sem compromisso, com orientação especializada 
    sobre a melhor escolha para seu perfil.`,
    keywords: ['simulação', 'gratuita', 'personalizada', 'calcular', 'melhores opções', 'sem compromisso']
  }
]

// Função para buscar conhecimento por categoria
export const getKnowledgeByCategory = (category) => {
  return knowledgeBase.filter(item => item.category === category)
}

// Função para buscar conhecimento por palavras-chave
export const searchKnowledge = (query) => {
  const searchTerms = query.toLowerCase().split(' ')
  return knowledgeBase.filter(item => {
    const searchText = `${item.title} ${item.content} ${item.keywords.join(' ')}`.toLowerCase()
    return searchTerms.some(term => searchText.includes(term))
  })
}

// Categorias disponíveis
export const categories = [
  { id: 'empresa', name: 'Sobre a Atma', icon: '🏢' },
  { id: 'consorcio', name: 'Consórcios', icon: '💰' },
  { id: 'imovel', name: 'Imóveis', icon: '🏠' },
  { id: 'veiculo', name: 'Veículos', icon: '🚗' },
  { id: 'processo', name: 'Processos', icon: '📋' },
  { id: 'financeiro', name: 'Financeiro', icon: '💳' },
  { id: 'administradora', name: 'Administradoras', icon: '🏦' },
  { id: 'comparacao', name: 'Comparações', icon: '⚖️' },
  { id: 'contato', name: 'Contato', icon: '📞' },
  { id: 'servico', name: 'Serviços', icon: '🛠️' }
]
