const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const staffSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
    unique: true,
  },
  area: {
    type: String,
    required: true,
  },
  level: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Level',
  },
  isVIP : {
    type: Boolean,
    default : false
  },
  honeyTransactions: [{
    honey: {
      type: Schema.Types.ObjectId,
      ref: 'Honey'
    },
    quantityTaken: {
      type: Number,
      default: 0
    },
    quantitySold: {
      type: Number,
      default: 0
    }
  }]
});

module.exports = mongoose.model('Staff', staffSchema);
