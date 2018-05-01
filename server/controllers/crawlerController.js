const startCrawl = require('../helpers/startCrawl')
const crawlerController = {}

crawlerController.startNewCrawl = async (req,res) => {
    try {
        const { site } = req.body
        let result = await startCrawl(site)
        res.send(result)
    }
    catch (err) {
        res.send({ 'error': err.message })
    }

}

module.exports = crawlerController