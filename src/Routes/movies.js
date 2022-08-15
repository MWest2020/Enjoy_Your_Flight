const express = require("express");
const path = require("path");
const router = express.Router();
const movies = require("../Controllers/movies")

// define the movies route
router.get("/", movies.index);

// define the movies route id page
router.get("/:id", movies.details);

module.exports = router;