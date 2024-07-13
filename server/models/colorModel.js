const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
    name: String,
    value: String,
  });

module.exports = mongoose.model('Color', colorSchema);
