const Honey = require('../models/honeyModel'); 


const addHoney = async (req, res) => {
  try {
    const newHoney = new Honey(req.body);
    const savedHoney = await newHoney.save();
    res.status(201).json(savedHoney);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getAllHoney = async (req, res) => {
  try {
    const honeys = await Honey.find();
    res.status(200).json(honeys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getHoneyById = async (req, res) => {
  try {
    const honey = await Honey.findById(req.params.id);
    if (!honey) {
      return res.status(404).json({ message: 'Honey not found' });
    }
    res.status(200).json(honey);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateHoney = async (req, res) => {
  try {
    const updatedHoney = await Honey.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedHoney) {
      return res.status(404).json({ message: 'Honey not found' });
    }
    res.status(200).json(updatedHoney);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deleteHoney = async (req, res) => {
  try {
    const deletedHoney = await Honey.findByIdAndDelete(req.params.id);
    if (!deletedHoney) {
      return res.status(404).json({ message: 'Honey not found' });
    }
    res.status(200).json({ message: 'Honey deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addHoney,
  getAllHoney,
  getHoneyById,
  updateHoney,
  deleteHoney
};
