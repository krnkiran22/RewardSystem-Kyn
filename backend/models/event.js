const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  price: { type: Number, required: true },
  availableTickets: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  bookings: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      ticketCount: { type: Number, required: true },
      bookedAt: { type: Date, default: Date.now },
      confirmed: { type: Boolean, default: false }  // Track presence confirmation
    }
  ]
});

module.exports = mongoose.model('Event', eventSchema);
