import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Search,
  Filter,
  BarChart3,
  Home,
  Car,
  Wrench
} from 'lucide-react'

const AdminPanel = () => {
  const [cartas, setCartas] = useState([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingCarta, setEditingCarta] = useState(null)
  const [filtros, setFiltros] = useState({
    tipo: '',
    disponivel: '',
    busca: ''
  })
  const [estatisticas, setEstatisticas] = useState(null)

  const API_BASE = 'https://5000-i3bzwcccv6fr0x975y13z-ea9ccfcb.manusvm.computer/api'

  const [formData, setFormData] = useState({
    codigo: '',
    tipo: '',
    credito: '',
    entrada_minima: '',
    parcelas_restantes: '',
    valor_parcela: '',
    disponivel: true,
    descricao: '',
    data_contemplacao: ''
  })

  const tiposBem = [
    { id: 'imovel', label: 'Imóvel', icon: Home, color: 'bg-blue-500' },
    { id: 'veiculo', label: 'Veículo', icon: Car, color: 'bg-green-500' },
    { id: 'servicos', label: 'Serviços', icon: Wrench, color: 'bg-purple-500' }
  ]

  useEffect(() => {
    carregarCartas()
    carregarEstatisticas()
  }, [filtros])

  const carregarCartas = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (filtros.tipo) params.append('tipo', filtros.tipo)
      if (filtros.disponivel !== '') params.append('disponivel', filtros.disponivel)
      
      const response = await fetch(`${API_BASE}/cartas?${params}`)
      const data = await response.json()
      
      if (data.success) {
        let cartasFiltradas = data.cartas
        
        // Filtro de busca local
        if (filtros.busca) {
          cartasFiltradas = cartasFiltradas.filter(carta =>
            carta.codigo.toLowerCase().includes(filtros.busca.toLowerCase()) ||
            carta.descricao?.toLowerCase().includes(filtros.busca.toLowerCase())
          )
        }
        
        setCartas(cartasFiltradas)
      }
    } catch (error) {
      console.error('Erro ao carregar cartas:', error)
    }
    setLoading(false)
  }

  const carregarEstatisticas = async () => {
    try {
      const response = await fetch(`${API_BASE}/cartas/estatisticas`)
      const data = await response.json()
      
      if (data.success) {
        setEstatisticas(data.estatisticas)
      }
    } catch (error) {
      console.error('Erro ao carregar estatísticas:', error)
    }
  }

  const salvarCarta = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const url = editingCarta 
        ? `${API_BASE}/cartas/${editingCarta.id}`
        : `${API_BASE}/cartas`
      
      const method = editingCarta ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (data.success) {
        setShowForm(false)
        setEditingCarta(null)
        resetForm()
        carregarCartas()
        carregarEstatisticas()
        alert(data.message)
      } else {
        alert(data.error)
      }
    } catch (error) {
      console.error('Erro ao salvar carta:', error)
      alert('Erro ao salvar carta')
    }
    
    setLoading(false)
  }

  const deletarCarta = async (id) => {
    if (!confirm('Tem certeza que deseja deletar esta carta?')) return
    
    try {
      const response = await fetch(`${API_BASE}/cartas/${id}`, {
        method: 'DELETE'
      })
      
      const data = await response.json()
      
      if (data.success) {
        carregarCartas()
        carregarEstatisticas()
        alert(data.message)
      } else {
        alert(data.error)
      }
    } catch (error) {
      console.error('Erro ao deletar carta:', error)
      alert('Erro ao deletar carta')
    }
  }

  const toggleDisponibilidade = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/cartas/${id}/toggle-disponibilidade`, {
        method: 'PATCH'
      })
      
      const data = await response.json()
      
      if (data.success) {
        carregarCartas()
        carregarEstatisticas()
        alert(data.message)
      } else {
        alert(data.error)
      }
    } catch (error) {
      console.error('Erro ao alterar disponibilidade:', error)
      alert('Erro ao alterar disponibilidade')
    }
  }

  const editarCarta = (carta) => {
    setEditingCarta(carta)
    setFormData({
      codigo: carta.codigo,
      tipo: carta.tipo,
      credito: carta.credito.toString(),
      entrada_minima: carta.entrada_minima.toString(),
      parcelas_restantes: carta.parcelas_restantes.toString(),
      valor_parcela: carta.valor_parcela.toString(),
      disponivel: carta.disponivel,
      descricao: carta.descricao || '',
      data_contemplacao: carta.data_contemplacao ? carta.data_contemplacao.split('T')[0] : ''
    })
    setShowForm(true)
  }

  const resetForm = () => {
    setFormData({
      codigo: '',
      tipo: '',
      credito: '',
      entrada_minima: '',
      parcelas_restantes: '',
      valor_parcela: '',
      disponivel: true,
      descricao: '',
      data_contemplacao: ''
    })
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const getTipoInfo = (tipo) => {
    return tiposBem.find(t => t.id === tipo) || { label: tipo, icon: Home, color: 'bg-gray-500' }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Painel Administrativo - Cartas Contempladas
          </h1>
          <p className="text-gray-600">
            Gerencie as cartas de consórcio contempladas disponíveis
          </p>
        </div>

        {/* Estatísticas */}
        {estatisticas && (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total de Cartas</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {estatisticas.total_cartas}
                    </p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Disponíveis</p>
                    <p className="text-3xl font-bold text-green-600">
                      {estatisticas.cartas_disponiveis}
                    </p>
                  </div>
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Reservadas</p>
                    <p className="text-3xl font-bold text-red-600">
                      {estatisticas.cartas_reservadas}
                    </p>
                  </div>
                  <EyeOff className="w-8 h-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Taxa Disponível</p>
                    <p className="text-3xl font-bold text-purple-600">
                      {estatisticas.total_cartas > 0 
                        ? Math.round((estatisticas.cartas_disponiveis / estatisticas.total_cartas) * 100)
                        : 0}%
                    </p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Controles */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nova Carta
          </Button>
          
          <div className="flex gap-4 flex-1">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por código ou descrição..."
                value={filtros.busca}
                onChange={(e) => setFiltros(prev => ({ ...prev, busca: e.target.value }))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={filtros.tipo}
              onChange={(e) => setFiltros(prev => ({ ...prev, tipo: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos os tipos</option>
              <option value="imovel">Imóvel</option>
              <option value="veiculo">Veículo</option>
              <option value="servicos">Serviços</option>
            </select>
            
            <select
              value={filtros.disponivel}
              onChange={(e) => setFiltros(prev => ({ ...prev, disponivel: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todas</option>
              <option value="true">Disponíveis</option>
              <option value="false">Reservadas</option>
            </select>
          </div>
        </div>

        {/* Lista de Cartas */}
        <div className="grid gap-6">
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Carregando...</p>
            </div>
          ) : cartas.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Nenhuma carta encontrada</p>
            </div>
          ) : (
            cartas.map((carta) => {
              const tipoInfo = getTipoInfo(carta.tipo)
              const Icon = tipoInfo.icon
              
              return (
                <Card key={carta.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${tipoInfo.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            Carta {carta.codigo}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={carta.disponivel ? "default" : "destructive"}>
                              {carta.disponivel ? 'Disponível' : 'Reservada'}
                            </Badge>
                            <Badge variant="outline">
                              {tipoInfo.label}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleDisponibilidade(carta.id)}
                        >
                          {carta.disponivel ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => editarCarta(carta)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deletarCarta(carta.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Crédito</p>
                        <p className="text-lg font-semibold">
                          {formatCurrency(carta.credito)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Entrada Mínima</p>
                        <p className="text-lg font-semibold">
                          {formatCurrency(carta.entrada_minima)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Parcelas Restantes</p>
                        <p className="text-lg font-semibold">
                          {carta.parcelas_restantes}x
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Valor da Parcela</p>
                        <p className="text-lg font-semibold">
                          {formatCurrency(carta.valor_parcela)}
                        </p>
                      </div>
                    </div>
                    
                    {carta.descricao && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">Descrição</p>
                        <p className="text-gray-800">{carta.descricao}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>

        {/* Modal do Formulário */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>
                  {editingCarta ? 'Editar Carta' : 'Nova Carta'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={salvarCarta} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Código *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.codigo}
                        onChange={(e) => setFormData(prev => ({ ...prev, codigo: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ex: #2721"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo *
                      </label>
                      <select
                        required
                        value={formData.tipo}
                        onChange={(e) => setFormData(prev => ({ ...prev, tipo: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecione o tipo</option>
                        <option value="imovel">Imóvel</option>
                        <option value="veiculo">Veículo</option>
                        <option value="servicos">Serviços</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Crédito *
                      </label>
                      <input
                        type="number"
                        required
                        step="0.01"
                        value={formData.credito}
                        onChange={(e) => setFormData(prev => ({ ...prev, credito: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="150000.00"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Entrada Mínima *
                      </label>
                      <input
                        type="number"
                        required
                        step="0.01"
                        value={formData.entrada_minima}
                        onChange={(e) => setFormData(prev => ({ ...prev, entrada_minima: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="30000.00"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Parcelas Restantes *
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.parcelas_restantes}
                        onChange={(e) => setFormData(prev => ({ ...prev, parcelas_restantes: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="48"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Valor da Parcela *
                      </label>
                      <input
                        type="number"
                        required
                        step="0.01"
                        value={formData.valor_parcela}
                        onChange={(e) => setFormData(prev => ({ ...prev, valor_parcela: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="2500.00"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Data de Contemplação
                    </label>
                    <input
                      type="date"
                      value={formData.data_contemplacao}
                      onChange={(e) => setFormData(prev => ({ ...prev, data_contemplacao: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descrição
                    </label>
                    <textarea
                      value={formData.descricao}
                      onChange={(e) => setFormData(prev => ({ ...prev, descricao: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows="3"
                      placeholder="Informações adicionais sobre a carta..."
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="disponivel"
                      checked={formData.disponivel}
                      onChange={(e) => setFormData(prev => ({ ...prev, disponivel: e.target.checked }))}
                      className="mr-2"
                    />
                    <label htmlFor="disponivel" className="text-sm font-medium text-gray-700">
                      Carta disponível
                    </label>
                  </div>
                  
                  <div className="flex justify-end space-x-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowForm(false)
                        setEditingCarta(null)
                        resetForm()
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {loading ? 'Salvando...' : (editingCarta ? 'Atualizar' : 'Criar')}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel

