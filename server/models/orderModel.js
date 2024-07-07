const { order } = require("../utils/modelsData.js");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const orderSchema = new Schema(order);

module.exports = mongoose.model("Order", orderSchema);

