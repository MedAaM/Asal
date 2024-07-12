const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  senderId : {
    required : true,
    type: mongoose.Schema.Types.ObjectId, ref: "User"
  },
  receiverId : {
    required : true,
    type: mongoose.Schema.Types.ObjectId, ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  isRead: {
    type: Boolean,
    default: false
  },
  notificationType: {
    type: String,
    required: true,
    enum: ['hire', 'fire'],
  },
  link: {
    type: String, 
  }
});

module.exports = mongoose.model('Notification', NotificationSchema);
