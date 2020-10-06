const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it ('should store an array of cards', function() {
    const card1 = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
    const card2 = new Card(2, 'What is the name of my state?', ['Colorado', 'Maine', 'Hawaii'], 'Colorado');
    const card3 = new Card(3, 'What color is my car?', ['Green', 'White', 'Gray'], 'Gray');

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count the cards in the deck', function() {
    const card1 = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
    const card2 = new Card(2, 'What is the name of my state?', ['Colorado', 'Maine', 'Hawaii'], 'Colorado');
    const card3 = new Card(3, 'What color is my car?', ['Green', 'White', 'Gray'], 'Gray');

    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3);
  })
});
