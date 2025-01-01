import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RedemptionPage.css';

const RedemptionPage = () => {
  const [userPoints, setUserPoints] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [selectedReward, setSelectedReward] = useState(null);

  useEffect(() => {
    fetchUserPoints();
    fetchRewards();
  }, []);

  const fetchUserPoints = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
  
      if (!userId || !token) {
        alert('User not logged in');
        return;
      }
  
      const response = await axios.get(
        `http://localhost:5000/api/points/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      setUserPoints(response.data.totalPoints);
    } catch (error) {
      console.error('Error fetching user points:', error);
      alert('Error fetching points. Please try again later.');
    }
  };

  const fetchRewards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/rewards');
      setRewards(response.data);
    } catch (error) {
      console.error('Error fetching rewards:', error);
      alert('Error fetching rewards. Please try again later.');
    }
  };

  const handleSelectReward = (reward) => {
    setSelectedReward(reward);
  };

  const handleRedeemReward = async () => {
    if (!selectedReward || userPoints < selectedReward.pointsRequired) {
      alert('Insufficient points for redemption.');
      return;
    }

    try {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      if (!userId || !token) {
        alert('User not logged in');
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/api/rewards/redeem',
        {
          userId: userId,
          rewardId: selectedReward._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);
      fetchUserPoints(); // Re-fetch points after redemption
    } catch (error) {
      console.error('Error redeeming reward:', error);
      alert('Error redeeming reward. Please try again later.');
    }
  };

  return (
    <div className="redemption-container">
      <header className="redemption-header">
        <h1>Kyn Reward Redemption</h1>
      </header>

      <div className="balance-info">
        <h3>
          Your Total Points: <span>{userPoints}</span>
        </h3>
      </div>

      <section className="rewards-section">
        <h2>Available Rewards</h2>
        <div className="rewards-list">
          {rewards.map((reward) => (
            <div
              key={reward._id}
              className={`reward-card ${
                selectedReward && selectedReward._id === reward._id ? 'selected' : ''
              }`}
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
