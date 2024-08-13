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
    const data = req.body;

    const requiredFields = ['title', 'description', 'image', 'target', 'targetNumber'];
    const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }

    const updateData = {
      'staffPage.gift': {
        title: data.title,
        description: data.description,
        image: data.image,
        target: data.target,
        targetNumber: data.targetNumber,
        isFinished: data.isFinished || false
      }
    };

    const webpage = await Webpage.findOneAndUpdate(
      {},
      { $set: updateData },
      { new: true, upsert: true }
    );

    res.status(200).json(webpage.staffPage.gift);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const getGiftContent = async (req, res) => {
  try {
    const webpage = await Webpage.findOne({}, 'staffPage.gift');

    if (!webpage || !webpage.staffPage || !webpage.staffPage.gift) {
      return res.status(404).json({ error: 'No gift found' });
    }

    res.status(200).json(webpage.staffPage.gift);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const deleteGiftContent = async (req, res) => {
  try {
    const updateData = { 'staffPage.gift': {} };

    const webpage = await Webpage.findOneAndUpdate({}, { $set: updateData }, { new: true });
    res.status(200).json({ message: 'Gift content deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const createOrUpdateNewsItem = async (req, res) => {
  try {
    const { newsId } = req.body;
    const data = req.body;

    const requiredFields = ['title', 'paragraph', 'forGroup'];
    const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }

    let updateData;
    let webpage;

    if (newsId) {
      const newsItemPath = `staffPage.news.${newsId}`;
      updateData = { $set: { [newsItemPath]: data } };
      webpage = await Webpage.findOneAndUpdate(
        { [`${newsItemPath}`]: { $exists: true } }, 
        updateData,
        { new: true }
      );
      
      if (!webpage) {
        return res.status(404).json({ error: 'News item not found' });
      }
      res.status(200).json(webpage.staffPage.news[newsId]);

    } else {
      updateData = { $push: { 'staffPage.news': data } };
      webpage = await Webpage.findOneAndUpdate(
        {},
        updateData,
        { new: true, upsert: true }
      );
      res.status(201).json(webpage.staffPage.news);
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
const getNewsByGroup = async (req, res) => {
  try {
    const levelName = req.params.levelName;

    
    const webpage = await Webpage.findOne({}, 'staffPage.news');

    if (!webpage || !webpage.staffPage || !webpage.staffPage.news) {
      return res.status(404).json({ message: 'No news found' });
    }

    
    const newsArray = webpage.staffPage.news.filter(newsItem => newsItem.forGroup === levelName);

    if (newsArray.length === 0) {
      return res.status(404).json({ message: `No news found for level: ${levelName}` });
    }

    res.status(200).json(newsArray);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




module.exports = {
  getNewsByGroup,
  createOrUpdateNewsItem,
  createOrUpdateWebpage,
  getWebpageContent,
  deleteWebpageContent,
  createOrUpdateGift,
  getGiftContent,
  deleteGiftContent,
};
