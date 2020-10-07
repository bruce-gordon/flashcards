const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  let card;

  beforeEach(function() {
    card = new Card(1, 'What is the name of my cat?', ['Kitty', 'Cat', 'Pepper'], 'Pepper');
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    expect(card.question).to.equal('What is the name of my cat?');
  });

  it('should store an id', function() {
    expect(card.id).to.equal(1);
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['Kitty', 'Cat', 'Pepper']);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('Pepper');
  });
});
