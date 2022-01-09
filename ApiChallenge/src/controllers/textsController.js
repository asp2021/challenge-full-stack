const reverse = require('../util/reverse')
const palindrome = require('../util/palindrome')

module.exports = {
  getReverse: async function (req, res, next) {
    try {
      if (!req.query.text) {
        res.status(400).json({ error: 'no text' })
        return
      }
      const str = req.query.text
      const solution = reverse.makeReverse(str)
      const isPalindrome = palindrome.checkPalindrome(str)
      res.status(200).json({ text: solution, palindrome: isPalindrome })
    } catch (e) {
      next(e)
    }
  }
}
