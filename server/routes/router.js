const express = require('express')

const Controller = require('../controllers/controller')

const router = express.Router()

router.post('/test', Controller.raiseHand);

module.exports = router