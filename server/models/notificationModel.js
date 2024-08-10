const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User"
  },
  levelId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Level"
  },
  group: {
    type: String,
    enum: ['vip', 'normal', 'other'], // Extend as needed
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
    default: Date.now,
    index: true
  },
  isRead: {
    type: Boolean,
    default: false
  },
  notificationType: {
    type: String,
    required: true,
    enum: ['hire', 'fire', 'order', 'review','others'], 
  },
  link: {
    type: String,
    default: null
  }
});

NotificationSchema.index({ receiverId: 1 });
NotificationSchema.index({ levelId: 1 });

module.exports = mongoose.model('Notification', NotificationSchema);
