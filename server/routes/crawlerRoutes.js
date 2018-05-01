const express = require('express')
const crawlerRoutes = express()
const crawlerController = require('../controllers/crawlerController')

crawlerRoutes.post('/search', crawlerController.startNewCrawl)

module.exports = crawlerRoutes