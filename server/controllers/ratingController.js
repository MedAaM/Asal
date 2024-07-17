const Rating = require('../models/ratingModel'); 
const Order = require('../models/orderModel'); 
const Staff = require('../models/staffModel');

const getStaffRatings = async (req, res) => {
    try {
      const { staffId } = req.params;
      console.log(
        staffId
      );
      const staff = await Staff.findOne({userId: staffId}).populate('userId');
      if (!staff) {
        return res.status(404).json({ error: 'Staff member not found' });
      }
  
      const ratings = await Rating.aggregate([
        { $match: { user: staff.userId._id } },
        {
          $group: {
            _id: '$user',
            avgRating: { $avg: '$rate' },
            totalRatings: { $sum: 1 },
          },
        },
      ]);
  
      const result = ratings[0] || { avgRating: 0, totalRatings: 0 };

      const ratingsData = await Rating.find({user: staffId});
  
      res.status(200).json({
        userId: staff.userId,
        avgRating: result.avgRating,
        totalRatings: result.totalRatings,
        ratings : ratingsData
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const createRating = async (req, res) => {
  try {
    const { rate, comment, user, forOrder } = req.body;
    const fromUser = req.user._id; 

    
    const order = await Order.findById(forOrder);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    
    const existingRating = await Rating.findOne({ fromUser, forOrder });
    if (existingRating) {
      return res.status(400).json({ error: 'You have already rated this order' });
    }

    const rating = new Rating({
      user,
      rate,
      comment,
      fromUser,
      forOrder,
    });

    await rating.save();

    res.status(201).json(rating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find().populate('user fromUser forOrder');
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getRatingById = async (req, res) => {
  try {
    const rating = await Rating.findById(req.params.id).populate('user fromUser forOrder');
    if (!rating) {
      return res.status(404).json({ error: 'Rating not found' });
    }
    res.status(200).json(rating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateRating = async (req, res) => {
  try {
    const { rate, comment } = req.body;
    const fromUser = req.user._id; 

    const rating = await Rating.findById(req.params.id);
    if (!rating) {
      return res.status(404).json({ error: 'Rating not found' });
    }

    
    if (rating.fromUser.toString() !== fromUser.toString()) {
      return res.status(403).json({ error: 'You are not authorized to update this rating' });
    }

    rating.rate = rate !== undefined ? rate : rating.rate;
    rating.comment = comment !== undefined ? comment : rating.comment;

    await rating.save();

    res.status(200).json(rating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteRating = async (req, res) => {
  try {
    const fromUser = req.user._id; 

    const rating = await Rating.findById(req.params.id);
    if (!rating) {
      return res.status(404).json({ error: 'Rating not found' });
    }

    
    if (rating.fromUser.toString() !== fromUser.toString()) {
      return res.status(403).json({ error: 'You are not authorized to delete this rating' });
    }

    await rating.remove();

    res.status(200).json({ message: 'Rating deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRating,
  getRatings,
  getRatingById,
  updateRating,
  deleteRating,
  getStaffRatings
};
