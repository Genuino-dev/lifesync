const Institution = require('../models/Institution');

exports.createInstitution = async (req, res) => {
  try {
    const institution = new Institution(req.body);
    await institution.save();
    res.status(201).json(institution);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
