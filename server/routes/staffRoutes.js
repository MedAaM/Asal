const express = require("express");
const { addStaff, getStaffById, updateStaff, deleteStaff, addHoneyTransaction, modifyQuantitySold, modifyQuantityTaken, getallstaff, activateOrDeactivateStaff } = require("../controllers/staffController");
const requireAuth = require("../middlewares/requireUserAuth");
const requireStaffAuth = require("../middlewares/requireStaffAuth");
const requireAdminAuth = require("../middlewares/requireAdminAuth");

const router = express.Router();

router.post("/",requireAuth, addStaff);
router.get("/", getallstaff);
router.get("/byid/:id",getStaffById);
router.put("/update/",requireStaffAuth,updateStaff);
router.put("/delete/:id",requireStaffAuth,deleteStaff);
router.put("/activate/:id",activateOrDeactivateStaff);
router.post("/transactions/:id",addHoneyTransaction);
router.put("/modifysold/",requireStaffAuth,modifyQuantitySold);
router.put("/modifytaken/:id",modifyQuantityTaken);

module.exports = router;
