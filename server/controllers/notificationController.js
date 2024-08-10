const Notification = require('../models/notificationModel');
const User = require('../models/userModel');

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
        
        const user = await User.findById(userId).populate('levelId'); 
        if (!user || !user.levelId) {
            return res.status(404).json({ error: 'User or level information not found' });
        }

        
        const notifications = await Notification.find({
            $or: [
                { receiverId: userId },
                { levelId: user.levelId._id } 
            ]
        })
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

module.exports = {
    createNotification,
    getNotificationsByUser,
    markNotificationAsRead,
};
