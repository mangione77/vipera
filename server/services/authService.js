const { User } = require('../models')
const { createJWT } = require('../helpers')
const config = require('../config')()

const authService = () => {

    const login = async (username, password) => {
        try {
            const foundUser = await User.findOne({ username: username })
            if (!foundUser) {
                throw ({ status: 404, message: 'User not found' })
            }
            else {
                if (foundUser.password === password) {
                    const jwtConfig = { user: foundUser, JWT_SECRET: config.JWT_SECRET }
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