const { shippingCharge } = require("../utils/modelsData.js");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ShippingChargeSchema = new Schema(shippingCharge);

module.exports = mongoose.model("shippingCharge", ShippingChargeSchema);


