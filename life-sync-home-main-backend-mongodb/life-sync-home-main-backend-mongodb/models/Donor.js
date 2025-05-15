const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  address: String,
  age: Number,
  bloodType: String,
  city: String,
  state: String,
  zipCode: String,
  lastDonationMonth: String,
  lastDonationYear: String,
  termsAgreed: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Donor', donorSchema);
