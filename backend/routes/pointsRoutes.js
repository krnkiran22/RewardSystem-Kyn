const express = require('express');
const { generatePoints, getUserPoints } = require('../controllers/pointsController');

const router = express.Router();

// Route to generate points (POST request)
router.post('/generate', generatePoints);

// Route to get user points (GET request)
router.get('/user/:userId', getUserPoints); // Ensure this route matches your frontend call

module.exports = router;
