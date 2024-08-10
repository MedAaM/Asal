const express = require('express');
const router = express.Router();
const {
    createNotification,
    getNotificationsByUser,
    markNotificationAsRead
} = require('../controllers/notificationController'); 


router.post('/', createNotification);


router.get('/', getNotificationsByUser);


router.put('/:id/read', markNotificationAsRead);



module.exports = router;
