const mongoose = require('mongoose');
const Staff = require('./models/staff'); 
const Level = require('./models/level'); 

const resetQuantities = async () => {
  const staffMembers = await Staff.find().populate('level');

  staffMembers.forEach(async (staff) => {
    const { duration } = await Level.findById(staff.level);
    const now = new Date();
    
    let shouldReset = false;
    
    if (duration === 'weekly') {
      
      shouldReset = now.getDay() === 1;
    } else if (duration === 'monthly') {
      
      shouldReset = now.getDate() === 1;
    } else if (duration === 'yearly') {
      
      shouldReset = now.getMonth() === 0 && now.getDate() === 1;
    }
    
    if (shouldReset) {
      staff.honeyTaken.forEach(async (item) => {
        
        await Staff.updateOne(
          { _id: staff._id, 'totalSelling.honey': item.honey },
          { $inc: { 'totalSelling.$.quantitySold': -item.quantitySold } }
        );

        
        item.quantitySold = 0;
        item.totalInKg = 0;
      });

      await staff.save();
    }
  });
};
