const express = require("express");
const router = express.Router();
const cart = require("../Controllers/cart");

router.get("/", cart.getCart);
router.post("/deleteProduct", cart.deleteProduct);
router.post("/deleteProducts", cart.deleteProducts);
router.post("/addAmount", cart.editAmount);
router.post("/reduceAmount", cart.editAmount);
router.post("/addOrder", cart.addOrder);


module.exports = router;
