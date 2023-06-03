class Tarefa {
    constructor(descricao, prioridade) {
      this.descricao = descricao;
      this.prioridade = prioridade;
    }
  }
  
  class ListaTarefas {
    constructor() {
      this.tarefas = [];
    }
  
    adicionarTarefa(descricao, prioridade) {
      const novaTarefa = new Tarefa(descricao, prioridade);
      this.tarefas.push(novaTarefa);
    }
  
    removerTarefa(indice) {
      if (indice >= 0 && indice < this.tarefas.length) {
        this.tarefas.splice(indice, 1);
      }
    }
  
    exibirTarefas() {
      console.log("Lista de Tarefas:");
      this.tarefas.forEach((tarefa, indice) => {
        console.log(`${indice + 1}. ${tarefa.descricao} (Prioridade: ${tarefa.prioridade})`);
      });
    }
  }
  
  const lista = new ListaTarefas();
  
  lista.adicionarTarefa("Estudar JavaScript", "Alta");
  lista.adicionarTarefa("Fazer compras", "Média");
  lista.adicionarTarefa("Lavar o carro", "Baixa");
  
  lista.exibirTarefas();
  
  lista.removerTarefa(1);
  
  console.log("\nApós remover uma tarefa:\n");
  
  lista.exibirTarefas();
  