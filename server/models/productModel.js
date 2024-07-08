const { product } = require("../utils/modelsData.js");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const productSchema = new Schema(product);

productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model("Product", productSchema);

