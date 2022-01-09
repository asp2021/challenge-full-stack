const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
const cors = require('cors')

const iechoRouter = require('./routes/texts')

const app = express()

app.use(cors())
app.options('*', cors())

app.use(morgan('dev'))
app.use(require('./routes/index'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(204)
  } else {
    next()
  }
})

app.use('/iecho', iechoRouter)

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(400).json({ error: 'no text' })
})

module.exports = app
