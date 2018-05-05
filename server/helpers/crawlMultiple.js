const startCrawl = require('./startCrawl')

const crawlMultiple = (sites) => {
    return new Promise((resolve, reject) => {
        let promises = sites.map(startCrawl)
        Promise.all(promises)
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = crawlMultiple