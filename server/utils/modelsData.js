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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
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
    refundRequest : {type: Boolean, default: false} 
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
  shippingAddress: Object,
  paymentMethod: { type: String, required: true }, 
  paymentStatus: { type: String, required: true, default: "pending" },
  orderStatus: {
    type: String,
    required: true,
    enum: [
      'placed',
      'processing',
      'shipped',
      'delivered',
      'cancelled',
      'returned',
      'refunded',
      'pending',
      'failed',
      'completed'
    ],
    default: 'placed'
  },
  shippedDate: { type: Date }, 
  trackingNumber: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }, 
};

  const coupon = {
    code: { type: String, unique: true },
    amount: { type: Number, required: true, min: 0, max: 100 },
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
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
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
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
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
  name: { type: String, required: true, index: true },
  slug: { type: String, required: true, unique: true },
  productId: { type: String, required: true, unique: true },
  unit: { type: String, enum: ['pcs', 'kg', 'g', 'oz','ltr'], default: 'pcs' },
  unitValue: { type: String, default: '1' },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  description: { type: String, index: true },
  shortDescription: { type: String },
  type: { type: String },
  image: { type: [String] },
  gallery: { type: [String] },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  subcategories: { type: [String] },
  childCategories: { type: [String] },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  currency: { type: String, default: 'USD' },
  trending: { type: Boolean, default: false },
  new: { type: Boolean, default: false },
  bestSelling: { type: Boolean, default: false },
  quantity: { type: Number, default: 0 },
  sku: { type: String },
  colors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Color' }],
  attributes: { type: mongoose.Schema.Types.ObjectId, ref: 'Attribute' },
  variants: { type: [{ name: String, price: Number }] },
  attributeIndex: { type: String },
  seo: {
    title: { type: String },
    description: { type: String },
    image: { type: [String] },
  },
  review: [{
    date: { type: Date, default: Date.now },
    userName: { type: String },
    email: { type: String },
    rating: { type: Number },
    comment: { type: String },
  }],
  question: [{
    date: { type: Date, default: Date.now },
    userName: { type: String },
    email: { type: String },
    question: { type: String },
    answer: { type: String },
  }],
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