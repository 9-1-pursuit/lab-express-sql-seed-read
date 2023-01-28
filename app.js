//dependencies
const cors = require("cors");
const express = require("express");

const playlistController = require("./controllers/playlistController");

//config
const app = express();

//middleware
app.use(cors());
app.use(express.json());
//songs route
// app.use("/songs", songController);
app.use("/playlists", playlistController);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

//404 page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//export
module.exports = app;
