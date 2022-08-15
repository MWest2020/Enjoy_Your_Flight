const express = require("express");
const path = require("path");
const router = express.Router();
const general = require("../Controllers/general");

// define the home page route
router.get("/", general.index);
// define the settings route
router.get("/settings", (req, res) => {
  res.send("settings page");
});

// define the shut down route
router.get("/shutDown", (req, res) => {
  res.send("shutDown page");
});

module.exports = router;
