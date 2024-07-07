const refundModel = require("../models/refundModel");
const order = require("../models/orderModel");
const user = require("../models/userModel");

const createRefund = async (req, res) => {

  try {
    const data = req.body;
    data.userId = req.user._id;
    const createdRefund = await refundModel.create(data);
    const orderData = await order.findOne({ orderId: data.orderId });
    if (orderData) {
      const index = orderData.products.findIndex(
        (x) => x._id === data.product.id
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
    res.status(200).json({ success: false });
  }
};

module.exports = { createRefund };
