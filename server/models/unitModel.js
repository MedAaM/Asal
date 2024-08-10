const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  packageType: {
    type: String,
    required: true,
  },
  units: {
    type: Number,
    required: true
  },
  weightPerUnitKg: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('Unit', unitSchema);
