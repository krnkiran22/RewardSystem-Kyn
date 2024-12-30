const Event = require('../models/Event');

const createEvent = async (req, res) => {
  try {
    const { title, description, date, venue, price, availableTickets, createdBy } = req.body;
    const newEvent = new Event({ title, description, date, venue, price, availableTickets, createdBy });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const bookTicket = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const { userId, ticketCount } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    if (ticketCount > event.availableTickets) {
      return res.status(400).json({ message: 'Not enough tickets available' });
    }

    event.availableTickets -= ticketCount;
    event.bookings.push({ userId, ticketCount, confirmed: false });
    await event.save();

    res.status(200).json({ message: `${ticketCount} tickets booked successfully. Awaiting confirmation from the organizer.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// confirmig presence 
const confirmPresence = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const { userId } = req.body;
    const booking = event.bookings.find(booking => booking.userId.toString() === userId);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found for this user' });
    }

    booking.confirmed = true;
    await event.save();

    res.status(200).json({ message: 'User presence confirmed successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createEvent, getAllEvents, bookTicket, confirmPresence };
