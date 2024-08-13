const express = require('express');
const router = express.Router();
const {
  createOrUpdateWebpage,
  getWebpageContent,
  deleteWebpageContent,
  createOrUpdateGift,
  getGiftContent,
  deleteGiftContent,
  createOrUpdateNewsItem,
  getNewsByGroup,
} = require('../controllers/webPageController'); 
const requireAdminAuth = require('../middlewares/requireAdminAuth');


router.put('/:section',requireAdminAuth, createOrUpdateWebpage);


router.get('/:section', getWebpageContent);


router.delete('/:section',requireAdminAuth, deleteWebpageContent);
router.put('/webpage/gift', createOrUpdateGift);

router.get('/webpage/gift', getGiftContent);

router.delete('/webpage/gift', requireAdminAuth, deleteGiftContent);
router.post('/webpage/news', createOrUpdateNewsItem);
router.get('/webpage/news/:levelName', getNewsByGroup);

module.exports = router;
