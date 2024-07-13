const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");
const couponModel = require("../models/couponModel");
const dateFormat = require("../utils/dateFormat");
const shippingChargeModel = require("../models/shippingChargeModel");

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
    const { products, billingAddress, shippingAddress, paymentMethod, couponCode } = req.body;

    // Validate the coupon
    let couponDiscount = 0;
    let couponPercentage = 0;
    if (couponCode) {
      const coupon = await couponModel.findOne({ code: couponCode });
      if (coupon) {
        const active = dateFormat(coupon.active);
        const expired = dateFormat(coupon.expired);
        const today = dateFormat(new Date());
        if (active <= today && today <= expired) {
          couponPercentage = coupon.amount; // amount is treated as percentage
        } else {
          return res.status(400).json({ message: "Coupon Code Expired" });
        }
      } else {
        return res.status(400).json({ message: "Invalid Coupon" });
      }
    }

    // Calculate shipping cost
    const shippingCost = await calculateShippingCost(shippingAddress);

    // Populate product details and calculate subtotal, discount, and tax
    const populatedProducts = await Promise.all(
      products.map(async (product) => {
        const foundProduct = await productModel.findById(product.productId);
        if (!foundProduct) {
          throw new Error(`Product with ID '${product.productId}' not found`);
        }
        const originalPrice = foundProduct.price * product.quantity;
        const discount = (foundProduct.discount || 0) * product.quantity;
        const discountedPrice = originalPrice - discount;
        const tax = (discountedPrice * foundProduct.vat) / 100; // Assuming 'vat' is the tax rate for the product
        return {
          productId: foundProduct._id,
          quantity: product.quantity,
          price: foundProduct.price,
          discount,
          taxRate: foundProduct.vat,
          originalPrice,
          discountedPrice,
          tax,
        };
      })
    );

    const subtotal = populatedProducts.reduce((acc, product) => acc + product.discountedPrice, 0);
    const totalDiscount = populatedProducts.reduce((acc, product) => acc + product.discount, 0);
    const totalTax = populatedProducts.reduce((acc, product) => acc + product.tax, 0);
    
    // Apply coupon discount as a percentage
    couponDiscount = (subtotal * couponPercentage) / 100;

    const total = calculateTotal(subtotal, totalTax, shippingCost, couponDiscount);

    const newOrder = new orderModel({
      user: userId,
      products: populatedProducts,
      subtotal,
      discount: totalDiscount + couponDiscount,
      shippingCost,
      tax: totalTax,
      total,
      billingAddress,
      shippingAddress,
      paymentMethod,
    });

    const savedOrder = await newOrder.save();

    await Promise.all(
      products.map(async (product) => {
        await productModel.findByIdAndUpdate(
          product.productId,
          { $inc: { quantity: -product.quantity } }
        );
      })
    );

    await userModel.updateOne(
      { _id: req.user._id },
      { $push: { orders: savedOrder._id } }
    );

    res.status(201).json({ message: 'Order created successfully!', order: savedOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

function calculateTotal(subtotal, tax = 0, shippingCost = 0, couponDiscount = 0) {
  return subtotal + tax + shippingCost - couponDiscount;
}

async function calculateShippingCost(addressId) {
  const shippingCharges = await shippingChargeModel.findOne();

  if (!shippingCharges) {
    throw new Error('Shipping charges configuration not found');
  }

  const areaCharge = shippingCharges.area.find(area => area._id.equals(addressId));
  if (areaCharge) {
    return areaCharge.price;
  }

  return shippingCharges.internationalCost;
}

async function updateOrder(req, res) {
  try {
    const { orderId, status } = req.body;

    const order = await orderModel.findOne({ _id: orderId });

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    switch (status) {
      case 'success':
        if (order.orderStatus === 'Draft') {
          order.paymentStatus = 'Paid';
          order.orderStatus = 'Pending';
          await order.save();
        }
        res.status(200).json({ success: true, order });
        break;

      case 'fail':
        order.paymentStatus = 'Failed';
        order.orderStatus = 'Cancelled';
        await order.save();
        res.status(200).json({ success: true, message: 'Order updated to failed', order });
        break;
      case 'cancel':
        await orderModel.findOneAndRemove({ _id: orderId });
        res.status(200).json({ success: true, message: 'Order removed' });
        break;

      default:
        res.status(400).json({ success: false, message: 'Invalid status' });
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
}

module.exports = { getOrders, deleteOrder, createOrder, updateOrder, updateOrder };
