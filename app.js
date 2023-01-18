//Dependencies
const express = require('express')
const app = express()
const cors = require('cors')
const songsController = require('./controllers/songController')

//Middleware
app.use(cors())
app.use(express.json())
app.use('/songs', songsController)

//Routes
app.get('/',(req, res) => {
    res.send('Welcome to the Songs App!')
})

app.get('*',(req, res) => {
    res.status(404).send({error: 'Page not found!'})
})

module.exports = app