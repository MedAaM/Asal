const express = require("express");
const { applyCoupon } = require("../controllers/couponController");

const router = express.Router();

// Route to apply coupon
router.post("/apply-coupon", applyCoupon);

module.exports = router;
