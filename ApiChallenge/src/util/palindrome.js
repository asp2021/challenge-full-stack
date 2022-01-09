const reverse = require('./reverse')

module.exports = {
  checkPalindrome: (str) => {
    const len = String(str).length
    const start = str.substring(0, Math.floor(len / 2)).toLowerCase()
    const end = str.substring(len - Math.floor(len / 2)).toLowerCase()
    return (start === reverse.makeReverse(end))
  }
}