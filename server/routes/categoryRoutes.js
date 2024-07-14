const express = require('express');
const router = express.Router();
const {
    getCategories,
    getCategoryById,
    addCategory,
    updateCategory,
    deleteCategory,
    getChildCategories,
    addChildCategory,
    updateChildCategory,
    deleteChildCategory,
    getSubcategories,
    addSubcategory,
    deleteSubcategory,
    updateSubcategory,
} = require('../controllers/categoryControllers');
const requireAdminAuth = require('../middlewares/requireAdminAuth');

router.get('/', getCategories);
router.get('/child/:categoryId/:subcategoryId', getChildCategories);
router.get('/sub-category/:categoryId', getSubcategories);
router.post('/sub-category/:categoryId', addSubcategory);
router.delete('/sub-category/:categoryId/:subcategoryId', deleteSubcategory);
router.put('/sub-category/:categoryId/:subcategoryId', updateSubcategory);
router.post('/child/:categoryId/:subcategoryId', addChildCategory);
router.delete('/child/:categoryId/:subcategoryId/:slug', deleteChildCategory);
router.put('/child/:categoryId/:subcategoryId', updateChildCategory);
router.get('/:id', getCategoryById);
router.post('/',requireAdminAuth, addCategory);
router.put('/:id',requireAdminAuth, updateCategory);
router.delete('/:id',requireAdminAuth, deleteCategory);

module.exports = router;
