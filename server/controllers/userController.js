const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const Token = require('../models/TokenModel');
const createVerificationToken = require('./tokencontroller');
const generateToken = require('../utils/JWT');


const signup = async (req, res) => {
  try {
      const { name, email, password } = req.body;

      let user = await User.findOne({ email });
      if (user) {
          return res.status(400).send('User already exists');
      }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      user = new User({ name, email, hash, salt });
      await user.save();

      await createVerificationToken(user);

      res.status(200).send('Signup successful. Please check your email to verify your account.');
  } catch (error) {
      res.status(500).send(`Server error: ${error.message}`);
  }
};

const getUserData = async (req, res) => {
    try {
      const scope = req.query.scope;
      const userId = req.user._id;
      const removedItem = [
        "-hash",
        "-salt",
        "-isAdmin",
        "-resetPasswordExpires",
        "-resetPasswordToken",
        "-__v",
        "-createdAt",
        "-updatedAt",
        "-isStaff",
        "-emailVerified",
        "-confirmationCode",
        "-notification",
      ];
  
      let userData = {};
  
      switch (scope) {
        case "orders":
          userData = await User.findById(userId)
            .select([...removedItem, "-wallet", "-favorite", "-address", "-refundRequest"])
            .populate("orders", { _id: 0, __V: 0, new: 0, user: 0 }, null, { sort: { orderDate: -1 } });
          break;
  
        case "favorite":
          userData = await User.findById(userId)
            .select([...removedItem, "-orders", "-address", "-wallet", "-refundRequest", "-bankInfo"])
            .populate("favorite")
            .exec();
          break;
  
        case "refund":
          userData = await User.findById(userId)
            .select([...removedItem, "-orders", "-address", "-wallet", "-favorite", "-bankInfo"])
            .populate("refundRequest", {}, null, { sort: { _id: -1 } })
            .exec();
          break;
  
        default:
          userData = await User.findById(userId)
            .select(removedItem)
            .exec();
          break;
      }
  
      res.status(200).json({ success: true, user: userData });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  };

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.logIn(email, password);
        const token = generateToken(user._id);
        res.status(200).json({user,token});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

const verifyEmail = async (req, res) => {
  try {
      const token = await Token.findOne({ token: req.params.token });

      if (!token) {
          return res.status(400).send('Invalid or expired token');
      }

      const user = await User.findById(token.userId);
      if (!user) {
          return res.status(400).send('User not found');
      }

      user.isVerified = true;
      await user.save();

      await Token.deleteOne({ _id: token._id });

      res.status(200).send('Email verified successfully');
  } catch (error) {
      res.status(500).send(`Server error: ${error.message}`);
  }
};



const getUsers = async (req, res) => {
    try {
        const users = await User.find({ isAdmin: false })
            .select(["-hash", "-salt", "-isAdmin"])
            .sort("-createdAt");

        res.status(200).json({ success: true, users });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        await User.findByIdAndRemove(userId);
        res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
};

const updateUserData = async (req, res) => {
    try {
      const { query, body } = req;
      const userId = req.user._id;
      const userData = await User.findById(userId);
      console.log("data = ",userData);
      if (!userData) {
        return res.status(400).json({ success: false });
      }
  
      switch (query.scope) {
        case "info":
          userData.name = body.name;
          userData.email = body.email;
          userData.phone = body.phone;
          userData.house = body.house;
          userData.city = body.city;
          userData.state = body.state;
          userData.zipCode = body.zipCode;
          userData.country = body.country;
          await userData.save();
          break;
  
        case "password":
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(body.password, salt);
          userData.salt = salt;
          userData.hash = hash;
          await userData.save();
          break;
  
        default:
          return res.status(400).json({ success: false });
      }
  
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      if (err && err.code === 11000) {
        return res.status(400).json({ success: false, duplicate: true });
      }
      res.status(400).json({ success: false });
    }
  };


  const addToWishlist = async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const index = user.favorite.indexOf(productId);

        if (index === -1) {
            user.favorite.push(productId);
        } else {
            user.favorite.splice(index, 1);
        }

        console.log(user);

        await user.save();
        res.status(200).json({ success: user.favorite });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};



module.exports = {
    getUsers,
    deleteUser,
    signup,
    verifyEmail,
    loginUser,
    updateUserData,
    getUserData,
    addToWishlist
};
