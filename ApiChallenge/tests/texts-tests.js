const chai = require('chai')
const assert = chai.assert

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it

const { checkPalindrome } = require('../src/util/palindrome')
const { makeReverse } = require('../src/util/reverse')
const request = require('supertest')
const app = require('../src/app')

describe('Check GET /iecho?text=value', () => {
  it('respond with 200 Ok', done => {
    request(app)
      .get('/iecho?text=radar')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

describe('Check GET /iecho?text=value', () => {
  it('respond with 400 ERROR', done => {
    request(app)
      .get('/iecho?text=')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  })
})

describe('Check GET /iecho?text=???', () => {
  it('respond with {"error": "no text"} when the input text not found', done => {
    request(app)
      .get('/iecho?text=')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .expect('{"error":"no text"}')
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})

describe('Check GET /iecho?text=radar', () => {
  it('respond with {"text": "radar", "palindrome": true } when  text is correct and is palindrome true', done => {
    request(app)
      .get('/iecho?text=radar')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect('{"text":"radar","palindrome":true}')
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})

describe('Check GET /iecho', () => {
  it('respond with code 400 on bad request', done => {
    const data = {}
    request(app)
      .get('/iecho')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .expect('{"error":"no text"}')
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})

describe('Testing assert function: ', function () {
  describe('Check makeReverse Function', function () {
    it('Check the returned value using: assert.equal(value, value): ', function () {
      const result = makeReverse('radar')
      assert.equal(result, 'radar')
      assert.lengthOf(result, 5)
      assert.isNotNull(result)
    })
  })
})

describe('Testing assert function: ', function () {
  describe('Check checkPalindrome Function', function () {
    it('Check the returned value using: assert.equal(value, value): ', function () {
      const result = checkPalindrome('radar')
      assert.isBoolean(result)
      assert.equal(result, true)
    })
  })
})
