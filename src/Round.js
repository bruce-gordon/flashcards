const Turn = require('../src/Turn');

class Round {
  constructor(cards) {
    this.deck = cards,
    this.currentCard = this.deck[0],
    this.turns = 0,
    this.guesses = [],
    this.incorrectGuesses = [],
    this.feedback
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.currentCard);
    this.guesses.push(guess);
    this.feedback = currentTurn.giveFeedback();
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
    this.turns++;
    this.currentCard = this.deck[this.turns];
    return this.feedback;
  }
  calculatePercentCorrect() {
    let correctAnswers = this.guesses.length - this.incorrectGuesses.length;
    let percentCorrect = correctAnswers / this.guesses.length;
    return Math.floor(percentCorrect * 100);
  }
  endRound() {
    let endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    console.log(endMessage);
    return endMessage;
  }
};

module.exports = Round;
