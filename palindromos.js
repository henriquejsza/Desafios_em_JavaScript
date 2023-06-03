// Função para verificar se uma palavra é um palíndromo
function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
  }
  
  // Função para buscar palíndromos em um array de palavras
  function findPalindromes(words) {
    const palindromes = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (isPalindrome(word)) {
        palindromes.push(word);
      }
    }
  
    return palindromes;
  }
  
  // Função para ordenar um array de palavras por ordem alfabética
  function sortWordsAlphabetically(words) {
    return words.sort();
  }
  
  // Array de palavras de exemplo
  const words = ["radar", "elephant", "madam", "kayak", "dog", "level"];
  
  // Buscar palíndromos nas palavras
  const palindromes = findPalindromes(words);
  
  // Ordenar palíndromos em ordem alfabética
  const sortedPalindromes = sortWordsAlphabetically(palindromes);
  
  // Exibir palíndromos ordenados
  console.log("Palíndromos encontrados e ordenados:", sortedPalindromes);
  