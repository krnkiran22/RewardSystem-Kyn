const Points = require('../models/Points');
const Event = require('../models/Event');
const mongoose = require('mongoose');

const calculatePoints = (ticketPrice, percentage) => Math.round((ticketPrice * percentage) / 100);

const generatePoints = async (req, res) => {
  try {
    const { userId, eventId, action } = req.body;
    let points = 0;
    let event = null;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    if (eventId) {
      event = await Event.findById(eventId);
      if (!event) return res.status(404).json({ message: 'Event not found' });
    }

    switch (action) {
      case 'attendance':
        if (!event) return res.status(400).json({ message: 'Event ID is required for attendance points' });
        points = calculatePoints(event.price, 15);
        break;
      case 'referral':
        if (!event) return res.status(400).json({ message: 'Event ID is required for referral points' });
        points = calculatePoints(event.price, 10);
        break;
      case 'dailyLogin':
        points = 1;
        break;
      case 'reportContent':
        points = 5;
        break;
      case 'shareEvent':
        points = 3;
        break;
      case 'completeSurvey':
        points = 4;
        break;
      default:
        return res.status(400).json({ message: 'Invalid action type' });
    }

    const newPoints = new Points({
      userId,
      eventId,
      action,
      points,
      details: `${action} action completed`
    });
    await newPoints.save();

    res.status(201).json({ message: `${points} points generated successfully`, points: newPoints });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserPoints = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    const userPoints = await Points.find({ userId }).sort({ date: -1 });

    if (!userPoints || userPoints.length === 0) {
      return res.status(404).json({ message: 'No points found for this user' });
    }

    const totalPoints = userPoints.reduce((sum, pointRecord) => sum + pointRecord.points, 0);
    res.status(200).json({
      userId,
      totalPoints,
      pointsDetails: userPoints
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { generatePoints, getUserPoints };
