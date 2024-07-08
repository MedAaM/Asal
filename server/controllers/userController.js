const express = require('express');
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const Token = require('../models/TokenModel');
const createVerificationToken = require('./tokencontroller');

const signup = async (req, res) => {
  try {
      const { name, email, password } = req.body;

      let user = await User.findOne({ email });
      if (user) {
          return res.status(400).send('User already exists');
      }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      user = new User({ name, email, hash });
      await user.save();

      await createVerificationToken(user);

      res.status(200).send('Signup successful. Please check your email to verify your account.');
  } catch (error) {
      res.status(500).send(`Server error: ${error.message}`);
  }
};

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

module.exports = {
    getUsers,
    deleteUser,
    signup,
    verifyEmail,
};
