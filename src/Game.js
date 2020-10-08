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

  createCards(questions) {
    questions.forEach(question => {
      let card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      this.cards.push(card);
    })
  }

  createDeck() {
    this.deck = new Deck(this.cards);
  }

  createRound() {
    this.currentRound = new Round(this.deck.cards);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(questions) {
    this.createCards(questions);
    this.createDeck();
    this.createRound();
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
};

module.exports = Game;
