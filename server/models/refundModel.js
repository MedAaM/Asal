const { refundRequest } = require("../utils/modelsData.js");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const refundRequestSchema = new Schema(refundRequest);

module.exports = mongoose.model("Refund", refundRequestSchema);

