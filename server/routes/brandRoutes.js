const express = require('express');
const router = express.Router();
const {
    getBrands,
    getBrandById,
    addBrand,
    updateBrand,
    deleteBrand,
} = require('../controllers/brandController');
const requireAdminAuth = require('../middlewares/requireAdminAuth');

router.get('/', getBrands);
router.get('/:id', getBrandById);
router.post('/',requireAdminAuth, addBrand);
router.put('/:id',requireAdminAuth, updateBrand);
router.delete('/:id',requireAdminAuth, deleteBrand);

module.exports = router;
