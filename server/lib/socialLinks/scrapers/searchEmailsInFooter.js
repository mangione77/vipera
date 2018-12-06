const axios = require('axios')
const cheerio = require('cheerio')

const searchEmailsInFooter = (body) => {
    return new Promise((resolve, reject) => {
        let $ = cheerio.load(body)
        let footer = $('footer')  
        if (footer.length === 0) {
            footer = $('.footer')
            if (footer.length === 0) {
                footer = $('#footer')
            }
        }      
        let linksInFooter = footer.find('a')
        let mails = []
        linksInFooter.each((i,link) => {
            if (link.attribs.href) {
                if (link.attribs.href.includes('mailto:')) {
                    link.attribs.href = link.attribs.href.replace('mailto:', '')
                    mails.push(link.attribs.href)
                }
            }
        })
        resolve(mails)
    })
}

module.exports = searchEmailsInFooter