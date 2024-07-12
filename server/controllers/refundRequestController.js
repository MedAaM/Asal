const refundModel = require("../models/refundModel");
const order = require("../models/orderModel");
const user = require("../models/userModel");

// Create Refund
const createRefund = async (req, res) => {
  try {
    const data = req.body;
    data.userId = req.user._id;
    const createdRefund = await refundModel.create(data);
    const orderData = await order.findOne({ orderId: data.orderId });
    if (orderData) {
      const index = orderData.products.findIndex(
        (x) => x._id.toString() === data.product.id
      );
      if (index > -1) {
        orderData.products[index].refundRequest = true;
        orderData.markModified("products");
        await orderData.save();
      }
    }
    await user.updateOne(
      { _id: req.user._id },
      { $push: { refundRequest: createdRefund._id } }
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

// Get Refund by ID
const getRefund = async (req, res) => {
  try {
    const refundId = req.params.id;
    const refund = await refundModel.findById(refundId).populate('userId').populate('orderId');
    if (!refund) {
      return res.status(404).json({ error: 'Refund not found' });
    }
    res.status(200).json(refund);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Delete Refund by ID
const deleteRefund = async (req, res) => {
  try {
    const refundId = req.params.id;
    const userId = req.user._id;

    const refund = await refundModel.findOneAndDelete({ _id: refundId, userId: userId });
    if (!refund) {
      return res.status(404).json({ error: 'Refund not found or you do not have permission to delete it' });
    }

    const orderData = await order.findOne({ orderId: refund.orderId });
    if (orderData) {
      const index = orderData.products.findIndex(
        (x) => x._id.toString() === refund.product.id
      );
      if (index > -1) {
        orderData.products[index].refundRequest = false;
        orderData.markModified("products");
        await orderData.save();
      }
    }

    await user.updateOne(
      { _id: userId },
      { $pull: { refundRequest: refund._id } }
    );

    res.status(200).json({ success: true, message: 'Refund deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = { createRefund, getRefund, deleteRefund };
