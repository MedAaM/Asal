const express = require("express");
const { getOrders, deleteOrder, createOrder, getStaffOrders, getOrderById } = require("../controllers/orderController");
const requireAuth = require("../middlewares/requireUserAuth");
const requireStaffAuth = require("../middlewares/requireStaffAuth");

const router = express.Router();

router.get("/", getOrders);


router.delete("/:id", deleteOrder);
router.get("/:id", getOrderById);


router.post("/",requireAuth, createOrder);
router.get("/staff",requireStaffAuth, getStaffOrders);

module.exports = router;
