const getTwitterInfo = require('../helpers/getTwitterInfo')
const getInstagramInfo = require('../helpers/getInstagramInfo')
const socialController = {}

socialController.getTwitterInfo = async (req,res) => {
    try {
        let { screen_name } = req.params
        let twitterInfo = await getTwitterInfo(screen_name)
        res.send({ "status": 200, "data": twitterInfo })
    }
    catch (err) {
        res.send({ "status": err.status, "error": err.mesage })
    }
} 

socialController.getInstagramInfo = async (req,res) => {
    try {
        let { username } = req.params
        let instagramInfo = await getInstagramInfo(username)
        res.send({ "status": 200, "data": instagramInfo })
    }
    catch (err) {
        res.send({ "status": err.status, "error": err.message })
    }
}

module.exports = socialController