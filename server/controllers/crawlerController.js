const startCrawl = require('../helpers/startCrawl')
const crawlMultiple = require('../helpers/crawlMultiple')
const whoIs = require('../helpers/getWhoIs')
const crawlerController = {}

crawlerController.startNewCrawl = async (req,res) => {
    try {
        const { site } = req.body
        let result = await startCrawl(site)
        res.send({ 'status': 200, 'result': result})
    }
    catch (err) {
        res.send({ 'status': err.status, 'error': err.message })
    }
}

crawlerController.crawlMultiple = async (req,res) => {
    try {
        const { sites } = req.body
        let result = await crawlMultiple(sites)
        res.send({ 'status': 200, 'result': result})
    }
    catch (err) {
        res.send({ 'status': err.status, 'error': err.message })
    }
}

crawlerController.whoIs = async (req,res) => {
    try {
        const { site } = req.body
        let result = await whoIs(site)
        res.send({ 'status': 200, 'result': result})
    }
    catch (err) {
        res.send({ 'status': err.status, 'error': err.message })
    }
}


module.exports = crawlerController