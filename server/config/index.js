const dev = require('./dev')
const prod = require('./prod')

const config = () => {
    if (process.env.NODE_ENV === 'development') {
        return dev
    }
    else if (process.env.NODE_ENV === 'prod') {
        return prod
    }
    else {
        return dev
    }
}

module.exports = config