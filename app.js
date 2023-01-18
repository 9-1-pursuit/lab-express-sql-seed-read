const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.use("/songs", require("./controllers/songs.js"))

app.get("/", (req, resp) => {
    resp.status(200).send('<h1>Tuner App Server</h1><p>endpoints<li>/songs</li><li>/songs/:id</li></p>')
})

app.get("*", (req, resp) => {
    resp.status(404).send("Page Not Found")
})

module.exports = app