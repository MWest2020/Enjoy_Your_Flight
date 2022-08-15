const express = require("express");
const router = express.Router();
const profile = require("../Controllers/profile");

// define the home page route
router.get("/", profile.index);
router.post("/submitprofile", profile.submitProfile);

module.exports = router;
