const crawler = require('./startCrawl')
const getTwitterInfo = require('./getTwitterInfo')
const getInstagramInfo = require('./getInstagramInfo')
const prepareUrl = require('./prepareUrl')
const whoIs = require('./getWhoIs')
const getEmails = require('./getEmails')

const getFullInfo = async (url) => {
    try {
        let socialLinksResult = await crawler(url)
        let socialLinks = socialLinksResult.socialLinks
        let IGUser
        let TWUser
        let twitterInfo
        let instagramInfo
        if (socialLinks.Instagram !== undefined) {
            IGUser = socialLinks.Instagram.replace('https://www.instagram.com/', '').slice(0, -1)
            instagramInfo = await getInstagramInfo(IGUser)

        }
        if (socialLinks.Twitter !== undefined) {
            TWUser = socialLinks.Twitter.replace('https://twitter.com/', '')
            twitterInfo = await getTwitterInfo(TWUser)
        }
        let UrlPreparedForWhois = prepareUrl(url)
        let whoIsData = await whoIs(UrlPreparedForWhois)
        let emailData = await getEmails(url)
        let resultObj = {
            'social_links': socialLinks,
            'instagram_info': instagramInfo,
            'twitter_info': twitterInfo,
            'email_info': emailData,
            'who_is': whoIsData
        }
        return resultObj
    }
    catch (err) {
        throw (err)
    }
}

module.exports = getFullInfo