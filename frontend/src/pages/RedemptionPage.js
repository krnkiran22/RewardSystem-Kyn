import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RedemptionPage.css';

const RedemptionPage = () => {
  const [userPoints, setUserPoints] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [selectedReward, setSelectedReward] = useState(null);

  // Fetch user points and available rewards on mount
  useEffect(() => {
    fetchUserPoints();
    fetchRewards();
  }, []);

  // Fetch user points from the API
  const fetchUserPoints = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/points/user/12345');
      const totalPoints = response.data.reduce((sum, point) => sum + point.points, 0);
      setUserPoints(totalPoints);
    } catch (error) {
      console.error('Error fetching user points:', error);
    }
  };

  // Fetch rewards from the API
  const fetchRewards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/rewards');
      setRewards(response.data);
    } catch (error) {
      console.error('Error fetching rewards:', error);
    }
  };

  // Handle reward selection
  const handleSelectReward = (reward) => {
    setSelectedReward(reward);
  };

  // Handle reward redemption
  const handleRedeemReward = async () => {
    if (selectedReward && userPoints >= selectedReward.pointsRequired) {
      try {
        const response = await axios.post('http://localhost:5000/api/rewards/redeem', {
          userId: '12345',
          rewardId: selectedReward._id,
        });
        alert(response.data.message);
        fetchUserPoints();  // Update points after redemption
      } catch (error) {
        alert('Error redeeming reward: ' + error.message);
      }
    } else {
      alert('Insufficient points for redemption.');
    }
  };

  return (
    <div className="redemption-container">
      <header className="redemption-header">
        <h1>Kyn Reward Redemption</h1>
      </header>

      <div className="balance-info">
        <h3>Your Total Points: <span>{userPoints}</span></h3>
      </div>

      <section className="rewards-section">
        <h2>Available Rewards</h2>
        <div className="rewards-list">
          {rewards.map((reward) => (
            <div
              key={reward._id}
              className={`reward-card ${selectedReward && selectedReward._id === reward._id ? 'selected' : ''}`}
              onClick={() => handleSelectReward(reward)}
            >
              <h3>{reward.name}</h3>
              <p>{reward.description}</p>
              <p className="points-required">Points Required: {reward.pointsRequired}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="redemption-footer">
        <button
          className="redeem-button"
          onClick={handleRedeemReward}
          disabled={!selectedReward || userPoints < selectedReward.pointsRequired}
        >
          Redeem Reward
        </button>
      </footer>
    </div>
  );
};

export default RedemptionPage;
