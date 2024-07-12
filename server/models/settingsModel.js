const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const settingsSchema = new Schema({
    name: String,
    title: String,
    address: String,
    shortAddress: String,
    email: String,
    description: String,
    phoneHeader: String,
    phoneFooter: String,
    copyright: String,
    logo: Array,
    favicon: Array,
    gatewayImage: Array,
    headerCustomScript: String,
    footerCustomScript: String,
    language: { type: String, default: "en" },
    footerBanner: {
      security: {
        title: String,
        description: String,
      },
      support: {
        title: String,
        description: String,
      },
      delivery: {
        title: String,
        description: String,
      },
    },
    seo: {
      title: String,
      description: String,
      keyword: String,
      image: Array,
    },
    social: {
      facebook: String,
      instagram: String,
      twitter: String,
      youtube: String,
      pinterest: String,
    },
    currency: {
      name: { type: String, default: "USD" },
      symbol: { type: String, default: "$" },
      exchangeRate: { type: Number, default: 1 },
    },
    script: {
      googleSiteVerificationId: String,
      facebookAppId: String,
      googleAnalyticsId: String,
      facebookPixelId: String,
      messengerPageId: String,
    },
    paymentGateway: {
      cod: { type: Boolean, default: true },
      paypal: { type: Boolean, default: false },
      stripe: { type: Boolean, default: false },
      sslCommerz: { type: Boolean, default: false },
      razorpay: { type: Boolean, default: false },
    },
    login: {
      facebook: { type: Boolean, default: false },
      google: { type: Boolean, default: false },
    },
    security: {
      loginForPurchase: { type: Boolean, default: true },
    },
  });

module.exports = mongoose.model('Setting', settingsSchema);
