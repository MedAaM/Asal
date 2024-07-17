const express = require("express");
const { addStaff } = require("../controllers/staffController");
const requireAuth = require("../middlewares/requireUserAuth");

const router = express.Router();

router.post("/",requireAuth, addStaff);

module.exports = router;
