const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attributeSchema = new Schema({
    name: String,
    values: Array,
  });

module.exports = mongoose.model('Attribute', attributeSchema);
