const jwt = require('jsonwebtoken')
const config = require('../config')()

const verifyJWT = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.JWT_SECRET, (err, decodedToken) => {
            if (err) reject(err)

            resolve(decodedToken)
        })
    })
}

module.exports = verifyJWT