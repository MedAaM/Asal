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


router.post('/', createAttribute);


router.get('/', getAttributes);


router.get('/:id', getAttributeById);


router.put('/:id', updateAttribute);


router.delete('/:id', deleteAttribute);

module.exports = router;
