const express = require('express');
const router = express.Router();
const {
  createOrUpdateWebpage,
  getWebpageContent,
  deleteWebpageContent,
} = require('../controllers/webPageController'); // Adjust the path to your controller file
const requireAdminAuth = require('../middlewares/requireAdminAuth');

// Create or Update Webpage Content
router.put('/:section',requireAdminAuth, createOrUpdateWebpage);

// Get Webpage Content by Section
router.get('/:section', getWebpageContent);

// Delete Webpage Section Content
router.delete('/:section',requireAdminAuth, deleteWebpageContent);

module.exports = router;
