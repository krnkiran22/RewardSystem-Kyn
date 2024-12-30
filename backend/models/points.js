const mongoose = require('mongoose');

const pointsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }, 
  action: { type: String, required: true },
  points: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  details: { type: String } 
});

module.exports = mongoose.model('Points', pointsSchema);
