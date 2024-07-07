const express = require("express");
const { getAddress, addAddress, updateAddress, deleteAddress } = require("../controllers/addressController");
const requireAuth = require("../middlewares/requireUserAuth");

const router = express.Router();


router.get("/",requireAuth, getAddress);


router.post("/",requireAuth, addAddress);


router.put("/",requireAuth, updateAddress);


router.delete("/:id",requireAuth, deleteAddress);

module.exports = router;
