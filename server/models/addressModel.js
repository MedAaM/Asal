const mongoose = require("mongoose");
const { address } = require("../utils/modelsData");
const Schema = mongoose.Schema;



const AddressSchema = new Schema(address);
module.exports = mongoose.model("Address", AddressSchema);
