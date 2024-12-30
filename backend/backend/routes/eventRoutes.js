const express = require('express');
const { createEvent, getAllEvents, bookTicket } = require('../controllers/eventController');

const router = express.Router();

router.post('/', createEvent);
router.get('/', getAllEvents);
router.post('/:eventId/book', bookTicket);

module.exports = router;
