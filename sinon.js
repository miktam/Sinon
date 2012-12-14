var sinon = require('sinon')
var mocha = require('mocha')
var should = require('should')
var assert = require('assert')

var Person = {
  sayHi: function() {
    return "hi"
  }
}

describe('Person', function() {
  describe('#sayHi', function() {
    it('says hola', sinon.test(function() {
      this.stub(Person, 'sayHi').returns('hola')
      var said = Person.sayHi()
      console.log(said)
      Person.sayHi().should.equal('hola')
    }))

    it('says bonjour', sinon.test(function() {
      this.stub(Person, 'sayHi').returns('bonjour')
      Person.sayHi().should.equal('bonjour')
    }))
  })
})

describe('spy', function() {
  it('count invocations sayHi', function() {

    Person.sayHi = sinon.spy()
    Person.sayHi()

    assert(Person.sayHi.called)
    assert(Person.sayHi.calledOnce)
    Person.sayHi.calledTwice.should.equal(false)
    Person.sayHi.callCount.should.equal(1)
    
  })
})