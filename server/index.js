require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const crawlerRoutes = require('./routes/crawlerRoutes')
const socialRoutes = require('./routes/socialRoutes')

app.use(cors())
app.use(bodyParser.json())
app.use('/api/crawler', crawlerRoutes)
app.use('/api/social', socialRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Listening in ${process.env.PORT}`)
})