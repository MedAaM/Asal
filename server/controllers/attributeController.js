const mongoose = require('mongoose');
const Attribute = require('../models/attributeModel'); 


const createAttribute = async (req, res) => {
  try {
    const { name, values } = req.body;

    
    const existingAttribute = await Attribute.findOne({ name });
    if (existingAttribute) {
      return res.status(400).json({ message: 'Attribute with this name already exists' });
    }

    
    const newAttribute = new Attribute({ name, values });
    const savedAttribute = await newAttribute.save();

    res.status(201).json({ message: 'Attribute created successfully', attribute: savedAttribute });
  } catch (error) {
    console.error('Error creating attribute:', error);
    res.status(500).json({ message: 'Failed to create attribute', error: error.message });
  }
};


const getAttributes = async (req, res) => {
  try {
    const attributes = await Attribute.find();
    res.status(200).json(attributes);
  } catch (error) {
    console.error('Error fetching attributes:', error);
    res.status(500).json({ message: 'Failed to fetch attributes', error: error.message });
  }
};


const getAttributeById = async (req, res) => {
  try {
    const { id } = req.params;
    const attribute = await Attribute.findById(id);
    if (!attribute) {
      return res.status(404).json({ message: 'Attribute not found' });
    }
    res.status(200).json(attribute);
  } catch (error) {
    console.error('Error fetching attribute by ID:', error);
    res.status(500).json({ message: 'Failed to fetch attribute', error: error.message });
  }
};


const updateAttribute = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, values } = req.body;

    const updatedAttribute = await Attribute.findByIdAndUpdate(
      id,
      { name, values },
      { new: true }
    );

    if (!updatedAttribute) {
      return res.status(404).json({ message: 'Attribute not found' });
    }

    res.status(200).json({ message: 'Attribute updated successfully', attribute: updatedAttribute });
  } catch (error) {
    console.error('Error updating attribute:', error);
    res.status(500).json({ message: 'Failed to update attribute', error: error.message });
  }
};


const deleteAttribute = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAttribute = await Attribute.findByIdAndDelete(id);

    if (!deletedAttribute) {
      return res.status(404).json({ message: 'Attribute not found' });
    }

    res.status(200).json({ message: 'Attribute deleted successfully', attribute: deletedAttribute });
  } catch (error) {
    console.error('Error deleting attribute:', error);
    res.status(500).json({ message: 'Failed to delete attribute', error: error.message });
  }
};

module.exports = {
  createAttribute,
  getAttributes,
  getAttributeById,
  updateAttribute,
  deleteAttribute,
};
