const crawler = require('./startCrawl')
const getTwitterInfo = require('./getTwitterInfo')
const getInstagramInfo = require('./getInstagramInfo')

const getFullInfo = async (url) => {
    try {
        let socialLinksResult = await crawler(url)
        let socialLinks = socialLinksResult.socialLinks
        let IGUser = socialLinks.Instagram.replace('https://www.instagram.com/', '').slice(0, -1)
        let TWUser = socialLinks.Twitter.replace('https://twitter.com/', '')
        let twitterInfo = await getTwitterInfo(TWUser)
        let instagramInfo = await getInstagramInfo(IGUser)
        let resultObj = {
            'social_links': socialLinks,
            'instagram_info': instagramInfo,
            'twitter_info': twitterInfo
        }
        return resultObj
    }
    catch (err) {
        throw(err)
    }
}

module.exports = getFullInfo