const mongoose = require('mongoose');
const Reward = require('../models/Reward');

const initializeRewards = async () => {
  const rewards = [
    { name: 'Discount Code', description: '10% off on event payment', pointsRequired: 50, category: 'Discount' },
    { name: 'KYN Token Transfer', description: 'Convert points to KYN tokens', pointsRequired: 100, category: 'TokenTransfer' },
    { name: 'Exclusive Event Access', description: 'Access to premium events', pointsRequired: 200, category: 'EventAccess' },
    { name: 'Branded Merchandise', description: 'Redeem for exclusive merchandise', pointsRequired: 150, category: 'Merchandise' },
    { name: 'Early Ticket Access', description: 'Unlock early-bird ticket offers', pointsRequired: 30, category: 'EventAccess' },
  ];

  try {
    await Reward.insertMany(rewards);
    console.log('Rewards initialized successfully');
  } catch (error) {
    console.error('Error initializing rewards:', error.message);
  }
};

initializeRewards();
