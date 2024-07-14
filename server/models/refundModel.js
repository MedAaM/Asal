const { refundRequest } = require("../utils/modelsData.js");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const refundRequestSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String,
      color: String,
      attribute: String,
      price: Number,
      qty: Number,
      vat: Number,
      tax: Number,
    },
    refundReason: String,
    status: String,
    attachments: [],
    refundAmount: Number,
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    note: String,
    date: { type: Date, default: Date.now },
  });

module.exports = mongoose.model("Refund", refundRequestSchema);

