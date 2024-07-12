const Notification = require('../models/notificationModel');

async function createNotification(req, res) {
    const { receiverId, title, body, notificationType, link } = req.body;
    
    try {
        const newNotification = new Notification({
            senderId: req.user._id,
            receiverId,
            title,
            body,
            notificationType,
            link
        });

        await newNotification.save();
        res.status(201).json(newNotification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getNotificationsByUser(req, res) {
    const userId = req.user._id;

    try {
        const notifications = await Notification.find({ receiverId: userId })
                                               .sort({ timestamp: -1 });
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function markNotificationAsRead(req, res) {
    const notificationId = req.params.id;
    const userId = req.user._id;

    try {
        const notification = await Notification.findOneAndUpdate(
            { _id: notificationId, receiverId: userId },
            { isRead: true },
            { new: true }
        );

        if (!notification) {
            return res.status(404).json({ error: 'Notification not found or you do not have permission to update it' });
        }

        res.json(notification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteNotification(req, res) {
    const notificationId = req.params.id;
    const userId = req.user._id;

    try {
        const deletedNotification = await Notification.findOneAndDelete({ _id: notificationId, receiverId: userId });

        if (!deletedNotification) {
            return res.status(404).json({ error: 'Notification not found or you do not have permission to delete it' });
        }

        res.json({ message: 'Notification deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {deleteNotification, markNotificationAsRead, getNotificationsByUser, createNotification}
