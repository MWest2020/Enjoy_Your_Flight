const express = require("express");
const path = require("path");
const router = express.Router();
const music = require("../Controllers/music")

// define the movies route
router.get("/", music.index);

// define the movies route id page
router.get("/:id", music.details);

module.exports = router;