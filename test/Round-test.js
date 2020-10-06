const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
    const card2 = new Card(2, 'What is the name of my state?', ['Colorado', 'Maine', 'Hawaii'], 'Colorado');
    const card3 = new Card(3, 'What color is my car?', ['Green', 'White', 'Gray'], 'Gray');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck of cards', function() {
    const card1 = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
    const card2 = new Card(2, 'What is the name of my state?', ['Colorado', 'Maine', 'Hawaii'], 'Colorado');
    const card3 = new Card(3, 'What color is my car?', ['Green', 'White', 'Gray'], 'Gray');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards);
    expect(round.deck).to.deep.equal(deck.cards);
  })

  it('should store the current card', function() {
    const card1 = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
    const card2 = new Card(2, 'What is the name of my state?', ['Colorado', 'Maine', 'Hawaii'], 'Colorado');
    const card3 = new Card(3, 'What color is my car?', ['Green', 'White', 'Gray'], 'Gray');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards);
    expect(round.currentCard).to.equal(card1);
  })

  it('should know the current card', function() {
    const card1 = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
    const card2 = new Card(2, 'What is the name of my state?', ['Colorado', 'Maine', 'Hawaii'], 'Colorado');
    const card3 = new Card(3, 'What color is my car?', ['Green', 'White', 'Gray'], 'Gray');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards);

    expect(round.returnCurrentCard()).to.equal(card1);
  })

  it('should keep track of turns', function() {
    const card1 = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
    const card2 = new Card(2, 'What is the name of my state?', ['Colorado', 'Maine', 'Hawaii'], 'Colorado');
    const card3 = new Card(3, 'What color is my car?', ['Green', 'White', 'Gray'], 'Gray');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards);

    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.turns).to.equal(1);

  })
});
