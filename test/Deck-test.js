const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(function() {
    card1 = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
    card2 = new Card(2, 'What is the name of my state?', ['Colorado', 'Maine', 'Hawaii'], 'Colorado');
    card3 = new Card(3, 'What color is my car?', ['Green', 'White', 'Gray'], 'Gray');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store an array of cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count the cards in the deck', function() {
    expect(deck.countCards()).to.equal(3);
  })
});
