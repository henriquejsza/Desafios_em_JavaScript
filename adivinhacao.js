// Função para gerar um número aleatório entre um valor mínimo e máximo (inclusive)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Função para validar se um número está dentro de um intervalo
  function numeroDentroDoIntervalo(numero, min, max) {
    return numero >= min && numero <= max;
  }
  
  // Função principal para jogar o jogo de adivinhação de números
  function jogarAdivinhacao() {
    const numeroMinimo = 1;
    const numeroMaximo = 100;
    const numeroCorreto = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
    let tentativas = 0;
    let acertou = false;
  
    console.log("Bem-vindo ao jogo de adivinhação de números!");
    console.log(`Tente adivinhar um número entre ${numeroMinimo} e ${numeroMaximo}.`);
  
    while (!acertou) {
      const palpite = parseInt(prompt("Digite o seu palpite:"));
  
      if (isNaN(palpite) || !numeroDentroDoIntervalo(palpite, numeroMinimo, numeroMaximo)) {
        console.log("Por favor, digite um número válido dentro do intervalo especificado.");
        continue;
      }
  
      tentativas++;
  
      if (palpite === numeroCorreto) {
        acertou = true;
      } else if (palpite < numeroCorreto) {
        console.log("O número correto é maior! Tente novamente.");
      } else {
        console.log("O número correto é menor! Tente novamente.");
      }
    }
  
    console.log(`Parabéns! Você acertou o número em ${tentativas} tentativa(s).`);
  }
  
  // Chamada para iniciar o jogo de adivinhação
  jogarAdivinhacao();
  