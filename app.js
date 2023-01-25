const cors = require("cors")
const express = require("express")
const app = express()
const playlist = require("./controllers/playlistController")


app.use(cors())

app.use(express.json())

app.use("/playlist", playlist)

app.get("/", (req , res) => {
    res.send("Welcome to Playlist App")
})

app.get("*", (req , res) => {
    res.status(404).send("Page not found")
})




module.exports = app