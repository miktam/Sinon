var sinon = require('sinon')
var mocha = require('mocha')
var should = require('should')
var assert = require('assert')

var Person = {
  sayHi: function(saying) {
    return "hey, " + saying
  }
}

describe('No sinon - just how it works normally', function() {
  it('just printing', function() {
    Person.sayHi('Andrei').should.equal('hey, Andrei')
  })
})

describe('Replace existing method', function() {
  describe('by stub', function() {

    var newHi = function(say) {
        return say + ' from new method'
      }

    it('replaces method by newHi', sinon.test(function() {
      this.stub(Person, 'sayHi', newHi)
      Person.sayHi('Call').should.equal('Call from new method')
    }))
  })
})

describe('Replace return', function() {
  describe('from Person.sayHi', function() {
    it('says hola', sinon.test(function() {
      this.stub(Person, 'sayHi').returns('hola')
      Person.sayHi('Andrei').should.equal('hola')
    }))

    it('says bonjour', sinon.test(function() {
      this.stub(Person, 'sayHi').returns('bonjour')
      Person.sayHi().should.equal('bonjour')
    }))
  })
})

describe('Spy on existing method', function() {
  it('shall check argument', sinon.test(function() {

    sinon.spy(Person, 'sayHi')
    var said = Person.sayHi('again')

    assert(Person.sayHi.called)
    // alternatives
    assert(Person.sayHi.calledOnce)
    Person.sayHi.calledTwice.should.equal(false)
    Person.sayHi.callCount.should.equal(1)

    Person.sayHi('Andrei')

    // check args for first and second call
    Person.sayHi.getCall(0).args[0].should.equal('again')
    Person.sayHi.getCall(1).args[0].should.equal('Andrei')

    // remove spy
    Person.sayHi.restore()

  }))
})