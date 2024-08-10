const Staff = require('../models/staffModel');
const User = require('../models/userModel');
const Level = require('../models/levelModel');
const Honey = require('../models/honeyModel');
const Unit = require('../models/unitModel');

const addStaff = async (req, res) => {
  try {
    const userId = req.user._id;
    const { area, isVIP } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const existingStaff = await Staff.findOne({ userId });
    if (existingStaff) {
      return res.status(400).json({ success: false, message: 'Staff member already exists' });
    }

    const level = await Level.findOne({ level: 0 });
    if (!level) {
      return res.status(404).json({ success: false, message: 'Level not found' });
    }

    const newStaff = new Staff({
      userId,
      area,
      isVIP,
      level: level._id
    });

    await newStaff.save();

    user.isStaff = { status: true };
    await user.save();

    res.status(201).json({ success: true, message: 'Staff member added successfully', staff: newStaff });
  } catch (error) {
    console.error('Error adding staff member:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message || error });
  }
};

const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id)
      .populate({
        path: 'userId',
        select: '-orders -favorite -refundRequest'
      })
      .populate('level')
      .populate('honeyTransactions.honey');

    if (!staff) return res.status(404).json({ error: 'Staff not found' });

    res.status(200).json(staff);
  } catch (err) {
    console.error('Error fetching staff by ID:', err);
    res.status(500).json({ error: err.message });
  }
};

const getallstaff = async (req, res) => {
  try {
    const staff = await Staff.find({})
    .populate({
      path: 'userId',
      select: '-orders -favorite -refundRequest'
    })
    .populate('level')
    .populate('honeyTaken.honey');
    if (!staff) return res.status(404).json({ error: 'Staff not found' });
    res.status(200).json(staff);
  } catch (err) {
    console.error('Error fetching staff by ID:', err);
    res.status(500).json({ error: err.message });
  }
};

const updateStaff = async (req, res) => {
  try {
    const userId = req.user._id;

    const { area, isVIP } = req.body;

    const update = {};
    if (area !== undefined) update.area = area;
    if (isVIP !== undefined) update.isVIP = isVIP;

    const staff = await Staff.findOne({ userId });
    if (!staff) return res.status(404).json({ error: 'Staff not found' });

    if (!staff.activated) return res.status(403).json({ error: 'This account is not activated' });

    Object.assign(staff, update);
    await staff.save();

    res.status(200).json(staff);
  } catch (err) {
    console.error('Error updating staff:', err);
    res.status(500).json({ error: err.message });
  }
};


const deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff) return res.status(404).json({ error: 'Staff not found' });
    res.status(200).json({ message: 'Staff deleted successfully' });
  } catch (err) {
    console.error('Error deleting staff:', err);
    res.status(500).json({ error: err.message });
  }
};

const activateOrDeactivateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { activated } = req.body;

    const staff = await Staff.findById(id);
    if (!staff) return res.status(404).json({ error: 'Staff not found' });

    staff.activated = activated;
    await staff.save();

    res.status(200).json({ success: true, message: `Staff ${activated ? 'activated' : 'deactivated'} successfully`, staff });
  } catch (err) {
    console.error('Error activating/deactivating staff:', err);
    res.status(500).json({ error: err.message });
  }
};

const addHoneyTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { honey: honeyId, unit: unitId, qte, quantitySold } = req.body;

    
    const staff = await Staff.findById(id);
    if (!staff) return res.status(404).json({ error: 'Staff not found' });

    
    const honey = await Honey.findById(honeyId);
    if (!honey) return res.status(404).json({ error: 'Honey not found' });

    const unit = await Unit.findById(unitId);
    if (!unit) return res.status(404).json({ error: 'Unit not found' });

    
    const totalInKg = unit.weightPerUnitKg * unit.units * qte;

    
    const existingTransaction = staff.honeyTaken.find(transaction => transaction.honey.toString() === honeyId);

    if (existingTransaction) {
      
      existingTransaction.unit = unitId;
      existingTransaction.qte = qte;
      existingTransaction.totalInKg = existingTransaction.totalInKg + totalInKg;
      if(quantitySold ) {
        existingTransaction.quantitySold += quantitySold;
      }
    } else {
      
      staff.honeyTaken.push({ honey: honeyId, unit: unitId, qte, totalInKg, quantitySold });
    }

    
    const totalSelling = staff.totalSelling.find(selling => selling.honey.toString() === honeyId);
    

    if (totalSelling && quantitySold) {
      
      totalSelling.quantitySold += quantitySold;
    } else if(!totalSelling && quantitySold) {
      
      staff.totalSelling.push({ honey: honeyId, quantitySold });
    }

    
    await staff.save();

    res.status(200).json({ success: true, message: 'Honey transaction added/updated successfully', staff });
  } catch (err) {
    console.error('Error adding/updating honey transaction:', err);
    res.status(500).json({ error: err.message });
  }
};






const modifyQuantitySold = async (req, res) => {
  try {
    const { transactionId, quantitySold } = req.body;
    const staff = await Staff.findOne({ userId: req.user._id });

    if (!staff) return res.status(404).json({ error: 'Staff not found' });
    if (!staff.activated) return res.status(403).json({ error: 'This account is not activated' });

    const transaction = staff.honeyTaken.id(transactionId);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });

    transaction.quantitySold += quantitySold;

    const totalSelling = staff.totalSelling.find(selling => selling.honey.toString() === transaction.honey.toString());

    if (totalSelling) {
      totalSelling.quantitySold += quantitySold;
    } else {
      staff.totalSelling.push({ honey: transaction.honey, quantitySold });
    }

    await staff.save();

    res.status(200).json({ success: true, message: 'Quantity sold updated successfully', staff });
  } catch (err) {
    console.error('Error updating quantity sold:', err);
    res.status(500).json({ error: err.message });
  }
};




module.exports = {
  addStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  activateOrDeactivateStaff,
  addHoneyTransaction,
  modifyQuantitySold,
  getallstaff
};
