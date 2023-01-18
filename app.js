// Dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const songController = require("./controllers/songController");

// Configure
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/songs", songController);

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Tuner");
});

app.get("/not-found", (req, res) => {
  res.status(404).json({ error: "page does not exist" });
});

app.get("*", (req, res) => {
  res.redirect("/not-found");
});

// Export
module.exports = app;
