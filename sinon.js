var sinon = require('sinon')
var mocha = require('mocha')
var should = require('should')
var assert = require('assert')

var Person = {
  sayHi: function(saying) {
    return "hey, " + saying
  }
}

describe('print', function() {
  it('just printing', function() {
   
    Person.sayHi('dude').should.equal('hey, dude')
     console.log(Person.sayHi('dude'))
  })
})

describe('Person', function() {
  describe('#sayHi', function() {
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

describe('spy on existing method', function() {
  it('shall check argument', sinon.test(function() {

    sinon.spy(Person, 'sayHi')
    var said = Person.sayHi('again')
    console.log(said)

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

