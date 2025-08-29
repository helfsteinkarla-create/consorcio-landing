#!/bin/bash

# Script de Deploy - Atma Seguros e Consórcios
# Automatiza o processo de build e deploy da landing page

echo "🚀 Iniciando deploy da Landing Page Atma..."

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script na raiz do projeto React"
    exit 1
fi

# Verificar se há mudanças não commitadas
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Há mudanças não commitadas. Deseja continuar? (y/n)"
    read -r response
    if [ "$response" != "y" ]; then
        echo "❌ Deploy cancelado"
        exit 1
    fi
fi

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Executar build
echo "🔨 Executando build..."
npm run build

# Verificar se o build foi bem-sucedido
if [ ! -d "dist" ]; then
    echo "❌ Erro: Build falhou - diretório dist não encontrado"
    exit 1
fi

# Verificar se index.html existe
if [ ! -f "dist/index.html" ]; then
    echo "❌ Erro: Build falhou - index.html não encontrado"
    exit 1
fi

echo "✅ Build concluído com sucesso!"

# Commit e push (se houver mudanças)
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Fazendo commit das mudanças..."
    git add .
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    
    echo "🔄 Enviando para repositório remoto..."
    git push origin main 2>/dev/null || git push origin master 2>/dev/null || echo "⚠️  Não foi possível fazer push automático"
fi

echo "🎉 Deploy concluído!"
echo ""
echo "📋 Próximos passos:"
echo "1. Verifique se o GitHub Actions executou com sucesso"
echo "2. Acesse sua landing page no GitHub Pages"
echo "3. Teste todas as funcionalidades"
echo ""
echo "🔗 Links úteis:"
echo "- Repositório: https://github.com/seu-usuario/seu-repositorio"
echo "- GitHub Pages: https://seu-usuario.github.io/seu-repositorio"
echo "- Actions: https://github.com/seu-usuario/seu-repositorio/actions"

