'use strict'

class Stringfy {
  constructor (string) {
    this.string = string
  }
  trim () {
    this.string = this.string.trim()
    return this
  }
  camelCase () {
    let string = this.string
    for (let i in this.string) {
      i = parseInt(i)
      if (/^[_-]$/.test(string[i])) {
        string = string.substring(0, i+1) + string[i+1].toUpperCase() + string.substring(i+2)
      }
    }
    this.string = string.replace(/[_-]/g, '')
    return this
  }
  reverse () {
    this.string = this.string.split('').reverse().join('')
    return this
  }
  count () {
    return this.string.match(/[\u00ff-\uffff]|\S+/g).length
  }
  val () {
    return this.string
  }
}

function stringfy (string) {
  return new Stringfy(string)
}

module.exports = stringfy
