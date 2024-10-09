const { default: mongoose } = require('mongoose');
const Category = require('../models/CategoryModel');
const { convertToSlug } = require('../utils/functions');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addCategory = async (req, res) => {
    const { name, icon, subCategories, topCategory } = req.body;

    const preparedSubCategories = (subCategories || []).map(subCat => ({
        id: subCat.id || '', 
        name: subCat.name.trim(),
        slug: convertToSlug(subCat.name, false), 
        child: subCat.child ? subCat.child.map(child => ({
            name: child.name.trim(),
            slug: convertToSlug(child.name, false), 
        })) : [],
    }));

    
    const category = new Category({
        name: name.trim(),
        icon: icon || [], 
        slug: convertToSlug(name, false), 
        subCategories: preparedSubCategories,
        topCategory: topCategory || false, 
    });

    try {
        const savedCategory = await category.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getChildCategories = async (req, res) => {
    const { categoryId, subcategoryId } = req.params;
    try {
        const category = await Category.findOne({ _id: categoryId });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        const subcategory = category.subCategories.find(sub => sub._id == subcategoryId);
        if (!subcategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        res.status(200).json(subcategory.child);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addChildCategory = async (req, res) => {
    const { categoryId, subcategoryId } = req.params;
    try {
        const objectData = {
            name: req.body.child.name.trim(),
            slug: req.body.child.slug,
        };
        const updatedCategory = await Category.updateOne(
            { _id: categoryId, "subCategories._id": subcategoryId },
            { $push: { "subCategories.$.child": objectData } }
        );
        res.status(200).json({ success: updatedCategory.modifiedCount > 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateChildCategory = async (req, res) => {
    const { categoryId, subcategoryId } = req.params;
    try {
        const { slug, name } = req.body.child;

        const updatedCategory = await Category.updateOne(
            { 
                _id: categoryId,
            },
            { 
                $set: { 
                    "subCategories.$[sub].child.$[child].name": name,
                    "subCategories.$[sub].child.$[child].slug": slug
                } 
            },
            { 
                arrayFilters: [
                    { "sub._id": subcategoryId }, 
                    { "child.slug": req.body.child.currentSlug }
                ] 
            }
        );

        res.status(200).json({ success: updatedCategory.modifiedCount > 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteChildCategory = async (req, res) => {
    const { categoryId, subcategoryId, slug } = req.params;
    try {
        const updatedCategory = await Category.updateOne(
            { _id: categoryId, "subCategories._id": subcategoryId },
            { $pull: { "subCategories.$.child": { slug: slug } } }
        );
        res.status(200).json({ success: updatedCategory.modifiedCount > 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSubcategories = async (req, res) => {
    const { categoryId } = req.params;
    console.log(categoryId);
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category.subCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addSubcategory = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const newSubcategory = {
            id: new mongoose.Types.ObjectId(),
            name: req.body.name.trim(),
            slug: req.body.slug,
            child: []
        };
        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            { $push: { subCategories: newSubcategory } },
            { new: true }
        );
        res.status(201).json(updatedCategory.subCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSubcategory = async (req, res) => {
    const { categoryId, subcategoryId } = req.params;
    try {
        const { name, slug } = req.body;
        const updatedCategory = await Category.findOneAndUpdate(
            { _id: categoryId, "subCategories._id": subcategoryId },
            { 
                $set: { 
                    "subCategories.$.name": name,
                    "subCategories.$.slug": slug 
                } 
            },
            { new: true }
        );
        res.status(200).json(updatedCategory.subCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteSubcategory = async (req, res) => {
    const { categoryId, subcategoryId } = req.params;
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            { $pull: { subCategories: { _id: subcategoryId } } },
            { new: true }
        );
        res.status(200).json(updatedCategory.subCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};






module.exports = {
    getCategories,
    deleteChildCategory,
    getCategoryById,
    addCategory,
    updateCategory,
    deleteCategory,
    getChildCategories,
    addChildCategory,
    updateChildCategory,
    updateChildCategory,
    getSubcategories,
    addSubcategory,
    updateSubcategory,
    deleteSubcategory
};
