// Utilitários para formatação de valores monetários

/**
 * Formatar valor para padrão brasileiro (100.000,00)
 * @param {string} value - Valor a ser formatado
 * @returns {string} - Valor formatado
 */
export const formatCurrencyInput = (value) => {
  // Remove tudo que não é número
  const numericValue = value.replace(/\D/g, '');
  
  // Se não há valor, retorna vazio
  if (!numericValue) return '';
  
  // Converte para número e divide por 100 para ter centavos
  const numberValue = parseInt(numericValue) / 100;
  
  // Formata no padrão brasileiro
  return numberValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

/**
 * Converter valor formatado para número
 * @param {string} formattedValue - Valor formatado (100.000,00)
 * @returns {number} - Valor numérico
 */
export const parseCurrencyInput = (formattedValue) => {
  if (!formattedValue) return 0;
  
  // Remove pontos e substitui vírgula por ponto
  const numericString = formattedValue
    .replace(/\./g, '')
    .replace(',', '.');
  
  return parseFloat(numericString) || 0;
};

/**
 * Formatar valor para exibição (R$ 100.000,00)
 * @param {number} value - Valor numérico
 * @returns {string} - Valor formatado com símbolo da moeda
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

/**
 * Máscara para input de valor monetário
 * @param {Event} event - Evento do input
 * @returns {string} - Valor formatado
 */
export const handleCurrencyInput = (event) => {
  const { value } = event.target;
  const formattedValue = formatCurrencyInput(value);
  
  // Atualiza o valor do input
  event.target.value = formattedValue;
  
  return formattedValue;
};

/**
 * Validar se o valor está dentro dos limites
 * @param {string} formattedValue - Valor formatado
 * @param {number} min - Valor mínimo
 * @param {number} max - Valor máximo
 * @returns {boolean} - Se é válido
 */
export const validateCurrencyRange = (formattedValue, min = 0, max = 10000000) => {
  const numericValue = parseCurrencyInput(formattedValue);
  return numericValue >= min && numericValue <= max;
};

/**
 * Obter placeholder formatado
 * @param {number} value - Valor exemplo
 * @returns {string} - Placeholder formatado
 */
export const getCurrencyPlaceholder = (value) => {
  return formatCurrencyInput(value.toString() + '00');
};

