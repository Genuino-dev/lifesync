const express = require('express');
const { createInstitution } = require('../controllers/institutionController');
const router = express.Router();

router.post('/', createInstitution);

module.exports = router;
