// DEPENDENCIES
const cors = require("cors")
const express = require("express")

// CONFIGURATION
const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use("/")

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner")
})

// 404 page
app.get("/", (req, res) => {
  res.status(404).send("Page not Found")
})

// EXPORT
module.exports = app
