const express = require('express');
const router = express.Router();
const { addTransaction, getAllTransactions, getTransactionById } = require('../controllers/transactionController'); // Adjust the path as needed
const requireStaffAuth = require('../middlewares/requireStaffAuth');


router.post('/add', requireStaffAuth, addTransaction);


router.get('/all', getAllTransactions);


router.get('/:id', getTransactionById);

module.exports = router;
