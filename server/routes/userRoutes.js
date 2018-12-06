const express = require('express')
const { userController } = require('../controllers')
const userRoutes = express()

userRoutes.get('/all', userController.getAllUsers)
userRoutes.post('/new', userController.storeUser)
userRoutes.put('/edit', userController.editUser)
userRoutes.delete('/delete/:id', userController.deleteUser)

module.exports = userRoutes