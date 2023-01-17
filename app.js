const cors = require("cors")
const express = require("express")
const app = express()
const songs = require("./controllers/songController")


app.use(cors())

app.use(express.json())

app.use("/songs", songs)


app.get("/", (req , res) => {
    res.send("Welcome to Bookmarks App")
})


app.get("*", (req , res) => {
    res.status(404).send("Page not found")
})

module.exports = app