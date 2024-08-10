const express = require('express');
const {
  getAllLevels,
  getLevelById,
  createLevel,
  updateLevelById,
  deleteLevelById
} = require('../controllers/levelController'); 

const router = express.Router();


router.get('/', getAllLevels);


router.get('/:id', getLevelById);


router.post('/', createLevel);


router.put('/:id', updateLevelById);


router.delete('/:id', deleteLevelById);

module.exports = router;
