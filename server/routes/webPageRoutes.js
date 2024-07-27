const express = require('express');
const router = express.Router();
const {
  createOrUpdateWebpage,
  getWebpageContent,
  deleteWebpageContent,
} = require('../controllers/webPageController'); 
const requireAdminAuth = require('../middlewares/requireAdminAuth');


router.put('/:section',requireAdminAuth, createOrUpdateWebpage);


router.get('/:section', getWebpageContent);


router.delete('/:section',requireAdminAuth, deleteWebpageContent);
router.put('/webpage/gift/:type',requireAdminAuth, createOrUpdateGift); 
router.get('/webpage/gift/:type',requireAdminAuth, getGiftContent); 
router.delete('/webpage/gift/:type',requireAdminAuth, deleteGiftContent);

module.exports = router;
