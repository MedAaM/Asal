const Level = require("../models/levelModel");
const Staff = require("../models/staffModel");

const getAllLevels = async (req, res) => {
  try {
    const levels = await Level.find().populate("targets.honey");
    res.status(200).json(levels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLevelById = async (req, res) => {
  try {
    const { id } = req.params;
    const level = await Level.findById(id).populate("targets.honey");
    if (!level) return res.status(404).json({ error: "Level not found" });
    res.status(200).json(level);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createLevel = async (req, res) => {
  try {
    const { levelName, levelDescription, badgeIcon, targets, rewardTarget, salary, duration, levelPeak } = req.body;
    const newLevel = new Level({ levelName, levelDescription, badgeIcon, targets, rewardTarget, salary, duration,levelPeak });
    await newLevel.save();
    res.status(201).json(newLevel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateLevelById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedLevel = await Level.findByIdAndUpdate(id, updatedData, { new: true }).populate("targets.honey");
    if (!updatedLevel) return res.status(404).json({ error: "Level not found" });
    res.status(200).json(updatedLevel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteLevelById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLevel = await Level.findByIdAndDelete(id);
    if (!deletedLevel)
      return res.status(404).json({ error: "Level not found" });
    res.status(200).json({ message: "Level deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addGiftToLevel = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, target, targetNumber } = req.body;

    const updatedLevel = await Level.findByIdAndUpdate(
      id,
      {
        $set: {
          "gift.title": title,
          "gift.description": description,
          "gift.image": image,
          "gift.target": target,
          "gift.targetNumber": targetNumber,
          "gift.isFinished": false
        }
      },
      { new: true }
    );

    if (!updatedLevel) return res.status(404).json({ error: "Level not found" });
    res.status(200).json(updatedLevel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateGiftInLevel = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, target, targetNumber, isFinished } = req.body;

    const updatedLevel = await Level.findByIdAndUpdate(
      id,
      {
        $set: {
          "gift.title": title,
          "gift.description": description,
          "gift.image": image,
          "gift.target": target,
          "gift.targetNumber": targetNumber,
          "gift.isFinished": isFinished
        }
      },
      { new: true }
    );

    if (!updatedLevel) return res.status(404).json({ error: "Level not found" });
    res.status(200).json(updatedLevel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const expireGiftInLevel = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedLevel = await Level.findByIdAndUpdate(
      id,
      {
        $set: {
          "gift.isFinished": true
        }
      },
      { new: true }
    );

    if (!updatedLevel) return res.status(404).json({ error: "Level not found" });
    res.status(200).json(updatedLevel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteGiftFromLevel = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedLevel = await Level.findByIdAndUpdate(
      id,
      {
        $unset: {
          "gift": ""
        }
      },
      { new: true }
    );

    if (!updatedLevel) return res.status(404).json({ error: "Level not found" });
    res.status(200).json({ message: "Gift deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllLevels,
  getLevelById,
  createLevel,
  updateLevelById,
  deleteLevelById,
  addGiftToLevel,
  updateGiftInLevel,
  expireGiftInLevel,
  deleteGiftFromLevel,
};
