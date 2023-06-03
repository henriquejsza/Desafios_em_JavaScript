function calcularMediaAlunos(alunos) {
    if (!alunos || alunos.length === 0) {
      throw new Error("A lista de alunos está vazia ou é inválida.");
    }
  
    let somaNotas = 0;
    let quantidadeAlunos = 0;
  
    for (let i = 0; i < alunos.length; i++) {
      const aluno = alunos[i];
      if (aluno && aluno.nota) {
        somaNotas += aluno.nota;
        quantidadeAlunos++;
      }
    }
  
    if (quantidadeAlunos === 0) {
      throw new Error("Nenhum aluno válido encontrado na lista.");
    }
  
    return somaNotas / quantidadeAlunos;
  }
  
  const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 6 },
    { nome: "Ana", nota: 9 },
    { nome: "Carlos", nota: 7.5 }
  ];
  
  try {
    const media = calcularMediaAlunos(alunos);
    console.log(`A média das notas dos alunos é: ${media.toFixed(2)}`);
  } catch (error) {
    console.log(`Erro ao calcular a média dos alunos: ${error.message}`);
  }
  