const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
  levelName: {
    type: String,
    required: true,
  },
  levelDescription: {
    type: String,
    required: true,
  },
  badgeIcon: {
    type: String,
    required: true,
  },
  targets: [{
    honey: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Honey',
      required: true
    },
    targetInKg: {
      type: Number,
      default: 0,
      required: true
    }
  }],
  rewardTarget: {
    type: Number,
  },
  levelPeak: {
    type: Number,
    required : true,
  },
  salary: {
    type: Number,
    required: true,
    min: 0,
  },
  duration: {
    type: String,
    enum: ['weekly', 'monthly', 'yearly'],
    required: true,
  },
  gift: {
    title: String,
    description: String,
    image: Array,
    target: String,
    target: Number,
    isFinished: {
      type : Boolean,
      default: false
    },
  }
}, {
  timestamps: true,
});

const Level = mongoose.model('Level', levelSchema);

module.exports = Level;
