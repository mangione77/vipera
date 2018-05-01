const cheerio = require('cheerio')

searchInElement = (body, element) => {
    return new Promise((resolve, reject) => {
        let $ = cheerio.load(body)
        let linksInElement = $(element).find('a')
        if (linksInElement === undefined) {
            resolve(null)
        }
        let cleanResults = []
        linksInElement.each((i, link) => {
            if (link.attribs.href !== undefined) {
                if (link.attribs.href.includes('http://') === true || link.attribs.href.includes('https://') === true) {
                    cleanResults.push(link.attribs.href)
                }
            }
            else {
                return
            }
        })
        if (cleanResults.length === 0) {
            resolve(null)
        }
        let socialLinks = cleanResults.filter(el => {
            return (el.includes('facebook') || el.includes('instagram') || el.includes('pinterest'))
        })
        if (socialLinks.length === 0) {
            resolve(null)
        }
        let resultObj = {
            'Facebook': undefined,
            'Instagram': undefined,
            'Pinterest': undefined
        }
        let categorizer = socialLinks.forEach(element => {
            if (element.includes('facebook')) {
                resultObj.Facebook = element
            }
            else if (element.includes('instagram')) {
                resultObj.Instagram = element
            }
            else if (element.includes('pinterest')) {
                resultObj.Pinterest = element
            }
        })
        resolve(resultObj)
    })

}

module.exports = searchInElement