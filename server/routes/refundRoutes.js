const express = require('express');
const router = express.Router();
const {
  createRefund,
  getRefund,
  deleteRefund
} = require('../controllers/refundRequestController'); 
const requireAuth = require('../middlewares/requireUserAuth');


router.post('/',requireAuth, createRefund);


router.get('/:id', getRefund);


router.delete('/:id', deleteRefund);

module.exports = router;
