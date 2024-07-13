const Color = require('../models/colorModel');


const createColor = async (req, res) => {
  try {
    const { name, value } = req.body;
    
    if (!name || !value) {
      return res.status(400).json({ error: 'Name and value are required' });
    }

    const newColor = new Color({ name, value });
    const savedColor = await newColor.save();
    res.status(201).json(savedColor);
  } catch (error) {
    console.error('Error creating color:', error);
    res.status(500).json({ error: 'Failed to create color' });
  }
};

const getColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.status(200).json(colors);
  } catch (error) {
    console.error('Error fetching colors:', error);
    res.status(500).json({ error: 'Failed to fetch colors' });
  }
};

const getColorById = async (req, res) => {
  try {
    const { id } = req.params;
    const color = await Color.findById(id);
    if (!color) {
      return res.status(404).json({ error: 'Color not found' });
    }
    res.status(200).json(color);
  } catch (error) {
    console.error('Error fetching color:', error);
    res.status(500).json({ error: 'Failed to fetch color' });
  }
};


const updateColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, value } = req.body;

    
    if (!name || !value) {
      return res.status(400).json({ error: 'Name and value are required' });
    }

    const updatedColor = await Color.findByIdAndUpdate(id, { name, value }, { new: true });
    if (!updatedColor) {
      return res.status(404).json({ error: 'Color not found' });
    }
    res.status(200).json(updatedColor);
  } catch (error) {
    console.error('Error updating color:', error);
    res.status(500).json({ error: 'Failed to update color' });
  }
};


const deleteColor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedColor = await Color.findByIdAndDelete(id);
    if (!deletedColor) {
      return res.status(404).json({ error: 'Color not found' });
    }
    res.status(200).json({ message: 'Color deleted successfully' });
  } catch (error) {
    console.error('Error deleting color:', error);
    res.status(500).json({ error: 'Failed to delete color' });
  }
};

module.exports = {
  createColor,
  getColors,
  getColorById,
  updateColor,
  deleteColor,
};
