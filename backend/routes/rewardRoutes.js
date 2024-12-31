const express = require('express');
const { redeemReward, getRewards } = require('../controllers/RewardController');

const router = express.Router();

router.get('/', getRewards); 
router.post('/redeem', redeemReward);

module.exports = router;
