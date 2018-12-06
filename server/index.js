require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')()
const mongoose = require('mongoose')
const app = express()
const { crawlerRoutes, socialRoutes, userRoutes, authRoutes } = require('./routes')

mongoose.connect(config.DB_URL, { useNewUrlParser: true, useCreateIndex: true })
    .then((connection) => {
        console.log(`[+] MongoDB listening on ${config.DB_URL}`)
    })
    .catch((err) => {
        console.log(`[+] Something went wrong connecting to MongoDB: \n ${err}`)
    })

app.use(cors())
app.use(bodyParser.json())
app.use('/api/crawler', crawlerRoutes)
app.use('/api/social', socialRoutes)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.listen(config.PORT, () => {
    console.log(`[+] Listening in ${config.PORT}`)
})