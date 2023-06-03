// Classe para representar uma carta
class Card {
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
      this.value = this.calculateValue();
    }
  
    calculateValue() {
      if (this.rank === "A") {
        return 11;
      } else if (["K", "Q", "J"].includes(this.rank)) {
        return 10;
      } else {
        return parseInt(this.rank);
      }
    }
  }
  
  // Classe para representar um baralho de cartas
  class Deck {
    constructor() {
      this.cards = this.generateDeck();
      this.shuffle();
    }
  
    generateDeck() {
      const suits = ["♠", "♣", "♥", "♦"];
      const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      const cards = [];
  
      for (let suit of suits) {
        for (let rank of ranks) {
          const card = new Card(suit, rank);
          cards.push(card);
        }
      }
  
      return cards;
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    drawCard() {
      return this.cards.pop();
    }
  }
  
  // Classe para representar um jogador
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.score = 0;
    }
  
    drawCard(deck) {
      const card = deck.drawCard();
      this.hand.push(card);
      this.updateScore();
    }
  
    updateScore() {
      this.score = this.hand.reduce((total, card) => total + card.value, 0);
    }
  
    displayHand() {
      console.log(`${this.name}'s hand:`);
      this.hand.forEach(card => {
        console.log(`${card.rank}${card.suit}`);
      });
      console.log(`Total score: ${this.score}`);
      console.log();
    }
  }
  
  // Função para jogar uma rodada de Blackjack
  function playBlackjack() {
    const deck = new Deck();
    const player = new Player("Player");
    const computer = new Player("Computer");
  
    player.drawCard(deck);
    player.drawCard(deck);
    computer.drawCard(deck);
  
    player.displayHand();
    computer.displayHand();
  }
  
  // Chamada para iniciar o jogo
  playBlackjack();
  