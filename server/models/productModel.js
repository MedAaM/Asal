const { product } = require("../utils/modelsData.js");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const productSchema = new Schema(product);

module.exports = mongoose.model("Product", productSchema);

