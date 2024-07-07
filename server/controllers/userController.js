const userModel = require("../models/userModel");

// Function to handle GET requests
const getUsers = async (req, res) => {
  try {
    const users = await userModel
      .find({ isAdmin: false })
      .select(["-hash", "-salt", "-isAdmin"])
      .sort("-createdAt");

    res.status(200).json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Function to handle DELETE requests
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id; 
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    await userModel.findByIdAndRemove(userId);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getUsers, deleteUser };
