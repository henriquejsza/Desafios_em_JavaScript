function isPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function encontrarPrimosAte(numero) {
    const primos = [];
  
    for (let i = 2; i <= numero; i++) {
      if (isPrimo(i)) {
        primos.push(i);
      }
    }
  
    return primos;
  }
  
  const limiteSuperior = 100;
  const numerosPrimos = encontrarPrimosAte(limiteSuperior);
  
  console.log(`Números primos até ${limiteSuperior}:`, numerosPrimos);
  