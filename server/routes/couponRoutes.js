const express = require("express");
const router = express.Router();

const {
  addCoupon,
  editCoupon,
  deleteCoupon,
  getAllCoupons
} = require("../controllers/couponController");



router.post("/add", addCoupon);
router.get("/", getAllCoupons);


router.put("/edit/:code", editCoupon);


router.delete("/delete/:code", deleteCoupon);

module.exports = router;
