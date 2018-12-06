const { userService } = require('../services')
const CryptoJS = require('crypto-js')
const config = require('../config')()

const userController = () => {

    const getAllUsers = async (req, res) => {
        try {
            const users = await userService.getAllUsers()
            res.send({ status: 200, body: users, message: 'Users retrieved successfully' })
        }
        catch (err) {
            res.send({ status: err.status, message: err.message })
        }
    }

    const storeUser = async (req, res) => {
        try {
            const { username, password, email, role } = req.body
            const hashedPass = CryptoJS.HmacSHA256(password, config.SALT)
            const newUser = await userService.storeUser(username, hashedPass, email, role)
            res.send({ status: 200, body: newUser, message: 'User created successfully' })
        }
        catch (err) {
            res.send({ status: err.status, message: err.message })
        }
    }

    const editUser = (req, res) => {
        res.send('Coming soon...')
    }

    const deleteUser = (req, res) => {
        res.send('Coming soon...')
    }

    return {
        getAllUsers,
        storeUser,
        editUser,
        deleteUser
    }
}

module.exports = userController()