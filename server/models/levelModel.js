const mongoose = require('mongoose');
const { Schema } = mongoose;

const levelSchema = new Schema({
  level: { type: Number, required: true, unique: true },
  totalSales: { type: Number, default: 0 }, 
});

const Level = mongoose.model('Level', levelSchema);
module.exports = Level;
