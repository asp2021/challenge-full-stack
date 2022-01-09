const express = require('express')
const router = express.Router()

const textsController = require('../controllers/textsController')

/* GET texts listing. */
router.get('/', textsController.getReverse)
module.exports = router
