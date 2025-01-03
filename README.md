Here’s a properly formatted `README.md` file for your KYN Rewards Platform:


# KYN Rewards Platform

The **KYN Rewards Platform** is designed to revolutionize societal engagement with a robust and rewarding system. This platform integrates user participation in meaningful activities with a points-based system that enables redemption for various benefits, including cryptocurrency conversion, event tickets, merchandise, and partner-brand coupons.

---

## Features

### Point Generation

Users can generate points in multiple meaningful ways:

1. **Participation in Social Events**:
   - Earn points by helping out in impactful social activities such as:
     - Assisting in flood relief efforts.
     - Participating in area cleanup drives.
     - Volunteering for community welfare events listed in the app.

2. **Promoting the App**:
   - **External Posting**: Share posts about the app on external platforms like Instagram, Facebook, or Twitter to earn points.
   - **Advertising**: Help advertise the app on external platforms.

3. **Linking External Accounts**:
   - Link external social media accounts (e.g., Instagram, Facebook).
   - This helps eliminate fake IDs and bots while rewarding the user with points.

4. **Maintaining Activity Streaks**:
   - Users who maintain streaks for consecutive days are rewarded with bonus points, encouraging consistent engagement.

---

### *Point Redemption*

Users can redeem their points for a variety of rewards:

1. **Convert Points to Cryptocurrency**:
   - Users can convert their points into a cryptocurrency token created specifically for this platform.
   - These tokens can be stored, traded, or used for other blockchain-based activities.

2. **Event Tickets**:
   - Redeem points to purchase tickets for exclusive events listed in the app.

3. **Merchandise**:
   - Use points to buy merchandise from KYN or partner brands.

4. **Coupons**:
   - Redeem points for discount coupons or vouchers from partnered brands.

---

## Installation and Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud connection)
- **npm** (or **yarn**) package manager

### Clone the Repository

```bash
git clone https://github.com/krnkiran22/RewardSystem-Kyn.git
cd RewardSystems-Kyn
```

### Backend Setup

#### Navigate to the Backend Directory

```bash
cd backend
```

#### Install Dependencies

Install all the required dependencies for the backend by running:

```bash
npm install
```

#### Create Environment Variables

Set up your environment variables by creating a `.env` file in the backend directory. Add the following configurations:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Start the Backend Server

Run the server in development mode:

```bash
npm run dev
```

The backend server will be accessible at `http://localhost:5000`.

---

## API Endpoints

### *Point Generation*

#### `POST /api/points/generate`
- **Description**: Generate points for user activities such as attendance, referrals, or daily login streaks.

**Request Body**:
```json
{
  "userId": "user_id",
  "eventId": "event_id (optional)",
  "action": "action_type"
}
```

**Response**:
```json
{
  "message": "15 points generated successfully",
  "points": {
    "userId": "user_id",
    "eventId": "event_id",
    "action": "attendance",
    "points": 15,
    "details": "attendance action completed"
  }
}
```

---

### Fetch User Points

#### `GET /api/users/profile/:userId`
- **Description**: Retrieve the total points and transaction history for a specific user.

**Response**:
```json
{
  "userId": "user_id",
  "totalPoints": 150,
  "pointsDetails": [
    {
      "action": "attendance",
      "points": 15,
      "date": "2025-01-01T12:00:00Z"
    },
    {
      "action": "dailyLogin",
      "points": 1,
      "date": "2025-01-02T12:00:00Z"
    }
  ]
}
```

---

### List Rewards

#### `GET /api/rewards`
- **Description**: Retrieve a list of available rewards users can redeem points for.

**Response**:
```json
[
  {
    "rewardId": "reward_id_1",
    "name": "Event Ticket",
    "pointsRequired": 50
  },
  {
    "rewardId": "reward_id_2",
    "name": "Merchandise",
    "pointsRequired": 100
  }
]
```

---

### Redeem Points

#### `POST /api/rewards/redeem`
- **Description**: Redeem points for a selected reward.

**Request Body**:
```json
{
  "userId": "user_id",
  "rewardId": "reward_id"
}
```

**Response**:
```json
{
  "message": "Points redeemed successfully",
  "reward": {
    "rewardId": "reward_id",
    "name": "Event Ticket",
    "pointsRequired": 50
  },
  "remainingPoints": 100
}
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
