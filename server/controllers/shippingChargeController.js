const shippingModel = require("../models/shippingChargeModel");

const getShippingCharge = async (req, res) => {
  try {
    const shipping = await shippingModel.findOne({});
    res.status(200).json({ success: true, shippingCharge: shipping });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to fetch shipping charges." });
  }
};

const createOrUpdateShippingCharge = async (req, res) => {
  try {
    const { query, body } = req;
    let shippingData = await shippingModel.findOne({});

    if (!shippingData) {
      shippingData = new shippingModel({ area: [] });
    }

    if (query.scope === "area") {
      if (!body.areaName || !body.areaCost) {
        return res.status(400).json({ success: false, message: "Area name and cost are required." });
      }
      const areaData = { name: body.areaName, price: body.areaCost };
      shippingData.area.push(areaData);
      await shippingData.save();
    } else if (query.scope === "international") {
      if (body.amount == null) {
        return res.status(400).json({ success: false, message: "International shipping cost is required." });
      }
      shippingData.internationalCost = body.amount;
      await shippingData.save();
    } else {
      return res.status(400).json({ success: false, message: "Invalid scope provided." });
    }

    res.status(200).json({ success: true, message: "Shipping charge updated successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteShippingArea = async (req, res) => {
  try {
    if (!req.body.id) {
      return res.status(400).json({ success: false, message: "Area ID is required." });
    }
    await shippingModel.updateOne({}, { $pull: { area: { _id: req.body.id } } }, { safe: true });
    res.status(200).json({ success: true, message: "Shipping area deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to delete shipping area." });
  }
};

const updateShippingArea = async (req, res) => {
  try {
    const { id, name, cost } = req.body;
    if (!id || !name || cost == null) {
      return res.status(400).json({ success: false, message: "Area ID, name, and cost are required." });
    }
    await shippingModel.updateOne({ "area._id": id }, { $set: { "area.$.name": name, "area.$.price": cost } });
    res.status(200).json({ success: true, message: "Shipping area updated successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to update shipping area." });
  }
};

module.exports = {
  getShippingCharge,
  createOrUpdateShippingCharge,
  deleteShippingArea,
  updateShippingArea,
};
