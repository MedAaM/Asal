const Gift = require('../models/giftModel'); 


const addGift = async (req, res) => {
  try {
    const newGift = new Gift(req.body);
    const savedGift = await newGift.save();
    res.status(201).json(savedGift);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getAllGifts = async (req, res) => {
  try {
    const gifts = await Gift.find();
    res.status(200).json(gifts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getGiftById = async (req, res) => {
  try {
    const gift = await Gift.findById(req.params.id);
    if (!gift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.status(200).json(gift);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateGift = async (req, res) => {
  try {
    const updatedGift = await Gift.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedGift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.status(200).json(updatedGift);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deleteGift = async (req, res) => {
  try {
    const deletedGift = await Gift.findByIdAndDelete(req.params.id);
    if (!deletedGift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.status(200).json({ message: 'Gift deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addGift,
  getAllGifts,
  getGiftById,
  updateGift,
  deleteGift
};
