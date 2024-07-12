const express = require("express");
const router = express.Router();

const {
  addCoupon,
  editCoupon,
  deleteCoupon,
  getAllCoupons
} = require("../controllers/couponController");
const requireAdminAuth = require("../middlewares/requireAdminAuth");



router.post("/add",requireAdminAuth, addCoupon);
router.get("/",requireAdminAuth, getAllCoupons);


router.put("/edit/:code",requireAdminAuth, editCoupon);


router.delete("/delete/:code",requireAdminAuth, deleteCoupon);

module.exports = router;
