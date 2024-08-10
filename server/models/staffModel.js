const mongoose = require('mongoose');
const { Schema } = mongoose;

const staffSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
    unique: true,
  },
  weeklyContribution: {
    type: Number,
    default : 0
  },
  area: {
    type: String,
    required: true,
  },
  level: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Level',
    required : true
  },
  activated : {
    type: Boolean,
    default : false
  },
  totalSelling : [{
    honey: {
      type: Schema.Types.ObjectId,
      ref: 'Honey'
    },
    quantitySold: {
      type: Number,
      default: 0
    }
  }],
  honeyTaken: [{
    honey: {
      type: Schema.Types.ObjectId,
      ref: 'Honey'
    },
    unit: {
      type: Schema.Types.ObjectId,
      ref: 'Unit'
    },
    qte : {
      type: Number,
      default : 0,
    },
    totalInKg: {
      type: Number,
      default : 0
    },
    quantitySold: {
      type: Number,
      default: 0
    }
  }]
  
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);
