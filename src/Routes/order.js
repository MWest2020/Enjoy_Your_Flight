const express = require("express");
const router = express.Router();
const order = require("../Controllers/order");

router.get("/", order.getOrders);
router.get("/orderDetails", order.getOrderDetails);
router.post("/finishOrder", order.finishOrder);

module.exports = router;
