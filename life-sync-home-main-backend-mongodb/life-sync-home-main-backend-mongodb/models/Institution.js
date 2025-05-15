const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
  institutionName: { type: String, required: true },
  address: { type: String, required: true },
  responsiblePerson: { type: String, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Institution', institutionSchema);
