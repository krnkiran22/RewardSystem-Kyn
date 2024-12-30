const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    location: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Content', contentSchema);
