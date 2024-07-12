const express = require('express');
const router = express.Router();
const {
    getCategories,
    getCategoryById,
    addCategory,
    updateCategory,
    deleteCategory,
} = require('../controllers/categoryControllers');
const requireAdminAuth = require('../middlewares/requireAdminAuth');

router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.post('/',requireAdminAuth, addCategory);
router.put('/:id',requireAdminAuth, updateCategory);
router.delete('/:id',requireAdminAuth, deleteCategory);

module.exports = router;
