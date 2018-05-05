const jsdom = require('jsdom').JSDOM
const fs = require('fs')

options = {
    runScripts: 'dangerously',
    resources: "usable"
}

const getInstagramInfo = (username) => {
    return new Promise((resolve, reject) => {
        jsdom.fromURL(`https://instagram.com/${username}`, options)
            .then((dom) => {
                let window = dom.window
                let result = window._sharedData.entry_data.ProfilePage[0].graphql.user
                let latestPics = result.edge_owner_to_timeline_media.edges
                let picInfo = []
                latestPics.forEach(pic => {
                    let resultObj = {
                        'display_url': pic.node.display_url,
                        'comments_disabled': pic.node.comments_disabled,
                        'likes': pic.node.edge_liked_by.count,
                        'comments': pic.node.edge_media_to_comment.count,
                        'is_video': pic.node.is_video,
                        'timestamp': pic.node.taken_at_timestamp,
                        'text': pic.node.edge_media_to_caption.edges[0].node.text
                    }
                    picInfo.push(resultObj)
                })
                let resultObj = {
                    'username': username,
                    'id': result.id,
                    'profileInfo': {
                        'fullName': result.full_name,
                        'is_private': result.is_private,
                        'is_verified': result.is_verified,
                        'profile_pic': result.profile_pic_url_hd,
                        'bio': result.biography,
                        'following': result.edge_follow.count,
                        'followers': result.edge_followed_by.count,
                        'mutual_followers': result.mutual_followers,
                        'external_url': result.external_url,
                        'media_count': result.edge_owner_to_timeline_media.count,
                        'latest_pics': picInfo
                    }
                }
                resolve(resultObj)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = getInstagramInfo