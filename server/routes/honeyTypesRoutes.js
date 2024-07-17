const express = require('express');
const router = express.Router();
const honeyController = require('../controllers/honeyTypesController');


router.post('/', honeyController.addHoney);


router.get('/', honeyController.getAllHoney);


router.get('/:id', honeyController.getHoneyById);


router.put('/:id', honeyController.updateHoney);


router.delete('/:id', honeyController.deleteHoney);

module.exports = router;
