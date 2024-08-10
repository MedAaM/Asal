const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const requireAuth = require('../middlewares/requireUserAuth');


router.post('/', requireAuth, reportController.createReport);


router.get('/', reportController.getAllReports);


router.get('/:id', reportController.getReportById);


router.put('/:id', requireAuth, reportController.updateReport);


router.delete('/:id', reportController.deleteReport);

module.exports = router;
