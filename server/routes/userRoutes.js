const express = require("express");
const { getUsers, deleteUser, signup, verifyEmail, loginUser, getUserData, updateUserData, addToWishlist } = require("../controllers/userController");
const requireAuth = require("../middlewares/requireUserAuth");

const router = express.Router();

router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.post("/signup", signup);
router.post("/login", loginUser);
router.get("/data",requireAuth, getUserData);
router.put("/",requireAuth, updateUserData);
router.put("/wishlist/:productId",requireAuth, addToWishlist);
router.get('/verify/:token', verifyEmail);

module.exports = router;
