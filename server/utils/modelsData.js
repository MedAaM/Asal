const mongoose = require("mongoose");

const user = {
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
  emailVerified: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
  refundRequest: [
    { type: mongoose.Schema.Types.ObjectId, ref: "refundRequest" },
  ],
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
};




const order = {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, 
    quantity: { type: Number, required: true, min: 1 }, 
  }],
  subtotal: { type: Number, required: true }, 
  discount: { type: Number, default: 0 }, 
  shippingCost: { type: Number, default: 0 }, 
  tax: { type: Number, required: true }, 
  total: { type: Number, required: true }, 
  billingAddress: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String }, 
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  shippingAddress: { 
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
  },
  paymentMethod: { type: String, required: true }, 
  paymentStatus: { type: String, required: true, default: "pending" },
  orderStatus: { type: String, required: true, default: "placed" }, 
  shippedDate: { type: Date }, 
  trackingNumber: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }, 
};

  const coupon = {
    code: { type: String, unique: true },
    amount: Number,
    active: Date,
    expired: Date,
  };

  const address = {
    phone: String,
    house: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    addressType: String,
    addressTitle: String,
  };

  const refundRequest = {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    product: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      name: String,
      color: String,
      attribute: String,
      price: Number,
      qty: Number,
      vat: Number,
      tax: Number,
    },
    refundReason: String,
    status: String,
    attachments: [],
    refundAmount: Number,
    orderId: String,
    note: String,
    date: { type: Date, default: Date.now },
  };

  const webpage = {
    homePage: {
      carousel: {
        background: Array,
        carouselData: Array,
      },
      banner: {
        title: String,
        subTitle: String,
        description: String,
        url: String,
        image: Array,
      },
      collection: {
        scopeA: {
          title: String,
          url: String,
          image: Array,
        },
        scopeB: {
          title: String,
          url: String,
          image: Array,
        },
        scopeC: {
          title: String,
          url: String,
          image: Array,
        },
        scopeD: {
          title: String,
          url: String,
          image: Array,
        },
      },
    },
    aboutPage: {
      content: String,
    },
    privacyPage: {
      content: String,
    },
    termsPage: {
      content: String,
    },
    returnPolicyPage: {
      content: String,
    },
    faqPage: {
      content: String,
    },
  };

const product = {
    date: { type: Date, default: Date.now },
    name: String,
    slug: String,
    productId: String,
    unit: String,
    unitValue: String,
    price: Number,
    discount: Number,
    description: String,
    shortDescription: String,
    type: String,
    image: Array,
    gallery: Array,
    categories: Array,
    subcategories: Array,
    childCategories: Array,
    brand: String,
    currency: String,
    trending: { type: Boolean, default: false },
    new: { type: Boolean, default: false },
    bestSelling: { type: Boolean, default: false },
    quantity: Number,
    sku: String,
    colors: Array,
    attributes: Array,
    variants: Array,
    attributeIndex: String,
    seo: {
      title: String,
      description: String,
      image: Array,
    },
    review: [
      {
        date: { type: Date, default: Date.now },
        userName: String,
        email: String,
        rating: Number,
        comment: String,
      },
    ],
    question: [
      {
        date: { type: Date, default: Date.now },
        userName: String,
        email: String,
        question: String,
        answer: String,
      },
    ],
    vat: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
  };

  const shippingCharge = {
    area: [
      {
        name: String,
        price: Number,
      },
    ],
    internationalCost: Number,
  };
  

  module.exports = {user, order, coupon, address, refundRequest, webpage, product, shippingCharge}