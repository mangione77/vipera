const express = require('express')
const authRoutes = express()
const { authController } = require('../controllers')

authRoutes.post('/login', authController.login)

module.exports = authRoutes