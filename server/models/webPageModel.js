const { webpage } = require("../utils/modelsData.js");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const webpageSchema = new Schema(webpage);

module.exports = mongoose.model("Webpage", webpageSchema);

