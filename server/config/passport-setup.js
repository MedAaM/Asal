const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");
const passport = require("passport");
require("dotenv").config();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const currentUser = await User.findOne({ googleId: profile.id });
                if (currentUser) {
                    console.log("User is: ", currentUser);
                    done(null, currentUser);

                } else {
                    const newUser = await new User({
                        googleId: profile.id,
                        name: profile._json.given_name+" "+profile._json.family_name,
                        email: profile._json.email,
                        img: profile._json.picture,
                        isVerified: true
                    }).save();
                    done(null, newUser);
                    console.log(profile);
                }
                
            } catch (err) {
                console.error("Error in Google Strategy:", err);
                done(err);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

module.exports = passport;
