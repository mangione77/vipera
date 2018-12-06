const jwt = require('jsonwebtoken')

const createJWT = (config) => {
    const token = jwt.sign({
        data: config.user
    }, config.JWT_SECRET, {
            expiresIn: 3600,
            algorithm: 'HS256'
        })
    return token
}

module.exports = createJWT