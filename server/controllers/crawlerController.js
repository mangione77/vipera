const startCrawl = require('../helpers/startCrawl')
const crawlMultiple = require('../helpers/crawlMultiple')
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

crawlerController.crawlMultiple = async (req,res) => {
    try {
        const { sites } = req.body
        let result = await crawlMultiple(sites)
    }
    catch (err) {
        res.send({ 'error': err.message })
    }
}


module.exports = crawlerController