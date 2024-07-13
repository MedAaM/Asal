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
const notificationRoutes = require('./routes/notificationRoutes');
const session = require('express-session');
const passportSetup = require("./config/passport-setup");
const passport = require('passport');
const authRouter = require("./routes/auth");


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

mongoose.connect(config.DB_URI)
    .then(() => {
        console.log("connected to database");
        app.listen(config.PORT, () => console.log("listening to " + config.PORT));
    })
    .catch((err) => {
        console.log(err);
    });
