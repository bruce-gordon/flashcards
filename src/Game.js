const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.cards = [],
    this.deck,
    this.currentRound
  }

  createCards(data) {
    for (var i = 0; i < data.length; i++) {
      let card = new Card(data[i].id, data[i].question, data[i].answers, data[i].correctAnswer);
      this.cards.push(card);
    }
  }

  createDeck() {
    this.deck = new Deck(this.cards);
  }

  createRound() {
    this.currentRound = new Round(this.deck.cards);
  }

  start(data) {
    this.createCards(data);
    this.createDeck();
    this.createRound();
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
};

module.exports = Game;
