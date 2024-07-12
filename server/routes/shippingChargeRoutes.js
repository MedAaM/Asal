const express = require("express");
const {
  getShippingCharge,
  createOrUpdateShippingCharge,
  deleteShippingArea,
  updateShippingArea
} = require("../controllers/shippingChargeController");
const requireAdminAuth = require("../middlewares/requireAdminAuth");

const router = express.Router();


router.get("/", getShippingCharge);


router.post("/",requireAdminAuth, createOrUpdateShippingCharge);


router.delete("/",requireAdminAuth, deleteShippingArea);

router.put("/",requireAdminAuth, updateShippingArea);

module.exports = router;
