const express = require('express');
const router = express.Router();
const {
  createAttribute,
  getAttributes,
  getAttributeById,
  updateAttribute,
  deleteAttribute,
} = require('../controllers/attributeController');
const requireAdminAuth = require('../middlewares/requireAdminAuth');

// POST /api/attributes
router.post('/',requireAdminAuth, createAttribute);

// GET /api/attributes
router.get('/', getAttributes);

// GET /api/attributes/:id
router.get('/:id', getAttributeById);

// PUT /api/attributes/:id
router.put('/:id',requireAdminAuth, updateAttribute);

// DELETE /api/attributes/:id
router.delete('/:id', deleteAttribute);

module.exports = router;
