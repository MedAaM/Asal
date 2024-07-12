const express = require('express');
const router = express.Router();
const {
    createNotification,
    getNotificationsByUser,
    markNotificationAsRead,
    deleteNotification
} = require('../controllers/notificationController'); 


router.post('/', createNotification);


router.get('/', getNotificationsByUser);


router.put('/:id/read', markNotificationAsRead);


router.delete('/:id', deleteNotification);

module.exports = router;
