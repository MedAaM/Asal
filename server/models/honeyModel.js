const mongoose = require('mongoose');

const honeySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  color: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Level',
  },
  attributes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attribute',
  }],
  flavorProfile: {
    type: String,
    trim: true,
  },
  source: {
    type: String,
    required: true,
    trim: true,
  },
  healthBenefits: {
    type: [String],
  },
});

module.exports = mongoose.model('Honey', honeySchema);
