const express = require('express');
const { createDonor } = require('../controllers/donorController');
const router = express.Router();

router.post('/', createDonor);

module.exports = router;
