import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Car, Home, Wrench, ArrowRight, Sparkles, TrendingUp, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'
import { formatCurrencyInput, parseCurrencyInput, formatCurrency, getCurrencyPlaceholder } from '@/utils/formatters'

const Simulator = () => {
  const [formData, setFormData] = useState({
    tipo: '',
    valor: '',
    entrada: '',
    prazo: ''
  })
  
  const [resultado, setResultado] = useState(null)
  const [loading, setLoading] = useState(false)

  const tiposBem = [
    { id: 'imovel', label: 'Imóvel', icon: Home, color: 'bg-blue-500' },
    { id: 'veiculo', label: 'Veículo', icon: Car, color: 'bg-green-500' }
  ]

  const prazosDisponiveis = [
    { value: '12', label: '12 meses' },
    { value: '24', label: '24 meses' },
    { value: '36', label: '36 meses' },
    { value: '48', label: '48 meses' },
    { value: '60', label: '60 meses' },
    { value: '72', label: '72 meses' },
    { value: '84', label: '84 meses' },
    { value: '96', label: '96 meses' },
    { value: '120', label: '120 meses' },
    { value: '180', label: '180 meses' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Função para lidar com inputs de valor monetário
  const handleCurrencyChange = (field, event) => {
    const formattedValue = formatCurrencyInput(event.target.value);
    handleInputChange(field, formattedValue);
  }

  const calcularSimulacao = () => {
    if (!formData.tipo || !formData.valor || !formData.entrada || !formData.prazo) {
      alert('Por favor, preencha todos os campos')
      return
    }

    setLoading(true)
    
    // Simular delay de processamento
    setTimeout(() => {
      // Converter valores formatados para números
      const valor = parseCurrencyInput(formData.valor)
      const entrada = parseCurrencyInput(formData.entrada)
      const prazo = parseInt(formData.prazo)
      
      // Fórmulas reais de consórcio conforme especificação técnica
      const valorCartaCredito = valor;
      
      // Taxas padrão por tipo de bem
      const taxas = {
        'imovel': { administracao: 0.12, fundoReserva: 0.02, seguro: 0.0003 },
        'veiculo': { administracao: 0.15, fundoReserva: 0.02, seguro: 0.0004 },
        'servicos': { administracao: 0.18, fundoReserva: 0.025, seguro: 0.0002 }
      };

      const taxa = taxas[formData.tipo] || taxas['veiculo'];

      // Cálculo da parcela mensal conforme fórmula oficial:
      // Parcela = (Valor/Prazo) + (Valor*TaxaAdmin/Prazo) + (Valor*FundoReserva/Prazo) + SeguroMensal
      const fundoComumMensal = valorCartaCredito / prazo;
      const taxaAdministracaoMensal = (valorCartaCredito * taxa.administracao) / prazo;
      const fundoReservaMensal = (valorCartaCredito * taxa.fundoReserva) / prazo;
      const seguroMensal = valorCartaCredito * taxa.seguro;

      const valorParcela = fundoComumMensal + taxaAdministracaoMensal + fundoReservaMensal + seguroMensal;

      // Custo total do consórcio
      const custoTotalAdministracao = valorCartaCredito * taxa.administracao;
      const custoTotalFundoReserva = valorCartaCredito * taxa.fundoReserva;
      const custoTotalSeguro = seguroMensal * prazo;
      const custoTotal = valorCartaCredito + custoTotalAdministracao + custoTotalFundoReserva + custoTotalSeguro;
      
      // Simular cartas compatíveis baseadas nos cálculos reais
      const cartasCompativeis = [
        {
          codigo: '#2721',
          credito: valorCartaCredito,
          entrada: entrada,
          parcelas: prazo,
          valorParcela: valorParcela,
          disponivel: true,
          detalhes: {
            fundoComum: fundoComumMensal,
            taxaAdmin: taxaAdministracaoMensal,
            fundoReserva: fundoReservaMensal,
            seguro: seguroMensal,
            custoTotal: custoTotal
          }
        },
        {
          codigo: '#2767',
          credito: valorCartaCredito * 0.9,
          entrada: entrada * 0.95,
          parcelas: Math.max(prazo - 6, 12),
          valorParcela: valorParcela * 0.9,
          disponivel: true,
          detalhes: {
            fundoComum: (valorCartaCredito * 0.9) / Math.max(prazo - 6, 12),
            taxaAdmin: ((valorCartaCredito * 0.9) * taxa.administracao) / Math.max(prazo - 6, 12),
            fundoReserva: ((valorCartaCredito * 0.9) * taxa.fundoReserva) / Math.max(prazo - 6, 12),
            seguro: (valorCartaCredito * 0.9) * taxa.seguro,
            custoTotal: custoTotal * 0.9
          }
        },
        {
          codigo: '#2764',
          credito: valorCartaCredito * 1.1,
          entrada: entrada * 1.05,
          parcelas: prazo + 12,
          valorParcela: valorParcela * 0.95,
          disponivel: false,
          detalhes: {
            fundoComum: (valorCartaCredito * 1.1) / (prazo + 12),
            taxaAdmin: ((valorCartaCredito * 1.1) * taxa.administracao) / (prazo + 12),
            fundoReserva: ((valorCartaCredito * 1.1) * taxa.fundoReserva) / (prazo + 12),
            seguro: (valorCartaCredito * 1.1) * taxa.seguro,
            custoTotal: custoTotal * 1.1
          }
        }
      ]

      setResultado({
        valorSolicitado: valor,
        entradaPaga: entrada,
        prazoEscolhido: prazo,
        valorParcela: valorParcela,
        totalJuros: custoTotal - valorCartaCredito,
        cartasCompativeis,
        detalhesCalculo: {
          fundoComum: fundoComumMensal,
          taxaAdministracao: taxaAdministracaoMensal,
          fundoReserva: fundoReservaMensal,
          seguro: seguroMensal,
          taxaAdminPercent: (taxa.administracao * 100).toFixed(1),
          fundoReservaPercent: (taxa.fundoReserva * 100).toFixed(1),
          custoTotal: custoTotal
        }
      })
      
      setLoading(false)
    }, 2000)
  }

  const handleWhatsAppContact = (carta = null) => {
    const phone = "5564981235976"
    let message = `Olá! Gostaria de mais informações sobre consórcios contemplados.\n\n`
    message += `Simulação realizada:\n`
    message += `• Tipo: ${tiposBem.find(t => t.id === formData.tipo)?.label}\n`
    message += `• Valor desejado: ${formatCurrency(parseFloat(formData.valor))}\n`
    message += `• Entrada disponível: ${formatCurrency(parseFloat(formData.entrada))}\n`
    message += `• Prazo: ${formData.prazo} meses\n`
    
    if (carta) {
      message += `\nInteresse na carta ${carta.codigo}:\n`
      message += `• Crédito: ${formatCurrency(carta.credito)}\n`
      message += `• Entrada: ${formatCurrency(carta.entrada)}\n`
      message += `• Parcelas: ${carta.parcelas}x ${formatCurrency(carta.valorParcela)}`
    }
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="simulador" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <ScrollAnimation direction="down" delay={0.2}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Simulação 100% Gratuita</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              <span className="block">Simulador de</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Consórcios
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra as melhores opções de consórcio contemplado para você. 
              Simule agora e encontre a carta ideal para realizar seus sonhos.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.4}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <CardTitle className="flex items-center text-2xl lg:text-3xl font-bold relative z-10">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="mr-4"
                    >
                      <Calculator className="w-8 h-8 lg:w-10 lg:h-10" />
                    </motion.div>
                    <span>Simulação Gratuita</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-3"
                    >
                      <Sparkles className="w-6 h-6 text-yellow-300" />
                    </motion.div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 lg:p-12">
                  {/* Seleção do tipo de bem */}
                  <ScrollAnimation direction="up" delay={0.6}>
                    <div className="mb-10">
                      <label className="block text-xl font-bold text-gray-800 mb-6 text-center">
                        Qual seu objetivo?
                      </label>
                      <div className="grid md:grid-cols-3 gap-6">
                        {tiposBem.map((tipo, index) => {
                          const Icon = tipo.icon
                          const gradients = [
                            'from-blue-500 to-blue-600',
                            'from-green-500 to-green-600', 
                            'from-purple-500 to-purple-600'
                          ]
                          return (
                            <motion.button
                              key={tipo.id}
                              onClick={() => handleInputChange('tipo', tipo.id)}
                              className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                                formData.tipo === tipo.id
                                  ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl scale-105'
                                  : 'border-gray-200 hover:border-blue-300 bg-white hover:shadow-lg'
                              }`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div 
                                className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                                whileHover={{ rotate: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Icon className="w-8 h-8 text-white" />
                              </motion.div>
                              <span className="font-bold text-gray-800 text-lg">{tipo.label}</span>
                            </motion.button>
                          )
                        })}
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Campos de entrada */}
                  <ScrollAnimation direction="up" delay={0.8}>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                      >
                        <label className="flex items-center text-lg font-bold text-gray-800 mb-3">
                          <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                          Valor desejado
                        </label>
                        <motion.input
                          type="text"
                          placeholder={getCurrencyPlaceholder(150000)}
                          value={formData.valor}
                          onChange={(e) => handleCurrencyChange('valor', e)}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          maxLength="15"
                          whileFocus={{ scale: 1.02 }}
                        />
                        <p className="text-sm text-gray-500 mt-2 flex items-center">
                          <Sparkles className="w-4 h-4 mr-1" />
                          Digite apenas números, formatação automática
                        </p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                      >
                        <label className="flex items-center text-lg font-bold text-gray-800 mb-3">
                          <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                          Entrada disponível
                        </label>
                        <motion.input
                          type="text"
                          placeholder={getCurrencyPlaceholder(30000)}
                          value={formData.entrada}
                          onChange={(e) => handleCurrencyChange('entrada', e)}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          maxLength="15"
                          whileFocus={{ scale: 1.02 }}
                        />
                        <p className="text-sm text-gray-500 mt-2 flex items-center">
                          <Sparkles className="w-4 h-4 mr-1" />
                          Digite apenas números, formatação automática
                        </p>
                      </motion.div>
                    </div>
                  </ScrollAnimation>

              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Prazo desejado
                </label>
                <select
                  value={formData.prazo}
                  onChange={(e) => handleInputChange('prazo', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione o prazo</option>
                  {prazosDisponiveis.map((prazo) => (
                    <option key={prazo.value} value={prazo.value}>
                      {prazo.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Botão de simulação */}
              <div className="text-center mb-8">
                <Button
                  onClick={calcularSimulacao}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold"
                >
                  {loading ? 'Calculando...' : 'Simular Agora'}
                  {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
              </div>

              {/* Resultados */}
              {resultado && (
                <div className="border-t pt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Resultado da Simulação
                  </h3>
                  
                  {/* Aviso importante */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-yellow-800">
                          Importante - Simulação Aproximada
                        </h4>
                        <p className="mt-1 text-sm text-yellow-700">
                          Os valores apresentados são aproximados e têm caráter meramente informativo. 
                          Para obter valores reais e condições específicas, preencha o formulário de contato 
                          e nossa equipe especializada entrará em contato com você.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Resumo */}
                  <div className="grid md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600">Valor Solicitado</div>
                      <div className="text-xl font-bold text-blue-600">
                        {formatCurrency(resultado.valorSolicitado)}
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600">Entrada</div>
                      <div className="text-xl font-bold text-green-600">
                        {formatCurrency(resultado.entradaPaga)}
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600">Prazo</div>
                      <div className="text-xl font-bold text-purple-600">
                        {resultado.prazoEscolhido} meses
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600">Parcela Estimada</div>
                      <div className="text-xl font-bold text-orange-600">
                        {formatCurrency(resultado.valorParcela)}
                      </div>
                    </div>
                  </div>

                  {/* Detalhamento dos cálculos */}
                  {resultado.detalhesCalculo && (
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <h4 className="text-lg font-bold text-gray-800 mb-4">
                        Composição da Parcela Mensal
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Fundo Comum:</span>
                            <span className="font-semibold">{formatCurrency(resultado.detalhesCalculo.fundoComum)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Taxa de Administração ({resultado.detalhesCalculo.taxaAdminPercent}%):</span>
                            <span className="font-semibold">{formatCurrency(resultado.detalhesCalculo.taxaAdministracao)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Fundo de Reserva ({resultado.detalhesCalculo.fundoReservaPercent}%):</span>
                            <span className="font-semibold">{formatCurrency(resultado.detalhesCalculo.fundoReserva)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Seguro:</span>
                            <span className="font-semibold">{formatCurrency(resultado.detalhesCalculo.seguro)}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between border-t pt-3">
                            <span className="text-lg font-bold text-gray-800">Total da Parcela:</span>
                            <span className="text-lg font-bold text-blue-600">{formatCurrency(resultado.valorParcela)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Custo Total do Consórcio:</span>
                            <span className="font-semibold">{formatCurrency(resultado.detalhesCalculo.custoTotal)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total de Taxas e Seguros:</span>
                            <span className="font-semibold text-red-600">{formatCurrency(resultado.totalJuros)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cartas compatíveis */}
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    Cartas Compatíveis Encontradas
                  </h4>
                  <div className="grid gap-4">
                    {resultado.cartasCompativeis.map((carta, index) => (
                      <div
                        key={index}
                        className={`border rounded-lg p-6 ${
                          carta.disponivel ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h5 className="text-lg font-bold text-gray-800">
                              Carta {carta.codigo}
                            </h5>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                              carta.disponivel 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {carta.disponivel ? 'Disponível' : 'Reservada'}
                            </span>
                          </div>
                          {carta.disponivel && (
                            <Button
                              onClick={() => handleWhatsAppContact(carta)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Tenho Interesse
                            </Button>
                          )}
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <div className="text-sm text-gray-600">Crédito</div>
                            <div className="text-lg font-bold">
                              {formatCurrency(carta.credito)}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Entrada</div>
                            <div className="text-lg font-bold">
                              {formatCurrency(carta.entrada)}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Parcelas</div>
                            <div className="text-lg font-bold">
                              {carta.parcelas}x {formatCurrency(carta.valorParcela)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Termo de uso */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                    <h4 className="text-lg font-bold text-blue-800 mb-3">
                      Termos de Uso da Simulação
                    </h4>
                    <div className="text-sm text-blue-700 space-y-2">
                      <p>
                        <strong>1. Caráter Informativo:</strong> Esta simulação tem caráter meramente informativo e educativo, 
                        baseada em fórmulas padrão do mercado de consórcios.
                      </p>
                      <p>
                        <strong>2. Valores Aproximados:</strong> Os valores apresentados são aproximados e podem variar 
                        conforme as condições específicas de cada administradora e tipo de bem.
                      </p>
                      <p>
                        <strong>3. Não Constitui Proposta:</strong> Esta simulação não constitui proposta comercial ou 
                        compromisso de contratação por parte da Atma Seguros e Consórcios.
                      </p>
                      <p>
                        <strong>4. Valores Reais:</strong> Para obter valores reais, condições específicas e propostas 
                        comerciais, preencha o formulário de contato. Nossa equipe especializada entrará em contato 
                        com informações precisas e atualizadas.
                      </p>
                      <p>
                        <strong>5. Variações:</strong> Os valores podem sofrer alterações devido a reajustes anuais, 
                        mudanças nas taxas de administração, seguros e outras condições contratuais.
                      </p>
                    </div>
                  </div>

                  {/* CTA final */}
                  <div className="text-center mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Gostou das opções?
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Fale conosco agora e garante sua carta contemplada com valores reais!
                    </p>
                    <Button
                      onClick={() => handleWhatsAppContact()}
                      className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                    >
                      Falar com Especialista
                    </Button>
                  </div>
                </div>
              )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Simulator

