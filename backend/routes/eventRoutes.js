const express = require('express');
const { createEvent, getAllEvents, bookTicket,confirmPresence } = require('../controllers/eventController');

const router = express.Router();

router.post('/create', createEvent);
router.get('/get', getAllEvents);
router.post('/:eventId/book', bookTicket);
router.patch('/:eventId/confirm-presence', confirmPresence);
router.get('/:eventId/getBookings', getEventBookings);  // Added route for fetching bookings


module.exports = router;