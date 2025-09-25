# Landing Page - Atma Seguros e Consórcios

Uma landing page completa para venda de consórcios contemplados com sistema de qualificação de leads automatizado.

## 🚀 Funcionalidades

### ✅ Landing Page Responsiva
- Design moderno e profissional
- Otimizada para conversão
- Compatível com desktop e mobile
- SEO otimizada

### ✅ Simulador de Consórcios
- Simulação interativa de parcelas
- Filtros por tipo (Imóvel, Veículo, Serviços)
- Cálculo automático de cartas compatíveis
- Integração direta com WhatsApp

### ✅ Sistema Administrativo
- Painel para gerenciar cartas contempladas
- CRUD completo de oportunidades
- Filtros e busca avançada
- Estatísticas em tempo real
- API REST completa

### ✅ Formulário Qualificador
- Coleta dados: Nome, Objetivo, Email, WhatsApp
- Validação completa de campos
- Máscara automática para telefone
- Integração automática com WhatsApp
- Mensagem pré-formatada

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Shadcn/UI** - Componentes UI
- **Lucide React** - Ícones

### Backend
- **Flask** - API REST
- **SQLite** - Banco de dados
- **Flask-CORS** - Suporte a CORS
- **Requests** - Integração com APIs externas

### Integrações
- **WhatsApp API** - Integração de mensagens
- **GitHub Actions** - Deploy automatizado

## 📁 Estrutura do Projeto

```
consorcio-landing/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes base (Shadcn/UI)
│   │   ├── Header.jsx       # Cabeçalho da página
│   │   ├── Hero.jsx         # Seção principal
│   │   ├── Simulator.jsx    # Simulador de consórcios
│   │   ├── ContactForm.jsx  # Formulário de contato
│   │   ├── AdminPanel.jsx   # Painel administrativo
│   │   └── Footer.jsx       # Rodapé
│   ├── assets/              # Imagens e recursos
│   ├── lib/                 # Utilitários
│   └── App.jsx              # Componente principal
├── public/                  # Arquivos públicos
└── dist/                    # Build de produção
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- Python 3.11+
- Git

### Frontend (React)
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Backend (Flask)
```bash
# Criar ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate     # Windows

# Instalar dependências
pip install flask flask-cors requests

# Executar servidor
python src/main.py
```

## 📱 Integração WhatsApp

O sistema gera automaticamente links do WhatsApp com mensagens pré-formatadas:

```
https://wa.me/5564981235976?text=mensagem_formatada
```

### Formato da Mensagem
```
Olá! Vim através do site da Atma Seguros e Consórcios.

*DADOS PARA CONTATO:*
👤 *Nome:* [Nome do Cliente]
🎯 *Objetivo:* [Tipo de Consórcio]
📧 *Email:* [Email do Cliente]
📱 *WhatsApp:* [Telefone do Cliente]

Gostaria de receber informações sobre cartas de consórcio contempladas.

Aguardo retorno! 😊
```

## 🔐 Área Administrativa

### Acesso
- **URL:** `/admin`
- **Senha:** `atma2025`

### Funcionalidades
- Cadastro de cartas contempladas
- Edição e exclusão de oportunidades
- Filtros por tipo e disponibilidade
- Busca por código ou descrição
- Estatísticas em tempo real

## 🌐 Deploy

### GitHub Pages (Frontend)
```bash
# Build do projeto
npm run build

# Deploy manual
# Copie os arquivos da pasta dist/ para seu servidor
```

### Heroku (Backend)
```bash
# Criar app no Heroku
heroku create atma-consorcio-api

# Deploy
git push heroku main
```

## 📊 APIs Disponíveis

### Cartas Contempladas
- `GET /api/cartas` - Listar cartas
- `POST /api/cartas` - Criar carta
- `PUT /api/cartas/{id}` - Atualizar carta
- `DELETE /api/cartas/{id}` - Deletar carta
- `GET /api/cartas/buscar` - Buscar cartas compatíveis
- `GET /api/cartas/estatisticas` - Estatísticas

## 📈 Métricas e Analytics

### Conversões Rastreadas
- Cliques no WhatsApp
- Envios de formulário
- Simulações realizadas

### Integração com Google Analytics
```html
<!-- Adicione no index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🔒 Segurança

### Medidas Implementadas
- Validação de entrada em todos os formulários
- Sanitização de dados
- Rate limiting na API
- CORS configurado adequadamente
- Variáveis de ambiente para dados sensíveis

## 🐛 Troubleshooting

### Problemas Comuns

**Formulário não envia:**
- Confirme validação de campos
- Verifique conexão com backend
- Teste integração WhatsApp

**Simulador não funciona:**
- Verifique dados de cartas no admin
- Confirme cálculos matemáticos
- Teste diferentes cenários

## 📞 Contato

**Atma Seguros e Consórcios**
- **WhatsApp:** (64) 98123-5976
- **Email:** atma@atmaseguros.com.br
- **Endereço:** R. Benedito Bueno, Chácara C - Vila São Simão, Indiara - GO

## 📄 Licença

Este projeto é propriedade da Atma Seguros e Consórcios. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para Atma Seguros e Consórcios**

