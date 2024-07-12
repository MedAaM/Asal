const express = require('express');
const router = express.Router();
const {
  createSetting,
  getAllSettings,
  getSettingById,
  updateSettingById,
  deleteSettingById
} = require('../controllers/settingsController');

// Create a new setting
router.post('/', createSetting);

// Get all settings
router.get('/', getAllSettings);

// Get a setting by ID
router.get('/:id', getSettingById);

// Update a setting by ID
router.put('/:id', updateSettingById);

// Delete a setting by ID
router.delete('/:id', deleteSettingById);

module.exports = router;
