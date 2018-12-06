const express = require('express')
const { userController } = require('../controllers')
const userRoutes = express()
const { tokenMiddleware } = require('../helpers/auth')

userRoutes.get('/all', tokenMiddleware(), userController.getAllUsers)
userRoutes.post('/new', userController.storeUser)
userRoutes.put('/edit', userController.editUser)
userRoutes.delete('/delete/:id', userController.deleteUser)

module.exports = userRoutes