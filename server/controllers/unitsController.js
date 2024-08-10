const Unit = require('../models/unitModel'); 


const getAllUnits = async (req, res) => {
  try {
    const units = await Unit.find();
    res.status(200).json(units);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getUnitById = async (req, res) => {
  try {
    const unit = await Unit.findById(req.params.id);
    if (!unit) return res.status(404).json({ message: 'Unit not found' });
    res.status(200).json(unit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createUnit = async (req, res) => {
  const { packageType, units, weightPerUnitKg } = req.body;

  const newUnit = new Unit({
    packageType,
    units,
    weightPerUnitKg
  });

  try {
    const savedUnit = await newUnit.save();
    res.status(201).json(savedUnit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateUnitById = async (req, res) => {
  const { packageType, units, weightPerUnitKg } = req.body;
  const totalWeightKg = units * weightPerUnitKg;

  try {
    const updatedUnit = await Unit.findByIdAndUpdate(
      req.params.id,
      {
        packageType,
        units,
        weightPerUnitKg
      },
      { new: true }
    );

    if (!updatedUnit) return res.status(404).json({ message: 'Unit not found' });

    res.status(200).json(updatedUnit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deleteUnitById = async (req, res) => {
  try {
    const deletedUnit = await Unit.findByIdAndDelete(req.params.id);
    if (!deletedUnit) return res.status(404).json({ message: 'Unit not found' });
    res.status(200).json({ message: 'Unit deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUnits,
  getUnitById,
  createUnit,
  updateUnitById,
  deleteUnitById
};
