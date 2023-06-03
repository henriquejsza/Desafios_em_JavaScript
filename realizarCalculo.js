function realizarCalculo(operacao, num1, num2) {
    let resultado;
  
    if (operacao === "+") {
      resultado = num1 + num2;
    } else if (operacao === "-") {
      resultado = num1 - num2;
    } else if (operacao === "*") {
      resultado = num1 * num2;
    } else if (operacao === "/") {
      if (num2 === 0) {
        throw new Error("Divisão por zero não é permitida.");
      }
      resultado = num1 / num2;
    } else {
      throw new Error("Operação inválida.");
    }
  
    return resultado;
  }
  
  function exibirResultado(resultado) {
    console.log("O resultado é:", resultado);
  }
  
  function solicitarDadosCalculadora() {
    const operacao = prompt("Digite a operação desejada (+, -, *, /):");
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
  
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Por favor, digite números válidos.");
      solicitarDadosCalculadora();
    } else {
      try {
        const resultado = realizarCalculo(operacao, num1, num2);
        exibirResultado(resultado);
      } catch (error) {
        console.log("Erro ao realizar cálculo:", error.message);
      }
    }
  }
  
  solicitarDadosCalculadora();
  