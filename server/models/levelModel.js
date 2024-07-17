const mongoose = require('mongoose');
const { Schema } = mongoose;

const levelSchema = new Schema({
  level: { type: Number, required: true, unique: true },
  duration: { type: Number, default: 0 },
  quantityToSell: { type: Number, default: 0 }, 
  totalRatings: { type: Number, default: 0 },
  avgRating: { type: Number, default: 0 }, 
  totalSales: { type: Number, default: 0 }, 
});

const Level = mongoose.model('Level', levelSchema);
module.exports = Level;
