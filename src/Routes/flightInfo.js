const express = require("express");
const path = require("path");
const router = express.Router();
const flightInfo = require("../Controllers/flightInfo");

router.get("/", flightInfo.index);

module.exports = router;
