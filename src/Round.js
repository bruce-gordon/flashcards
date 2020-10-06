class Round {
  constructor(cards) {
    this.deck = cards,
    this.currentCard = this.deck[0],
    this.turns = 0
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn() {
    this.turns++;
  }
};

module.exports = Round;
