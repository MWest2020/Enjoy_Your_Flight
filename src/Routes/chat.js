const express = require("express");
const router = express.Router();
const chat = require("../Controllers/chat");

// define the home page route -> chat
router.get("/", chat.index);

module.exports = router;
