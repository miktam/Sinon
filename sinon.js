var sinon = require('sinon');

var mocha = require('mocha');
var should = require('should');
var sinon = require('sinon');
 
var Person = global.Person = {
  sayHi: function() {
    return "hi";
  }
}
 
describe('Person', function() {
  describe('#sayHi', function() {
    it('says hola', sinon.test(function() {
      this.stub(Person, 'sayHi').returns('hola');
      var said = Person.sayHi();
      console.log(said)
      Person.sayHi().should.equal('hola');    
    }))
    
    it('says bonjour', sinon.test(function() {
      this.stub(Person, 'sayHi').returns('bonjour');
      Person.sayHi().should.equal('bonjour');
    }))
  })
})