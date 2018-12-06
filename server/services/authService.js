const { User } = require('../models')
const { createJWT } = require('../helpers/auth')
const config = require('../config')()

const authService = () => {

    const login = async (username, password) => {
        try {
            const foundUser = await User.findOne({ username: username }).lean()
            if (!foundUser) {
                throw ({ status: 404, message: 'User not found' })
            }
            else {
                if (foundUser.password === password) {
                    delete foundUser.password
                    const jwtConfig = { user: foundUser, JWT_SECRET: config.SALT }
                    const token = createJWT(jwtConfig)
                    return token
                }
                else {
                    throw ({ status: 403, message: 'Wrong password. Forbidden.' })
                }
            }
        }
        catch (err) {
            throw (err)
        }
    }

    return {
        login
    }
}

module.exports = authService()