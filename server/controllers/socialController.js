const { getTwitterInfo, getInstagramInfo, getFullInfo } = require('../lib/socialMedia') 

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

socialController.fullInfo = async (req,res) => {
    try {
        let { url } = req.body
        let fullInfo = await getFullInfo(url)
        res.send({ "status": 200, "data": fullInfo })
    }
    catch (err) {
        res.send({ "status": err.status, "error": err.message })
    }
} 

module.exports = socialController