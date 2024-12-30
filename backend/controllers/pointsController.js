const Points = require('../models/Points');
const Event = require('../models/Event');

// Calculate points based on ticket price or other logic
const calculatePoints = (ticketPrice, percentage) => Math.round((ticketPrice * percentage) / 100);

const generatePoints = async (req, res) => {
  try {
    const { userId, eventId, action } = req.body; // Action defines the type of reward
    let points = 0;

    // Find the event if applicable
    let event = null;
    if (eventId) {
      event = await Event.findById(eventId);
      if (!event) return res.status(404).json({ message: 'Event not found' });
    }

    // Define point logic based on action
    switch (action) {
      case 'attendance':
        if (!event) return res.status(400).json({ message: 'Event ID is required for attendance points' });
        points = calculatePoints(event.price, 15); // 15% of ticket price
        break;
      case 'referral':
        if (!event) return res.status(400).json({ message: 'Event ID is required for referral points' });
        points = calculatePoints(event.price, 10); // 10% of ticket price
        break;
      case 'dailyLogin':
        points = 1; // 1 point per login
        break;
      case 'reportContent':
        points = 5; // 5 points for reporting confirmed content
        break;
      case 'shareEvent':
        points = 3; // Points for sharing events
        break;
      case 'completeSurvey':
        points = 4; // Points for completing surveys
        break;
      default:
        return res.status(400).json({ message: 'Invalid action type' });
    }

    // Save points to the database
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


module.exports = { generatePoints , getUserPoints };
