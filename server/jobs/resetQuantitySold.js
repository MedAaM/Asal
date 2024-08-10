const cron = require('node-cron');
const Staff = require('../models/staffModel');

cron.schedule('0 0 * * 0', async () => await resetQuantitySold('weekly'));
cron.schedule('0 0 1 * *', async () => await resetQuantitySold('monthly'));
cron.schedule('0 0 1 1 *', async () => await resetQuantitySold('yearly'));

async function resetQuantitySold(duration) {
  try {
    console.log(`Starting reset for ${duration}`);
    const staffMembers = await Staff.find({}).populate('level');
    console.log('Staff members:', staffMembers);

    for (const staff of staffMembers) {
      if (staff.level.duration === duration) {
        staff.honeyTaken.forEach(item => {
          item.totalInKg -= item.quantitySold;
          item.quantitySold = 0;
        });
        await staff.save();
      }
    }

    console.log(`${duration} quantity reset successfully`);
  } catch (error) {
    console.error(`Error resetting ${duration} quantity sold:`, error);
  }
}

