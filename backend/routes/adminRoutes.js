const express = require('express');
const { getEventAttendees, confirmAttendance } = require('../controllers/adminController');

const router = express.Router();

// Route to get event attendees
router.get('/attendees/:eventId', getEventAttendees);

// Route to confirm attendance
router.post('/points/generate', confirmAttendance);

module.exports = router;
