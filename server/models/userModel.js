const mongoose = require("mongoose");
const { user } = require("../utils/modelsData");
const Schema = mongoose.Schema;



const userSchema = new Schema(user);
module.exports = mongoose.model("User", userSchema);
