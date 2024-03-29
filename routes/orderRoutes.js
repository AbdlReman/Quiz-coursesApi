const express = require("express");
const { getOrders } = require("../controllers/orderController");
const router = express.Router();

router.get("/getorders", getOrders);

module.exports = router;
