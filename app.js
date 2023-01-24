// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const songController = require("./controllers/songController.js");
// comments ROUTES
const commentsController = require("./controllers/commentsController");

// playlist ROUTES
// const playlistController = require("./controllers/playlistController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/songs", songController);
app.use("/comments", commentsController);
// app.use("/playlist", playlistController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
