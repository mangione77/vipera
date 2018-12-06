const express = require('express')
const crawlerRoutes = express()
const { crawlerController } = require('../controllers')

crawlerRoutes.post('/search', crawlerController.startNewCrawl)
crawlerRoutes.post('/search/multiple', crawlerController.crawlMultiple)
crawlerRoutes.post('/whois', crawlerController.whoIs)

module.exports = crawlerRoutes