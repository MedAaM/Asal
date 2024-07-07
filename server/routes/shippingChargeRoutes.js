const express = require("express");
const {
  getShippingCharge,
  createOrUpdateShippingCharge,
  deleteShippingArea,
  updateShippingArea
} = require("../controllers/shippingChargeController");

const router = express.Router();


router.get("/", getShippingCharge);


router.post("/", createOrUpdateShippingCharge);


router.delete("/", deleteShippingArea);

router.put("/", updateShippingArea);

module.exports = router;
