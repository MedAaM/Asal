const express = require("express");
const { getUsers, deleteUser, signup, verifyEmail } = require("../controllers/userController");
const Token = require("../models/TokenModel");
const User = require("../models/userModel");

const router = express.Router();

router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.post("/signup", signup);
router.get('/verify/:token', verifyEmail);

module.exports = router;
