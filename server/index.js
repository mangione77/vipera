const Crawler = require('simplecrawler')

startCrawl = (url) => {
    let crawler = new Crawler(url)
    let URLS = []
    crawler.maxDepth = 10
    let counter = 0
    crawler.on('fetchcomplete', (response) => {
        ++counter
        console.log('> Finished crawling one URL. Nº: ', counter)
        URLS.push(response.url)
    })
    crawler.on('complete', () => {
        console.log('finished')
        console.log(URLS)
    })
    crawler.start()
}

startCrawl('http://calmahouse.com')

