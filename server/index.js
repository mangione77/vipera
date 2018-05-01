require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const crawlerRoutes = require('./routes/crawlerRoutes')

app.use(cors())
app.use(bodyParser.json())
app.use('/api', crawlerRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Listening in ${process.env.PORT}`)
})