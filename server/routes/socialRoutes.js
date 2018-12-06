const express = require('express')
const socialRoutes = express()
const socialController = require('../controllers/socialController')
const { tokenMiddleware } = require('../helpers/auth')

socialRoutes.get('/twitter/:screen_name', socialController.getTwitterInfo)
socialRoutes.get('/instagram/:username', socialController.getInstagramInfo)
socialRoutes.post('/all', tokenMiddleware(), socialController.fullInfo)

module.exports = socialRoutes