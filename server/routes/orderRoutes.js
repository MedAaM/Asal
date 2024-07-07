const express = require("express");
const { getOrders, deleteOrder, createOrder } = require("../controllers/orderController");
const requireAuth = require("../middlewares/requireUserAuth");

const router = express.Router();

router.get("/", getOrders);


router.delete("/:id", deleteOrder);


router.post("/",requireAuth, createOrder);

module.exports = router;
