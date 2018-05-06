const jsdom = require('jsdom').JSDOM
const axios = require('axios')
const fs = require('fs')

options = {
    runScripts: 'dangerously',
    resources: "usable"
}

const getPinterestInfo = (username) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.pinterest.es/${username}/_followers/`)
            .then(response => {
                console.log(response.data)
                fs.writeFile('output.html', response.data, (err) => {
                    if (err) console.log(err)
                })
            })
            .catch(err => {
                console.log(err)
            })
    })
}

getPinterestInfo('zaraofficial')

module.exports = getPinterestInfo