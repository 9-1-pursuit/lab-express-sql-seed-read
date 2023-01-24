const cors = require("cors")
const express = require("express")
const app = express()
const songs = require("./controllers/songController")
const plays = require("./controllers/playlistController")


app.use(express.json())

app.use(cors())


app.use("/songs", songs)

app.use("/playlist", plays)

app.get("/", (req , res) => {
    res.send("Welcome to songs app")
})


app.get("*", (req , res) => {
    res.status(404).send("Page not found")
})



module.exports = app