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

// Get Webpage Content by Section
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

// Delete Webpage Section Content
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
    const { type } = req.params; // 'gift' or 'VIPgift'
    const data = req.body;

    let updateData = {};
    updateData[`homePage.collection.${type}`] = data;

    const webpage = await Webpage.findOneAndUpdate({}, updateData, { new: true, upsert: true });
    res.status(200).json(webpage.homePage.collection[type]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const getGiftContent = async (req, res) => {
  try {
    const { type } = req.params; // 'gift' or 'VIPgift'
    const webpage = await Webpage.findOne({}, `homePage.collection.${type}`);

    if (!webpage || !webpage.homePage.collection[type]) {
      return res.status(404).json({ error: 'Gift not found' });
    }

    res.status(200).json(webpage.homePage.collection[type]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const deleteGiftContent = async (req, res) => {
  try {
    const { type } = req.params; // 'gift' or 'VIPgift'

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
