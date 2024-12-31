const Reward = require('../models/Reward');
const Points = require('../models/Points');
const UserPoints = require('../models/UserPoints');

const redeemReward = async (req, res) => {
  try {
    const { userId, rewardId } = req.body;
    const reward = await Reward.findById(rewardId);
    if (!reward) {
      return res.status(404).json({ message: 'Reward not found' });
    }
    const userPoints = await Points.find({ userId });
    const totalPoints = userPoints.reduce((sum, point) => sum + point.points, 0);

    if (totalPoints < reward.pointsRequired) {
      return res.status(400).json({ message: 'Insufficient points for redemption' });
    }
    const newPointEntry = new Points({
      userId,
      points: -reward.pointsRequired,
      action: 'redeem',
      details: `Redeemed reward: ${reward.name}`,
    });
    await newPointEntry.save();
    switch (reward.category) {
      case 'Discount':
        res.status(200).json({
          message: 'Reward redeemed successfully',
          discountCode: `DISCOUNT-${Date.now()}`, 
        });
        break;

      case 'TokenTransfer':
      
        res.status(200).json({
          message: 'Reward redeemed successfully',
          blockchainTransaction: `TXN-${Date.now()}`,
        });
        break;

      case 'Merchandise':
        res.status(200).json({
          message: 'Reward redeemed successfully',
          details: 'Your merchandise will be shipped soon!',
        });
        break;

      case 'EventAccess':
        res.status(200).json({
          message: 'Reward redeemed successfully',
          details: 'You have been granted access to the exclusive event.',
        });
        break;

      default:
        res.status(200).json({ message: 'Reward redeemed successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getRewards = async (req, res) => {
  try {
    const rewards = await Reward.find();
    res.status(200).json(rewards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { redeemReward, getRewards };
