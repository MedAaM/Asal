const { productOrder } = require("../utils/modelsData.js");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const productOrderSchema = new Schema(productOrder);

module.exports = mongoose.model("ProductOrder", productOrderSchema);

