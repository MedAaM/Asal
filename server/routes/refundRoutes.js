const express = require('express');
const router = express.Router();
const {
  createRefund,
  getRefund,
  deleteRefund,
  getRefunds
} = require('../controllers/refundRequestController'); 
const requireAuth = require('../middlewares/requireUserAuth');
const requireAdminAuth = require('../middlewares/requireAdminAuth');


router.post('/',requireAuth, createRefund);
router.get('/', getRefunds);


router.get('/:id', getRefund);


router.delete('/:id', deleteRefund);

module.exports = router;
