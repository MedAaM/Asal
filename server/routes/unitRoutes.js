const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitsController'); 


router.get('/', unitController.getAllUnits);


router.get('/:id', unitController.getUnitById);


router.post('/', unitController.createUnit);


router.put('/:id', unitController.updateUnitById);


router.delete('/:id', unitController.deleteUnitById);

module.exports = router;
