// Lista de palavras para o jogo
const palavras = [
    "casa",
    "carro",
    "computador",
    "gato",
    "banana",
    "abacaxi",
    "caneta",
    "telefone",
    "bicicleta",
    "sapato"
  ];
  
  // Função para selecionar uma palavra aleatória da lista
  function selecionarPalavra() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    return palavras[indiceAleatorio];
  }
  
  // Função para exibir a palavra com as letras adivinhadas
  function exibirPalavraAdivinhada(palavra, letrasAdivinhadas) {
    let palavraAdivinhada = "";
  
    for (let letra of palavra) {
      if (letrasAdivinhadas.includes(letra)) {
        palavraAdivinhada += letra;
      } else {
        palavraAdivinhada += "_";
      }
    }
  
    return palavraAdivinhada;
  }
  
  // Função principal para jogar o jogo de adivinhação de palavras
  function jogarAdivinhacaoPalavras() {
    const palavraSelecionada = selecionarPalavra();
    const letrasAdivinhadas = [];
    let tentativas = 0;
    let acertou = false;
  
    console.log("Bem-vindo ao jogo de adivinhação de palavras!");
    console.log("Tente adivinhar a palavra selecionada.");
  
    while (!acertou) {
      const palavraAdivinhada = exibirPalavraAdivinhada(palavraSelecionada, letrasAdivinhadas);
      console.log(`Palavra: ${palavraAdivinhada}`);
  
      const letra = prompt("Digite uma letra:");
      tentativas++;
  
      if (letrasAdivinhadas.includes(letra)) {
        console.log("Você já adivinhou essa letra. Tente novamente.");
        continue;
      }
  
      letrasAdivinhadas.push(letra);
  
      if (palavraSelecionada.includes(letra)) {
        console.log("Letra correta! Continue adivinhando.");
      } else {
        console.log("Letra incorreta! Tente novamente.");
      }
  
      if (palavraAdivinhada === palavraSelecionada) {
        acertou = true;
      }
    }
  
    console.log(`Parabéns! Você acertou a palavra em ${tentativas} tentativa(s). A palavra era "${palavraSelecionada}".`);
  }
  
  // Chamada para iniciar o jogo de adivinhação de palavras
  jogarAdivinhacaoPalavras();
  