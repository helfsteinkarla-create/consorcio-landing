import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Car, Home, Wrench, ArrowRight } from 'lucide-react'

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
      
      // Cálculos básicos de consórcio
      const valorFinanciado = valor - entrada
      const taxaJuros = 0.008 // 0.8% ao mês (exemplo)
      const valorParcela = (valorFinanciado * (1 + taxaJuros * prazo)) / prazo
      
      // Simular cartas compatíveis
      const cartasCompativeis = [
        {
          codigo: '#2721',
          credito: valor * 0.9,
          entrada: entrada * 0.95,
          parcelas: Math.floor(prazo * 0.8),
          valorParcela: valorParcela * 0.9,
          disponivel: true
        },
        {
          codigo: '#2767',
          credito: valor * 1.1,
          entrada: entrada * 1.05,
          parcelas: Math.floor(prazo * 1.2),
          valorParcela: valorParcela * 0.85,
          disponivel: true
        },
        {
          codigo: '#2764',
          credito: valor * 1.05,
          entrada: entrada * 1.1,
          parcelas: Math.floor(prazo * 1.1),
          valorParcela: valorParcela * 0.95,
          disponivel: false
        }
      ]

      setResultado({
        valorSolicitado: valor,
        entradaPaga: entrada,
        prazoEscolhido: prazo,
        valorParcela: valorParcela,
        totalJuros: valorParcela * prazo - valorFinanciado,
        cartasCompativeis
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
    <section id="simulador" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Simulador de Consórcios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as melhores opções de consórcio contemplado para você. 
            Simule agora e encontre a carta ideal para realizar seus sonhos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Calculator className="w-8 h-8 mr-3" />
                Simulação Gratuita
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

                  {/* CTA final */}
                  <div className="text-center mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Gostou das opções?
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Fale conosco agora e garante sua carta contemplada!
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

