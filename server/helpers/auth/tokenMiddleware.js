const verifyJWT = require('./verifyJWT')

const tokenMiddleware = () => {
    return async (req, res, next) => {
        try {
            const token = req.headers.auth_token
            const decodedToken = await verifyJWT(token)
            if (!decodedToken) {
                throw ({ status: 403, message: 'Invalid token. Forbidden.' })
            }
            else {
                delete decodedToken.data.password
                req.user = decodedToken.data
                next()
            }
        }
        catch (err) {
            res.send({ status: err.status, message: err.message })
            return
        }
    }
}

module.exports = tokenMiddleware