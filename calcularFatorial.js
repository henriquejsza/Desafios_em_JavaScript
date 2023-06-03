function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
  function exibirResultado(numero, fatorial) {
    console.log(`O fatorial de ${numero} é ${fatorial}`);
  }
  
  function solicitarNumero() {
    const numero = parseInt(prompt("Digite um número inteiro:"));
  
    if (isNaN(numero) || numero < 0) {
      console.log("Por favor, digite um número inteiro positivo.");
      solicitarNumero();
    } else {
      const fatorial = calcularFatorial(numero);
      exibirResultado(numero, fatorial);
    }
  }
  
  solicitarNumero();
  