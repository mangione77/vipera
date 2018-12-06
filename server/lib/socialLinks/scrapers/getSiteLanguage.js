const cheerio = require('cheerio')

const getSiteLanguage = (body) => {
    return new Promise((resolve,reject) => {
        let $ = cheerio.load(body)
        let language = $('html').attr().lang
        resolve(language)
    })
}

module.exports = getSiteLanguage