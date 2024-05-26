const express = require('express');
const router = express.Router();
const entityController = require('../controllers/entityController');

// Define routes
router.get('/entities', entityController.listEntities);
router.post('/entities', entityController.createEntity);

module.exports = router;
