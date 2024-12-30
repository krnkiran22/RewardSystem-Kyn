const express = require('express');
const { generatePoints, getUserPoints } = require('../controllers/pointsController');

const router = express.Router();

router.post('/generate', generatePoints);
router.get('/user/:userId', getUserPoints);

module.exports = router;
