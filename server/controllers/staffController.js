const Staff = require('../models/staffModel');
const User = require('../models/userModel');
const Level = require('../models/levelModel');


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

    const level = await Level.findOne({ level : 0 });


    
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

module.exports = {
  addStaff,
  
};
