require('dotenv').config()
const Twit = require('twit')

const twitter = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

const getTwitterInfo = (username) => {
    return new Promise((resolve,reject) => {
        twitter.get('users/show', { screen_name: username }, (err,data,response) => {
            if (err) console.log(err)

            let resultObj = {
                'username': username,
                'url': `http://twitter.com/${username}`,
                'profileInfo': {
                    'followers': data.followers_count,
                    'following': data.friends_count,
                    'created_at': data.created_at,
                    'timezone': data.time_zone,
                    'verified': data.verified,
                    'numberOfTweets': data.statuses_count,
                    'language': data.lang,
                    'latestTweet': data.status,
                    'isDefault': data.default_profile
                }
            }
            console.log(resultObj)
        })
    })
}

getTwitterInfo('pccomponentes')

module.exports = getTwitterInfo
   