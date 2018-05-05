const express = require('express')
const socialRoutes = express()
const socialController = require('../controllers/socialController')

socialRoutes.get('/twitter/:screen_name', socialController.getTwitterInfo)
socialRoutes.get('/instagram/:username', socialController.getInstagramInfo)
socialRoutes.post('/all', socialController.fullInfo)

module.exports = socialRoutes