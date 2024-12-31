const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  description: { type: String, required: true },
  pointsRequired: { type: Number, required: true },
  category: { type: String, required: true }, 
  additionalDetails: { type: Object, default: {} },
});

module.exports = mongoose.model('Reward', rewardSchema);
