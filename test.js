var stringfy = require('./index')
var assert = require("assert")
var should = require('should')

describe('Stringfy', () => {
  describe('camelCase', () => {

    it('should return camelCased string getElementById', () => {
      stringfy('get-element-by-id').camelCase().val().should.equal('getElementById')
    })

    it('should return reversed string edcba', () => {
      stringfy('abcde').reverse().val().should.equal('edcba')
    })

  })
})
