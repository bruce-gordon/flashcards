const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {
  let game;
  let data;


  beforeEach(function() {
    data = [{
      'id': 1,
      'question': "What is my cat's name?",
      'answers': ['Kitty', 'Cat', 'Pepper'],
      'correctAnswer': 'Pepper'
    }, {
      'id': 2,
      'question': "What is the name of my state?",
      'answers': ['Colorado', 'Maine', 'Hawaii'],
      'correctAnswer': 'Colorado'
    }, {
      'id': 3,
      'question': "What color is my car?",
      'answers': ['Green', 'White', 'Gray'],
      'correctAnswer': 'Gray'
    }]

    game = new Game();

  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should create cards from the data', () => {
    game.createCards(data);
    expect(game.cards[0]).to.deep.equal({id: 1, question: "What is my cat's name?", answers: ['Kitty', 'Cat', 'Pepper'], correctAnswer: "Pepper"});
  });

  it('should store all the cards', () => {
    game.createCards(data);
    expect(game.cards.length).to.equal(3);
  });

  it('should create a deck', () => {
    game.createCards(data);
    game.createDeck();
    expect(game.deck.cards).to.be.an('array');
    expect(game.deck).to.be.an('object');
    expect(game.deck.countCards()).to.equal(3);
  })

  it('should track the current round', () => {
    game.createCards(data);
    game.createDeck();
    game.createRound();
    expect(game.currentRound.deck.length).to.equal(3);
    expect(game.currentRound.guesses).to.deep.equal([]);
  });
});
