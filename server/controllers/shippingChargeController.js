const shippingModel = require("../models/shippingChargeModel");

const getShippingCharge = async (req, res) => {
  try {
    const shipping = await shippingModel.findOne({});
    res.status(200).json({ success: true, shippingCharge: shipping });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
};

const createOrUpdateShippingCharge = async (req, res) => {
  try {
    const { query, body } = req;
    let shippingData = await shippingModel.findOne({});
    if (shippingData === null) {
      shippingData = new shippingModel({ area: [] });
    }

    switch (query.scope) {
      case "area":
        const areaData = {
          name: body.areaName,
          price: body.areaCost,
        };
        shippingData.area.push(areaData);
        await shippingData.save();
        break;

      case "international":
        shippingData.internationalCost = body.amount;
        await shippingData.save();
        break;

      default:
        return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, mssg : err.message });
  }
};

const deleteShippingArea = async (req, res) => {
  try {
    await shippingModel.updateOne(
      {},
      { $pull: { area: { _id: req.body.id } } },
      { safe: true },
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
};

const updateShippingArea = async (req, res) => {
  try {
    const bodyData = req.body;
    await shippingModel.updateOne(
      { "area._id": bodyData.id },
      {
        $set: {
          "area.$.name": bodyData.name,
          "area.$.price": bodyData.cost,
        },
      },
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
};

module.exports = {
  getShippingCharge,
  createOrUpdateShippingCharge,
  deleteShippingArea,
  updateShippingArea
};
