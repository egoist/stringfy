var stringfy = require('./index')
var assert = require("assert")
var should = require('should')

describe('Stringfy', () => {
  describe('camelCase', () => {

    it('should return camelCased string getElementById from -', () => {
      stringfy('get-element-by-id').camelCase().val().should.equal('getElementById')
    })
    it('should return camelCased string getElementById from _', () => {
      stringfy('get_element_by_id').camelCase().val().should.equal('getElementById')
    })
    it('should return camelCased string getElementById from both _ and -', () => {
      stringfy('get_element_by-id').camelCase().val().should.equal('getElementById')
    })

  })

  describe('reverse', () => {
    it('should return reversed string edcba', () => {
      stringfy('abcde').reverse().val().should.equal('edcba')
    })
  })
})
