import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles for Toastify
import '../styles/RedemptionPage.css';

const RedemptionPage = () => {
  const [userPoints, setUserPoints] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [selectedReward, setSelectedReward] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null); // For storing wallet address
  const [showPopup, setShowPopup] = useState(false); // For showing the popup
  const [convertPoints, setConvertPoints] = useState(''); // Points to be converted

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

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask is not installed. Please install it to connect your wallet.');
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      alert(`Wallet connected: ${address}`);
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };

  const handleConvertPoints = async () => {
    if (!convertPoints || isNaN(convertPoints) || Number(convertPoints) <= 0) {
      alert('Please enter a valid number of points to convert.');
      return;
    }

    // Convert points to KYN tokens (1 KYN = 100 points)
    const kynTokens = (Number(convertPoints) / 100).toFixed(2);

    // Show success toast
    toast.success(`${convertPoints} points will be converted to ${kynTokens} KYN tokens. The amount will be sent soon.`);

    setShowPopup(false); // Close the popup after conversion
    setConvertPoints(''); // Reset the points input field
  };

  return (
    <div className="redemption-container">
      <header className="redemption-header">
        <h1>Kyn Reward Redemption</h1>
        <button className="wallet-button" onClick={connectWallet}>
          {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
        </button>
        {walletAddress && (
          <button className="convert-points-button px-3 bg-red-500 rounded-r-lg" onClick={() => setShowPopup(true)}>
            Convert Points
          </button>
        )}
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

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-tab">
            <h2>Convert Points to KYN Tokens</h2>
            <p>100 Points = 1 KYN Token</p>
            <input
              type="number"
              placeholder="Enter points to convert"
              value={convertPoints}
              onChange={(e) => setConvertPoints(e.target.value)}
            />
            <div className="popup-actions">
              <button className="convert-button" onClick={handleConvertPoints}>
                Convert
              </button>
              <button className="close-button" onClick={() => setShowPopup(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toastify container to show notifications */}
      <ToastContainer />
    </div>
  );
};

export default RedemptionPage;
