const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const getOrders = async (req, res) => {
  try {
    const { pageNumber = 1, pageSize = 10, queryText } = req.query;
    let orders = [];
    let total = 0;

    if (queryText && queryText.length > 0) {
      const regex = new RegExp(queryText, "i");
      orders = await orderModel.find({ orderId: regex });
      total = orders.length;
    } else {
      total = await orderModel.countDocuments();
      const skip = (pageNumber - 1) * pageSize;
      orders = await orderModel
        .find()
        .sort({ orderDate: -1 })
        .skip(skip)
        .limit(Number(pageSize));
    }

    res.status(200).json({ success: true, orders, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedOrder = await orderModel.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, message: "Order deleted successfully", order: deletedOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const { products, billingAddress, shippingAddress, paymentMethod, discount = 0, shippingCost = 0 } = req.body;

    // Populate product details and calculate subtotal and tax
    const populatedProducts = await Promise.all(
      products.map(async (product) => {
        const foundProduct = await productModel.findById(product.productId);
        if (!foundProduct) {
          throw new Error(`Product with ID '${product.productId}' not found`);
        }
        const subtotal = foundProduct.price * product.quantity;
        const tax = (subtotal * foundProduct.vat) / 100; // Assuming 'vat' is the tax rate for the product
        return {
          productId: foundProduct._id,
          quantity: product.quantity,
          price: foundProduct.price,
          taxRate: foundProduct.vat,
          subtotal,
          tax,
        };
      })
    );

    const subtotal = populatedProducts.reduce((acc, product) => acc + product.subtotal, 0);
    const totalTax = populatedProducts.reduce((acc, product) => acc + product.tax, 0);
    const total = calculateTotal(subtotal, discount, totalTax, shippingCost);

    const newOrder = new orderModel({
      user: userId,
      products: populatedProducts,
      subtotal,
      discount,
      shippingCost,
      tax: totalTax,
      total,
      billingAddress,
      shippingAddress,
      paymentMethod,
    });

    const savedOrder = await newOrder.save();

    // Decrease product quantities
    await Promise.all(
      products.map(async (product) => {
        await productModel.findByIdAndUpdate(
          product.productId,
          { $inc: { quantity: -product.quantity } }
        );
      })
    );

    res.status(201).json({ message: 'Order created successfully!', order: savedOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

function calculateTotal(subtotal, discount = 0, tax = 0, shippingCost = 0) {
  return subtotal - discount + tax + shippingCost;
}

module.exports = { getOrders, deleteOrder, createOrder };
