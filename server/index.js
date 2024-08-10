const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const couponRoutes = require('./routes/couponRoutes');
const shippingRoutes = require('./routes/shippingChargeRoutes');
const addressRoutes = require('./routes/AddressRoutes');
const refundRoutes = require('./routes/refundRoutes');
const webpageRoutes = require('./routes/webPageRoutes');
const productRoutes = require('./routes/productRoutes');
const brandRoutes = require('./routes/brandRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const colorRoutes = require('./routes/colorRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const attributesRoutes = require('./routes/attributeRoutesl');
const staffRoutes = require('./routes/staffRoutes');
const UnitRoutes = require('./routes/unitRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const levelRoutes = require('./routes/levelRoutes');
const honeyRoutes = require('./routes/honeyTypesRoutes');
const session = require('express-session');
const passportSetup = require("./config/passport-setup");
const passport = require('passport');
const authRouter = require("./routes/auth");
require('./jobs/resetQuantitySold');


const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: process.env.REACT_APP_CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/auth', authRouter);
app.use('/api/user', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/coupon', couponRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/refunds', refundRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/product', productRoutes);
app.use('/api/shipping', shippingRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/attributes', attributesRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/webpage', webpageRoutes);
app.use('/api/colors', colorRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/honey', honeyRoutes);
app.use('/api/units', UnitRoutes);
app.use('/api/levels', levelRoutes);

mongoose.connect(config.DB_URI)
    .then(() => {
        console.log("connected to database");
        app.listen(config.PORT, () => console.log("listening to " + config.PORT));
    })
    .catch((err) => {
        console.log(err);
    });
