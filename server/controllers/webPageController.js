const Webpage = require('../models/webPageModel');

const createOrUpdateWebpage = async (req, res) => {
  try {
    const { section } = req.params;
    const data = req.body;

    let updateData = {};
    updateData[section] = data;

    const webpage = await Webpage.findOneAndUpdate({}, updateData, { new: true, upsert: true });
    res.status(200).json(webpage);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};


const getWebpageContent = async (req, res) => {
  try {
    const { section } = req.params;
    const webpage = await Webpage.findOne({}, `${section}`);

    if (!webpage || !webpage[section]) {
      return res.status(404).json({ error: 'Section not found' });
    }

    res.status(200).json(webpage[section]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};


const deleteWebpageContent = async (req, res) => {
  try {
    const { section } = req.params;

    const updateData = {};
    updateData[section] = null;

    const webpage = await Webpage.findOneAndUpdate({}, { $unset: updateData }, { new: true });
    res.status(200).json({ message: 'Section content deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const createOrUpdateGift = async (req, res) => {
  try {
    const { type } = req.params; 
    const data = req.body;

    
    if (type !== 'VIPgift' && type !== 'gift') {
      return res.status(400).json({ error: 'Invalid type parameter' });
    }

    
    const requiredFields = ['title', 'description', 'image', 'target'];
    const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }

    
    let updateData = {};
    updateData[`staffPage.${type}`] = data;

    
    const webpage = await Webpage.findOneAndUpdate(
      {},
      { $set: updateData },
      { new: true, upsert: true }
    );

    res.status(200).json(webpage.staffPage[type]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};



const getGiftContent = async (req, res) => {
  try {
    const { type } = req.params; 
    const webpage = await Webpage.findOne({}, `staffPage.${type}`);
    
    if (!webpage || !webpage.staffPage || !webpage.staffPage[type] || !webpage.staffPage[type].title) {
      return res.status(404).json({ error: 'No gift found' });
    }

    res.status(200).json(webpage.staffPage[type]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const deleteGiftContent = async (req, res) => {
  try {
    const { type } = req.params;

    const updateData = {};
    updateData[`homePage.collection.${type}`] = null;

    const webpage = await Webpage.findOneAndUpdate({}, { $unset: updateData }, { new: true });
    res.status(200).json({ message: 'Gift content deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createOrUpdateWebpage,
  getWebpageContent,
  deleteWebpageContent,
  createOrUpdateGift,
  getGiftContent,
  deleteGiftContent,
};
