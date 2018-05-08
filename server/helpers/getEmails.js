const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const getSiteLanguage = require('./getSiteLanguage')
const generateURIs = require('./generateURIs')
const searchEmailsInFooter = require('./searchEmailsInFooter')

const getEmails = async (url) => {
    try {
        let response = await axios.get(url)
        let emailsInFooter = await searchEmailsInFooter(response.data)
        return getEmails
/*         if (emailsInFooter.length === 0) {
            // TODO: Search for contact page?
        } */
    }
    catch (err) {
        throw err
    }
}

module.exports = getEmails