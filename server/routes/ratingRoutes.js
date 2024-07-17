const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const requireAuth = require('../middlewares/requireUserAuth');


router.post('/', requireAuth, ratingController.createRating);


router.get('/', requireAuth, ratingController.getRatings);


router.get('/:id', requireAuth, ratingController.getRatingById);


router.put('/:id', requireAuth, ratingController.updateRating);


router.delete('/:id', requireAuth, ratingController.deleteRating);


router.get('/staff/:staffId/', requireAuth, ratingController.getStaffRatings);

module.exports = router;
