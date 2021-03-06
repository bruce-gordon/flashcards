const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
    card2 = new Card(2, 'What is the name of my state?', ['Colorado', 'Maine', 'Hawaii'], 'Colorado');
    card3 = new Card(3, 'What color is my car?', ['Green', 'White', 'Gray'], 'Gray');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck.cards);
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck of cards', function() {
    expect(round.deck).to.deep.equal(deck.cards);
  });

  it('should store the current card', function() {
    expect(round.currentCard).to.equal(card1);
  });

  it('should know the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should keep track of turns', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it('should update the current card after each turn', function() {
    expect(round.currentCard).to.equal(card1);
    round.takeTurn();
    expect(round.currentCard).to.equal(card2);
  });

  it('should give feedback on a correct guess', function() {
    expect(round.takeTurn('Pepper')).to.equal('correct!');
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.guesses.length).to.equal(1);
  });

  it('should give feedback on an incorrect guess', function() {
    expect(round.takeTurn('Kitty')).to.equal('incorrect!')
    expect(round.incorrectGuesses).to.deep.equal([1]);
    expect(round.guesses.length).to.equal(1);
  });

  it('should store all guesses', function() {
    round.takeTurn('Kitty');
    expect(round.guesses).to.deep.equal(['Kitty']);
    round.takeTurn('Colorado');
    expect(round.guesses).to.deep.equal(['Kitty', 'Colorado']);
  })

  it('should store questions that have incorrect guesses', function() {
    expect(round.missedQuestions).to.deep.equal([]);
    round.takeTurn('Kitty');
    expect(round.missedQuestions).to.deep.equal(['What is the name of my cat?']);
    round.takeTurn('Colorado');
    expect(round.missedQuestions).to.deep.equal(['What is the name of my cat?']);
  });

  it('should store ids of incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('Kitty');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('Colorado');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should calculate the percentage of correct answers', function() {
    round.takeTurn('Kitty');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('Colorado');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('White');
    expect(round.incorrectGuesses).to.deep.equal([1, 3]);
    expect(round.calculatePercentCorrect()).to.equal(33);
  });
});
