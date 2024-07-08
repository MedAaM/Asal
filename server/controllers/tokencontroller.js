const crypto = require('crypto');
const Token = require('../models/TokenModel');
const User = require('../models/userModel');
const sendEmail = require('../utils/sendEmail');

const createVerificationToken = async (user) => {
    const token = new Token({
        userId: user._id,
        token: crypto.randomBytes(16).toString('hex'),
    });

    await token.save();

    const verificationUrl = `${process.env.BASE_URL}/api/user/verify/${token.token}`;
    const message = `Please verify your email by clicking the link: \n\n${verificationUrl}`;
    
    await sendEmail(user.email, 'Email Verification', message);
    console.log(`Verification email sent to ${user.email}`);
};

module.exports = createVerificationToken;
