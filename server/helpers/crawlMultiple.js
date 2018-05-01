const startCrawl = require('./startCrawl')

const crawlMultiple = async (sites) => {
    try {
        let promises = sites.map(startCrawl)
        Promise.all(promises)
            .then(result => {
                console.log(result)
                return result
            })
            .catch(err => {
                throw(err)
            })
    }
    catch (err) {
        throw(err)
    }
}

module.exports = crawlMultiple