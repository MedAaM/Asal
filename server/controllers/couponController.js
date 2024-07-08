const couponModel = require("../models/couponModel");


const addCoupon = async (req, res) => {
  try {
    const newCoupon = new couponModel(req.body);
    await newCoupon.save();
    res.status(201).json({ success: true, message: "Coupon Added Successfully", coupon: newCoupon });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Failed to Add Coupon" });
  }
};

// Edit coupon
const editCoupon = async (req, res) => {
  try {
    const { code } = req.params;
    const updatedCoupon = await couponModel.findOneAndUpdate({ code }, req.body, { new: true });
    if (updatedCoupon) {
      res.status(200).json({ success: true, message: "Coupon Updated Successfully", coupon: updatedCoupon });
    } else {
      res.status(404).json({ success: false, message: "Coupon Not Found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Failed to Update Coupon" });
  }
};

// Delete coupon
const deleteCoupon = async (req, res) => {
  try {
    const { code } = req.params;
    const deletedCoupon = await couponModel.findOneAndDelete({ code });
    if (deletedCoupon) {
      res.status(200).json({ success: true, message: "Coupon Deleted Successfully" });
    } else {
      res.status(404).json({ success: false, message: "Coupon Not Found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Failed to Delete Coupon" });
  }
};

const getAllCoupons = async (req, res) => {
  try {
    const coupons = await couponModel.find({});
    res.status(200).json({ success: true, coupons });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Failed to retrieve coupons" });
  }
};

module.exports = { deleteCoupon, editCoupon, addCoupon, getAllCoupons };
