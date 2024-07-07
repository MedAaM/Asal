const express = require("express");
const { createRefund } = require("../controllers/refundRequestController");

const router = express.Router();

router.post("/", createRefund);

module.exports = router;
