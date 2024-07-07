const express = require("express");
const passport = require("passport");
const generateToken = require("../utils/JWT");
require("dotenv").config();


const googleAuthRouter = express.Router();
const CLIENT_URL = process.env.REACT_APP_CORS_ORIGIN;

googleAuthRouter.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      auth: {user : req.user,token : generateToken(req.user._id)},
    });
  }
});

googleAuthRouter.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

googleAuthRouter.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Logout failed", error: err });
    }
    res.status(200).json({ success: true, message: "Logged out successfully" });
    res.redirect(CLIENT_URL);
  });
});



googleAuthRouter.get("/google", passport.authenticate("google", { 
  scope: ["profile", "email"],
  prompt: "select_account"
}));




googleAuthRouter.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = googleAuthRouter;