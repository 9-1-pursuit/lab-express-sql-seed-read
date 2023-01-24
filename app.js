const cors = require("cors");
const express = require("express");
const app = express();

//! const songController = require("./controllers/songController");
// Album CONTROLLER
const albumController = require("./controllers/albumController");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// SONGS MIDDLEWARE
//! app.use("/songs", songController);
// ALBUMS MIDDLEWARE
app.use("/albums", albumController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

// 404 Page
app.get("*", (req, res) => {
  res.status(404).send(`404 Not Found`);
});

module.exports = app;
