import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Car, Home, Wrench, ArrowRight, Clock, Zap, TrendingUp } from 'lucide-react'

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
    { id: 'veiculo', label: 'Veículo', icon: Car, color: 'bg-green-500' },
    { id: 'servicos', label: 'Serviços', icon: Wrench, color: 'bg-purple-500' }
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

  const modalidades = [
    {
      id: 'contemplada',
      nome: 'Carta Contemplada',
      icon: Zap,
      cor: 'text-yellow-600',
      bgCor: 'bg-yellow-50',
      borderCor: 'border-yellow-200',
      descricao: 'Crédito liberado imediatamente',
      vantagens: ['Sem espera', 'Crédito hoje mesmo', 'Ideal para urgência'],
      multiplicador: 1.0,
      prazoAjuste: 0
    },
    {
      id: 'andamento',
      nome: 'Carta em Andamento',
      icon: TrendingUp,
      cor: 'text-blue-600',
      bgCor: 'bg-blue-50',
      borderCor: 'border-blue-200',
      descricao: 'Grupos ativos com boa chance de contemplação',
      vantagens: ['Melhor custo-benefício', 'Contemplação em 6-18 meses', 'Parcelas menores'],
      multiplicador: 0.85,
      prazoAjuste: -6
    },
    {
      id: 'novo',
      nome: 'Novo Grupo',
      icon: Clock,
      cor: 'text-green-600',
      bgCor: 'bg-green-50',
      borderCor: 'border-green-200',
      descricao: 'Grupos novos com máxima economia',
      vantagens: ['Menor custo total', 'Parcelas reduzidas', 'Planejamento longo prazo'],
      multiplicador: 0.95,
      prazoAjuste: 0
    }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const calcularSimulacao = () => {
    if (!formData.tipo || !formData.valor || !formData.entrada || !formData.prazo) {
      alert('Por favor, preencha todos os campos')
      return
    }

    setLoading(true)
    
    // Simular delay de processamento
    setTimeout(() => {
      const valor = parseFloat(formData.valor)
      const entrada = parseFloat(formData.entrada)
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

      // Calcular para cada modalidade
      const resultadosPorModalidade = modalidades.map(modalidade => {
        const valorAjustado = valorCartaCredito * modalidade.multiplicador;
        const prazoAjustado = Math.max(prazo + modalidade.prazoAjuste, 12);
        
        // Cálculo da parcela mensal conforme fórmula oficial:
        const fundoComumMensal = valorAjustado / prazoAjustado;
        const taxaAdministracaoMensal = (valorAjustado * taxa.administracao) / prazoAjustado;
        const fundoReservaMensal = (valorAjustado * taxa.fundoReserva) / prazoAjustado;
        const seguroMensal = valorAjustado * taxa.seguro;

        const valorParcela = fundoComumMensal + taxaAdministracaoMensal + fundoReservaMensal + seguroMensal;

        // Custo total do consórcio
        const custoTotalAdministracao = valorAjustado * taxa.administracao;
        const custoTotalFundoReserva = valorAjustado * taxa.fundoReserva;
        const custoTotalSeguro = seguroMensal * prazoAjustado;
        const custoTotal = valorAjustado + custoTotalAdministracao + custoTotalFundoReserva + custoTotalSeguro;
        
        return {
          modalidade,
          valorCredito: valorAjustado,
          prazo: prazoAjustado,
          valorParcela,
          custoTotal,
          economia: (valor * 1.5) - custoTotal, // Comparação com financiamento
          detalhes: {
            fundoComum: fundoComumMensal,
            taxaAdmin: taxaAdministracaoMensal,
            fundoReserva: fundoReservaMensal,
            seguro: seguroMensal
          }
        }
      });

      setResultado({
        valorSolicitado: valor,
        entradaPaga: entrada,
        prazoEscolhido: prazo,
        modalidades: resultadosPorModalidade,
        taxaInfo: {
          administracao: (taxa.administracao * 100).toFixed(1),
          fundoReserva: (taxa.fundoReserva * 100).toFixed(1)
        }
      })
      
      setLoading(false)
    }, 2000)
  }

  const handleWhatsAppContact = (modalidadeEscolhida = null) => {
    const phone = "5564981235976"
    let message = `Olá! Gostaria de mais informações sobre consórcios.\n\n`
    message += `Simulação realizada:\n`
    message += `• Tipo: ${tiposBem.find(t => t.id === formData.tipo)?.label}\n`
    message += `• Valor desejado: ${formatCurrency(parseFloat(formData.valor))}\n`
    message += `• Entrada disponível: ${formatCurrency(parseFloat(formData.entrada))}\n`
    message += `• Prazo: ${formData.prazo} meses\n`
    
    if (modalidadeEscolhida) {
      message += `\nInteresse na modalidade: ${modalidadeEscolhida.modalidade.nome}\n`
      message += `• Crédito: ${formatCurrency(modalidadeEscolhida.valorCredito)}\n`
      message += `• Parcela: ${formatCurrency(modalidadeEscolhida.valorParcela)}\n`
      message += `• Prazo: ${modalidadeEscolhida.prazo} meses`
    }
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="simulador" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Simulador de Consórcios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as melhores opções de consórcio para você. 
            Compare as 3 modalidades disponíveis e encontre a ideal para seu perfil.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Calculator className="w-8 h-8 mr-3" />
                Simulação Gratuita - Portfólio Completo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Seleção do tipo de bem */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  Qual seu objetivo?
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {tiposBem.map((tipo) => {
                    const Icon = tipo.icon
                    return (
                      <button
                        key={tipo.id}
                        onClick={() => handleInputChange('tipo', tipo.id)}
                        className={`p-6 rounded-lg border-2 transition-all ${
                          formData.tipo === tipo.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-12 h-12 ${tipo.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-semibold text-gray-700">{tipo.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Campos de entrada */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Valor desejado
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 150000"
                    value={formData.valor}
                    onChange={(e) => handleInputChange('valor', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Entrada disponível
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 30000"
                    value={formData.entrada}
                    onChange={(e) => handleInputChange('entrada', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

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
                  {loading ? 'Calculando...' : 'Simular Todas as Modalidades'}
                  {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
              </div>

              {/* Resultados */}
              {resultado && (
                <div className="border-t pt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Resultado da Simulação - 3 Modalidades
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
                          e nossa equipe especializada da Atma Consórcios entrará em contato com você.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Comparação das modalidades */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {resultado.modalidades.map((item, index) => {
                      const Icon = item.modalidade.icon
                      return (
                        <Card key={item.modalidade.id} className={`${item.modalidade.borderCor} border-2`}>
                          <CardHeader className={`${item.modalidade.bgCor} pb-4`}>
                            <div className="flex items-center justify-center mb-2">
                              <Icon className={`w-8 h-8 ${item.modalidade.cor}`} />
                            </div>
                            <CardTitle className={`text-center ${item.modalidade.cor} text-lg`}>
                              {item.modalidade.nome}
                            </CardTitle>
                            <p className="text-center text-sm text-gray-600">
                              {item.modalidade.descricao}
                            </p>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <div className="space-y-3 mb-4">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Crédito:</span>
                                <span className="font-semibold">{formatCurrency(item.valorCredito)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Parcela:</span>
                                <span className="font-semibold text-lg">{formatCurrency(item.valorParcela)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Prazo:</span>
                                <span className="font-semibold">{item.prazo} meses</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Total:</span>
                                <span className="font-semibold">{formatCurrency(item.custoTotal)}</span>
                              </div>
                              <div className="flex justify-between border-t pt-2">
                                <span className="text-sm text-green-600">Economia:</span>
                                <span className="font-semibold text-green-600">{formatCurrency(item.economia)}</span>
                              </div>
                            </div>
                            
                            <div className="mb-4">
                              <h5 className="font-semibold text-sm mb-2">Vantagens:</h5>
                              <ul className="text-xs space-y-1">
                                {item.modalidade.vantagens.map((vantagem, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                                    {vantagem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <Button
                              onClick={() => handleWhatsAppContact(item)}
                              className={`w-full ${item.modalidade.cor.replace('text-', 'bg-').replace('600', '500')} hover:${item.modalidade.cor.replace('text-', 'bg-').replace('600', '600')} text-white`}
                            >
                              Tenho Interesse
                            </Button>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>

                  {/* Resumo comparativo */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">
                      Resumo Comparativo
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Modalidade</th>
                            <th className="text-right py-2">Parcela</th>
                            <th className="text-right py-2">Prazo</th>
                            <th className="text-right py-2">Total</th>
                            <th className="text-right py-2">Economia</th>
                          </tr>
                        </thead>
                        <tbody>
                          {resultado.modalidades.map((item) => (
                            <tr key={item.modalidade.id} className="border-b">
                              <td className="py-2 font-medium">{item.modalidade.nome}</td>
                              <td className="text-right py-2">{formatCurrency(item.valorParcela)}</td>
                              <td className="text-right py-2">{item.prazo}m</td>
                              <td className="text-right py-2">{formatCurrency(item.custoTotal)}</td>
                              <td className="text-right py-2 text-green-600">{formatCurrency(item.economia)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Call to action geral */}
                  <div className="text-center bg-blue-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Quer saber mais sobre essas modalidades?
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Nossa equipe especializada pode te ajudar a escolher a modalidade ideal para seu perfil
                    </p>
                    <Button
                      onClick={() => handleWhatsAppContact()}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                    >
                      Falar com Especialista
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Simulatoremibold">{formatCurrency(resultado.detalhesCalculo.seguro)}</span>
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
        </div>
      </div>
    </section>
  )
}

export default Simulator

