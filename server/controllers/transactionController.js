const Transaction = require('../models/TransactionModel'); 


const addTransaction = async (req, res) => {
  try {
    const { clientName, clientFamilyName, clientAddress, honey, qte } = req.body;

    
    if (!clientName || !clientFamilyName || !clientAddress || !honey || !qte) {
      return res.status(400).json({ error: 'All fields are required to add a transaction.' });
    }

    
    const newTransaction = new Transaction({
      staffId: req.user._id, 
      clientName,
      clientFamilyName,
      clientAddress,
      honey,
      qte
    });

    
    const savedTransaction = await newTransaction.save();

    res.status(201).json({
      message: 'Transaction created successfully.',
      transaction: savedTransaction
    });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the transaction: ${error.message}` });
  }
};


const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate('honey')
      .populate('staffId', 'name'); 

    if (transactions.length === 0) {
      return res.status(404).json({ message: 'No transactions found.' });
    }

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the transactions: ${error.message}` });
  }
};


const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)
      .populate('honey')
      .populate('staffId', 'name');

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found.' });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the transaction: ${error.message}` });
  }
};

module.exports = {
  addTransaction,
  getAllTransactions,
  getTransactionById
};
