const Brand = require('../models/brandModel');

// Get all brands
const getBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get brand by ID
const getBrandById = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) return res.status(404).json({ message: 'Brand not found' });
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new brand
const addBrand = async (req, res) => {
    const brand = new Brand(req.body);
    try {
        const savedBrand = await brand.save();
        res.status(201).json(savedBrand);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a brand
const updateBrand = async (req, res) => {
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBrand) return res.status(404).json({ message: 'Brand not found' });
        res.status(200).json(updatedBrand);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a brand
const deleteBrand = async (req, res) => {
    try {
        const deletedBrand = await Brand.findByIdAndDelete(req.params.id);
        if (!deletedBrand) return res.status(404).json({ message: 'Brand not found' });
        res.status(200).json({ message: 'Brand deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getBrands,
    getBrandById,
    addBrand,
    updateBrand,
    deleteBrand,
};
