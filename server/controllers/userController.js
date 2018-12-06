const { userService } = require('../services')

const userController = () => {

    const getAllUsers = async () => {
        try {
            const users = await userService.getAllUsers()
            res.send({ status: 200, body: users, message: 'Users retrieved successfully' })
        }
        catch (err) {
            res.send({ status: err.status, message: err.message })
        }
    }

    return {
        getAllUsers
    }
}

module.exports = userController