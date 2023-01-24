// DEPENDENCIES
const cors = require("cors")
const express = require("express");
const songController = require("./controllers/songController.js");
const albumsController = require("./controllers/albumsController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors())
app.use(express.json());
app.use("/songs", songController);
app.use("/albums", albumsController);


// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.use((req, res, next) => {
  res.status(404).json({
      message: 'Ohh you are lost, read the API documentation to find your way back home :)'
  })
})

// EXPORT
module.exports = app;