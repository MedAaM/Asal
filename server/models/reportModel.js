const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  reportedUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reporterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  reportType: {
    type: String,
    required: true,
    enum: ['harassment', 'abuse', 'fraud', 'spam', 'other'] 
  },
  description: {
    type: String,
    required: true
  },
  evidence: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'in_review', 'resolved', 'dismissed'], 
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Report', ReportSchema);
