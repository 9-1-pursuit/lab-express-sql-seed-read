const cors = require("cors");
const express = require("express");
// const songController = require("./controllers/songController.js");
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
const songController = require("./controllers/songController");
// SONGS MIDDLEWARE
app.use("/songs", songController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

// 404 Page
app.get("*", (req, res) => {
  res.status(404).send(`404 Not Found`);
});

module.exports = app;
