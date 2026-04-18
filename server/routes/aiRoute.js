const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.post('/suggest', aiController.getSuggestions);
router.post('/onboarding-suggest', aiController.getOnboardingSuggestions);

module.exports = router;
