// Classe para representar um contato
class Contato {
    constructor(nome, telefone, email) {
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
    }
  
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Telefone: ${this.telefone}`);
      console.log(`Email: ${this.email}`);
    }
  }
  
  // Classe para representar a agenda de contatos
  class Agenda {
    constructor() {
      this.contatos = [];
    }
  
    adicionarContato(contato) {
      this.contatos.push(contato);
      console.log(`Contato ${contato.nome} adicionado à agenda.`);
    }
  
    buscarContato(nome) {
      const contatoEncontrado = this.contatos.find(contato => contato.nome.toLowerCase() === nome.toLowerCase());
  
      if (contatoEncontrado) {
        console.log("Contato encontrado:");
        contatoEncontrado.exibirInformacoes();
      } else {
        console.log("Contato não encontrado na agenda.");
      }
    }
  
    excluirContato(nome) {
      const index = this.contatos.findIndex(contato => contato.nome.toLowerCase() === nome.toLowerCase());
  
      if (index !== -1) {
        const contatoRemovido = this.contatos.splice(index, 1)[0];
        console.log(`Contato ${contatoRemovido.nome} removido da agenda.`);
      } else {
        console.log("Contato não encontrado na agenda.");
      }
    }
  
    listarContatos() {
      if (this.contatos.length === 0) {
        console.log("A agenda está vazia.");
      } else {
        console.log("Contatos na agenda:");
        this.contatos.forEach(contato => {
          console.log("-------------------");
          contato.exibirInformacoes();
        });
      }
    }
  }
  
  // Função para exibir o menu e interagir com o usuário
  function exibirMenu() {
    console.log("=== Agenda de Contatos ===");
    console.log("1. Adicionar contato");
    console.log("2. Buscar contato");
    console.log("3. Excluir contato");
    console.log("4. Listar contatos");
    console.log("0. Sair");
  }
  
  // Função principal para executar o programa
  function executarPrograma() {
    const agenda = new Agenda();
  
    while (true) {
      exibirMenu();
      const opcao = prompt("Digite o número da opção desejada:");
  
      switch (opcao) {
        case "1":
          const nome = prompt("Digite o nome do contato:");
          const telefone = prompt("Digite o telefone do contato:");
          const email = prompt("Digite o email do contato:");
          const novoContato = new Contato(nome, telefone, email);
          agenda.adicionarContato(novoContato);
          break;
        case "2":
          const nomeBusca = prompt("Digite o nome do contato que deseja buscar:");
          agenda.buscarContato(nomeBusca);
          break;
        case "3":
          const nomeExclusao = prompt("Digite o nome do contato que deseja excluir:");
          agenda.excluirContato(nomeExclusao);
          break;
        case "4":
          agenda.listarContatos();
          break;
          case "0":
            console.log("Saindo do programa...");
            return;
          default:
            console.log("Opção inválida. Digite um número válido.");
        }
      }
    }
    
    // Chamada para iniciar o programa da agenda de contatos
    executarPrograma();
    