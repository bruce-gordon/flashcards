const Turn = require('../src/Turn');

class Round {
  constructor(cards) {
    this.deck = cards,
    this.currentCard = this.deck[0],
    this.turns = 0,
    this.guesses = [],
    this.incorrectGuesses = [],
    this.missedQuestions = [],
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
      this.missedQuestions.push(this.currentCard.question);
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
  generateReportCard() {
    console.log(`REPORT CARD - You missed the following questions:`)
    this.missedQuestions.forEach(question => {
      console.log(`- ${question}`);
    })
    console.log(`**Study these questions and try again!**`)
  }

  endRound() {
    let endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    console.log(endMessage);
    this.generateReportCard();
  }
};

module.exports = Round;
