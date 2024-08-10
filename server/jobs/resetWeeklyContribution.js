const cron = require('node-cron');
const Staff = require('../models/staffModel');


const resetQuantitySold = async () => {
    try {
        const staffMembers = await Staff.find({});
    
        for (const staff of staffMembers) {
            staff.weeklyContribution = 0; 
            await staff.save(); 
        }
    } catch (error) {
        console.error('Error resetting quantity sold:', error); 
    }
};


cron.schedule('0 0 * * 0', async () => await resetQuantitySold());


