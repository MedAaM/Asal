const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    min: 0,
  },
  level: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Level',
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Gift', giftSchema);
