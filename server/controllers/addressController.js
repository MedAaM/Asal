const AddressModel = require("../models/AddressModel");
const userModel = require("../models/userModel");


const getAddress = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id)
      .populate({
        path: "address",
        select: '-__v -user -orders',
        options: { sort: { _id: -1 } }
      })
      .select('address');
    res.status(200).json({ success: true, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};


const addAddress = async (req, res) => {

  try {
    const data = req.body;
    data.user = req.user._id;
    if (data.addressType === "main address") {
      await AddressModel.updateMany(
        { user: req.user._id },
        { $set: { addressType: "address" } }
      );
    }
    const newAddress = await AddressModel.create(data);
    console.log(newAddress);
    await userModel.updateOne(
      { _id: req.user._id},
      { $push: { address: newAddress._id } }
    );
    res.status(200).json({ success: true, newAddress });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, mssg : err.message });
  }
};

const updateAddress = async (req, res) => {

  try {
    const data = req.body;
    if (data.addressType === "main address") {
      await AddressModel.updateMany(
        { user: req.user._id },
        { $set: { addressType: "address" } }
      );
    }
    const r = await AddressModel.updateOne({ _id: data._id }, data);
    res.status(200).json({ success: r.modifiedCount > 0, newAddress: r });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

const deleteAddress = async (req, res) => {

  try {
    await AddressModel.findByIdAndDelete(req.body.id);
    await userModel.updateOne(
      { _id: req.user._id },
      { $pull: { address: req.body.id } }
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

module.exports = { getAddress, addAddress, updateAddress, deleteAddress };
