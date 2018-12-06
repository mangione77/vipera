const { User } = require('../models')

const userService = () => {

    const getAllUsers = async () =>  {
        try {
            const users = await User.find().lean()
            if (users.length > 0) {
                users.map(user => {
                    delete user.password
                })
                return users
            }
            else {
                throw ({ status: 404, message: 'No users found' })
            }
        }
        catch (err) {
            throw (err)
        }
    }

    return {
        getAllUsers
    }
}

module.exports = userService()