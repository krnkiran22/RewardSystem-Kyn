const Event = require('../models/Event');
const Points = require('../models/Points');
const User = require('../models/User');

const getEventAttendees = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Assuming 'attendees' is an array of user IDs
    const attendees = await User.find({
      '_id': { $in: event.attendees },
    }).select('userName'); // Modify based on your user model

    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const confirmAttendance = async (req, res) => {
  const { userId, eventId, action } = req.body;

  if (!userId || !eventId || action !== 'attendance') {
    return res.status(400).json({ message: 'Invalid data' });
  }

  try {
    // Award points for attendance
    const points = new Points({
      userId,
      eventId,
      action,
      points: 15, // Attendance points value (change as needed)
      details: 'Attendance confirmed',
    });

    await points.save();
    res.status(201).json({ message: 'Attendance confirmed and points awarded.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getEventAttendees, confirmAttendance };
