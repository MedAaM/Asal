const { coupon } = require("../utils/modelsData.js");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const couponSchema = new Schema(coupon);

module.exports = mongoose.model("Coupon", couponSchema);

