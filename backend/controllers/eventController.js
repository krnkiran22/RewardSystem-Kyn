const Event = require('../models/Event');

const createEvent = async (req, res) => {
  try {
    const { title, description, date, venue, price, availableTickets } = req.body;
    const newEvent = new Event({
      title,
      description,
      date,
      venue,
      price,
      availableTickets,
    });
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
    const { eventId } = req.params;
    const { userId, isPresent } = req.body;

    // Find the event by ID
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Find the booking by userId
    const booking = event.bookings.find(booking => booking.userId.toString() === userId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found for this user' });
    }

    // Update the confirmed status of the booking
    booking.confirmed = isPresent;
    await event.save();

    res.status(200).json({ message: `User's presence status updated successfully to ${isPresent ? 'Present' : 'Absent'}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = { createEvent, getAllEvents, bookTicket, confirmPresence };
