const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card;

  beforeEach(function() {
    card = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
  });

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess', function() {
    const turn = new Turn('Pepper', card);
    expect(turn.guess).to.equal('Pepper');
  });

  it('should store an instantiation of Card', function() {
    const turn = new Turn('Pepper', card);
    expect(turn.card).to.equal(card);
    expect(turn.card).to.be.an('object');
  });

  it('should return a guess', function() {
    const turn = new Turn('Pepper', card);
    expect(turn.returnGuess()).to.equal('Pepper');
  });

  it('should return an instantiation of Card', function() {
    const turn = new Turn('Pepper', card);
    expect(turn.returnCard()).to.equal(card);
    expect(turn.returnCard()).to.be.an('object');
  });

  it('should evaluate a correct guess', function() {
    const turn1 = new Turn('Pepper', card);
    expect(turn1.evaluateGuess()).to.equal(true);
  });

  it('should evaluate an incorrect guess', function() {
    const turn1 = new Turn('Kitty', card);
    expect(turn1.evaluateGuess()).to.equal(false);
  });

  it('should give feedback about the guess', function() {
    const turn1 = new Turn('Pepper', card);
    const turn2 = new Turn('Kitty', card);
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
    expect(turn1.giveFeedback()).to.be.a('string');
  });
})
