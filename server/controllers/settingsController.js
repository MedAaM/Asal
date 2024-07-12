const Setting = require('../models/settingsModel');

// Create a new setting
const createSetting = async (req, res) => {
  try {
    const newSetting = new Setting(req.body);
    const savedSetting = await newSetting.save();
    res.status(201).json(savedSetting);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Get all settings
const getAllSettings = async (req, res) => {
  try {
    const settings = await Setting.find();
    res.status(200).json(settings);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Get a setting by ID
const getSettingById = async (req, res) => {
  try {
    const setting = await Setting.findById(req.params.id);
    if (!setting) {
      return res.status(404).json({ error: 'Setting not found' });
    }
    res.status(200).json(setting);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Update a setting by ID
const updateSettingById = async (req, res) => {
  try {
    const updatedSetting = await Setting.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedSetting) {
      return res.status(404).json({ error: 'Setting not found' });
    }
    res.status(200).json(updatedSetting);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Delete a setting by ID
const deleteSettingById = async (req, res) => {
  try {
    const deletedSetting = await Setting.findByIdAndDelete(req.params.id);
    if (!deletedSetting) {
      return res.status(404).json({ error: 'Setting not found' });
    }
    res.status(200).json({ message: 'Setting deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createSetting,
  getAllSettings,
  getSettingById,
  updateSettingById,
  deleteSettingById
};
