const Webpage = require('../models/webPageModel');

// Create or Update Webpage Content
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

module.exports = {
  createOrUpdateWebpage,
  getWebpageContent,
  deleteWebpageContent,
};
