const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  googleId: String,
  phone: String,
  house: String,
  city: String,
  state: String,
  zipCode: String,
  country: String,
  image: String,
  hash: String,
  salt: String,
  isAdmin: { type: Boolean, default: false },
  isStaff: {
    status: { type: Boolean, default: false },
    surname: String,
    permissions: Array,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
  refundRequest: [
    { type: mongoose.Schema.Types.ObjectId, ref: "refundRequest" },
  ],
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
});

module.exports = mongoose.model('User', userSchema);
