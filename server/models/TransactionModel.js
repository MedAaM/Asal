const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionModel = new Schema({
  staffId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  clientName: {
    type: String,
    required: true
  },
  clientFamilyName: {
    type: String,
    required: true
  },
  clientAddress : {
    type: String,
    required: true
  },
  honey: {
    type: Schema.Types.ObjectId,
    ref: 'Honey'
  },
  qte : {
    type: Number,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model('Transaction', TransactionModel);
