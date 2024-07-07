const couponModel = require("../models/couponModel");
const dateFormat = require("../utils/dateFormat");


const applyCoupon = async (req, res) => {

  try {
    const coupon = await couponModel.findOne({ code: req.body.code });
    if (coupon) {
      const active = dateFormat(coupon.active);
      const expired = dateFormat(coupon.expired);
      const today = dateFormat(new Date());
      if (active <= today && today <= expired) {
        res.status(200).json({
          success: true,
          message: `Coupon Applied ${coupon.code}`,
          discount: coupon.amount,
          code: coupon.code,
        });
      } else {
        res.status(200).json({ success: false, message: "Coupon Code Expired" });
      }
    } else {
      res.status(200).json({ success: false, message: "Invalid Coupon" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

module.exports = { applyCoupon };
