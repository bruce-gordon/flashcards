const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = 0,
    this.cards = [],
    this.deck = new Deck(this.cards)
  }

  createCards(data) {
    for (var i = 0; i < data.length; i++) {
      let card = new Card(data[i].id, data[i].question, data[i].answers, data[i].correctAnswer);
      this.cards.push(card);
    }
  }

  start(data) {
    this.createCards(data);
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
