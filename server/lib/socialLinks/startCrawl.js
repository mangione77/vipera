const axios = require('axios')
const { searchInElement } = require('./scrapers')

startCrawl = async (url) => {
    try {
        let response = await axios.get(url)
        if (response.data.length === 0) {
            throw new Error('No response data to parse from source ' + url)
        }
        let responseObj = {
            'site': url,
            'socialLinks': undefined,
            'contact': undefined
        }
        let headerResult = await searchInElement(response.data, 'header')
        if (headerResult !== null) {
            responseObj.socialLinks = headerResult
        }
        else {
            let footerResult = await searchInElement(response.data, 'footer')
            if (footerResult !== null) {
                responseObj.socialLinks = footerResult
            }
            else {
                throw new Error('No social links were found in ' + url)
            }
        }
        return responseObj
    }
    catch (err) {
        throw(err)
    }
}

module.exports = startCrawl
