require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')()
const app = express()
const { crawlerRoutes, socialRoutes } = require('./routes')

app.use(cors())
app.use(bodyParser.json())
app.use('/api/crawler', crawlerRoutes)
app.use('/api/social', socialRoutes)

app.listen(config.PORT, () => {
    console.log(`Listening in ${config.PORT}`)
})