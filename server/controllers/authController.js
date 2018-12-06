const { authService } = require('../services')
const config = require('../config')()
const CryptoJS = require('crypto-js')

const authController = () => {

    const login = async (req, res) => {
        try {
            const { username, password } = req.body
            const hashedPass = CryptoJS.HmacSHA256(password, config.SALT).toString()
            const response = await authService.login(username, hashedPass)
            res.send({ status: 200, body: response, message: 'Logged in successfully' })
        }
        catch (err) {
            res.send({ status: err.status, message: err.message })
        }
    }

    return {
        login
    }
}

module.exports = authController()