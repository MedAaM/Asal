const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: "365d" })
}

module.exports = generateToken;
