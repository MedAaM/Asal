const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const brandSchema = new Schema({
    brandId: String,
    name: String,
    image: Array,
    slug: String,
    topBrand: { type: Boolean, default: false },
});

module.exports = mongoose.model("Brand", brandSchema);
