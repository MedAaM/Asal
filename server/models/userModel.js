const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcrypt");
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
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  refundRequest: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Refund" },
  ],
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
});


userSchema.statics.logIn = async function(email, password) {
  if(!email || !password) {
    throw Error("email or password cannot be empty !")
  }
  if(!validator.isEmail(email)){
    throw Error("cannot accept unvalid emails")
  }
  const user = await this.findOne({email});
  if(!user) {
    throw Error("email not found ! ")
  }
  if(user.hash) {
    const match = await bcrypt.compare(password, user.hash);
    if(!match){
      throw Error("incorrect password")
    }
  }else {
    throw Error("this is a google account , try to log in using your google account")
  }
  
  return user;
}

module.exports = mongoose.model('User', userSchema);