const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rate: { type: Number, min: 0, max: 5, required: true },
  comment: { type: String, required: false },
  fromUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  forOrder: { type: Schema.Types.ObjectId, ref: 'Order', required: true }, 
  date: { type: Date, default: Date.now },
});

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;
