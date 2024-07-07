const express = require("express");
const { createProduct } = require("../controllers/productController");
const upload = require("../config/multerConfig");

const router = express.Router();

router.post("/", upload, createProduct);

module.exports = router;
