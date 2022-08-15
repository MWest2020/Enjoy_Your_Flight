const express = require("express");
const router = express.Router();
const shop = require("../Controllers/shop");

// define the home page route
router.get("/", shop.getCategories);
router.post("/addProduct", shop.addProduct);

// define the shop route
router.get("/products/:category", shop.getCategoryProducts);

module.exports = router;
