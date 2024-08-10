const express = require('express');
const {
  getAllLevels,
  getLevelById,
  createLevel,
  updateLevelById,
  deleteLevelById,
  addGiftToLevel,
  updateGiftInLevel,
  expireGiftInLevel,
  deleteGiftFromLevel
} = require('../controllers/levelController');
const requireAdminAuth = require('../middlewares/requireAdminAuth');

const router = express.Router();


router.get('/', getAllLevels);
router.get('/:id', getLevelById);
router.post('/', createLevel);
router.put('/:id', updateLevelById);
router.delete('/:id', deleteLevelById);


router.post('/:id/gift', requireAdminAuth, addGiftToLevel);          
router.put('/:id/gift', requireAdminAuth, updateGiftInLevel);        
router.patch('/:id/gift/expire', requireAdminAuth, expireGiftInLevel); 
router.delete('/:id/gift', requireAdminAuth, deleteGiftFromLevel);    

module.exports = router;
