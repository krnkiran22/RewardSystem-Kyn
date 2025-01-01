<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KYN Rewards Platform</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2 {
            color: #2c3e50;
        }
        h3 {
            color: #34495e;
        }
        p {
            font-size: 1.1em;
        }
        .section {
            margin-bottom: 20px;
        }
        .code-block {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
        }
        .endpoint {
            background-color: #ecf0f1;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
        }
        .endpoint h4 {
            margin: 0;
            color: #16a085;
        }
        .endpoint pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
        }
    </style>
</head>
<body>

    <h1>KYN Rewards Platform</h1>
    <p>The <strong>KYN Rewards Platform</strong> is designed to revolutionize societal engagement with a robust and rewarding system. This platform integrates user participation in meaningful activities with a points-based system that enables redemption for various benefits, including cryptocurrency conversion, event tickets, merchandise, and partner-brand coupons.</p>

    <div class="section">
        <h2>Features</h2>
        <h3>Point Generation</h3>
        <p>Users can generate points in multiple meaningful ways:</p>
        <ul>
            <li><strong>Participation in Social Events:</strong>
                <ul>
                    <li>Earn points by helping out in impactful social activities such as:
                        <ul>
                            <li>Assisting in flood relief efforts</li>
                            <li>Participating in area cleanup drives</li>
                            <li>Volunteering for community welfare events listed in the app</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><strong>Promoting the App:</strong>
                <ul>
                    <li><strong>External Posting:</strong> Share posts about the app on external platforms like Instagram, Facebook, or Twitter to earn points.</li>
                    <li><strong>Advertising:</strong> Help advertise the app on external platforms.</li>
                </ul>
            </li>
            <li><strong>Linking External Accounts:</strong> Link external social media accounts (e.g., Instagram, Facebook). This helps eliminate fake IDs and bots while rewarding the user with points.</li>
            <li><strong>Maintaining Activity Streaks:</strong> Users who maintain streaks for consecutive days are rewarded with bonus points, encouraging consistent engagement.</li>
        </ul>
    </div>

    <div class="section">
        <h3>Point Redemption</h3>
        <p>Users can redeem their points for a variety of rewards:</p>
        <ul>
            <li><strong>Convert Points to Cryptocurrency:</strong> Users can convert their points into a cryptocurrency token created specifically for this platform. These tokens can be stored, traded, or used for other blockchain-based activities.</li>
            <li><strong>Event Tickets:</strong> Redeem points to purchase tickets for exclusive events listed in the app.</li>
            <li><strong>Merchandise:</strong> Use points to buy merchandise from KYN or partner brands.</li>
            <li><strong>Coupons:</strong> Redeem points for discount coupons or vouchers from partnered brands.</li>
        </ul>
    </div>

    <div class="section">
        <h2>Installation and Setup</h2>
        <h3>Prerequisites</h3>
        <ul>
            <li><strong>Node.js</strong> (v14 or higher)</li>
            <li><strong>MongoDB</strong> (local or cloud connection)</li>
            <li><strong>npm</strong> (or <strong>yarn</strong>) package manager</li>
        </ul>

        <h3>Clone the Repository</h3>
        <div class="code-block">
            <pre>
git clone https://github.com/your-username/kyn-rewards-platform.git
cd kyn-rewards-platform
            </pre>
        </div>

        <h3>Backend Setup</h3>
        <h4>Navigate to the Backend Directory</h4>
        <div class="code-block">
            <pre>cd backend</pre>
        </div>

        <h4>Install Dependencies</h4>
        <p>Install all the required dependencies for the backend by running:</p>
        <div class="code-block">
            <pre>npm install</pre>
        </div>

        <h4>Create Environment Variables</h4>
        <p>Set up your environment variables by creating a .env file in the backend directory. Add the following configurations:</p>
        <div class="code-block">
            <pre>
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
            </pre>
        </div>

        <h4>Start the Backend Server</h4>
        <p>Run the server in development mode:</p>
        <div class="code-block">
            <pre>npm run dev</pre>
        </div>
        <p>The backend server will be accessible at <strong>http://localhost:5000</strong>.</p>
    </div>

    <div class="section">
        <h2>API Endpoints</h2>

        <div class="endpoint">
            <h4>POST /api/points/generate</h4>
            <p><strong>Description:</strong> Generate points for user activities.</p>
            <p><strong>Request:</strong></p>
            <div class="code-block">
                <pre>
{
  "userId": "user_id",
  "eventId": "event_id (optional)",
  "action": "action_type"
}
                </pre>
            </div>
            <p><strong>Response:</strong></p>
            <div class="code-block">
                <pre>
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
                </pre>
            </div>
        </div>

        <div class="endpoint">
            <h4>GET /api/users/profile/:userId</h4>
            <p><strong>Description:</strong> Fetch total points and transaction history for a specific user.</p>
            <p><strong>Response:</strong></p>
            <div class="code-block">
                <pre>
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
                </pre>
            </div>
        </div>

        <div class="endpoint">
            <h4>GET /api/rewards</h4>
            <p><strong>Description:</strong> Retrieve a list of all available rewards.</p>
            <p><strong>Response:</strong></p>
            <div class="code-block">
                <pre>
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
                </pre>
            </div>
        </div>

        <div class="endpoint">
            <h4>POST /api/rewards/redeem</h4>
            <p><strong>Description:</strong> Redeem points for a selected reward.</p>
            <p><strong>Request:</strong></p>
            <div class="code-block">
                <pre>
{
  "userId": "user_id",
  "rewardId": "reward_id"
}
                </pre>
            </div>
            <p><strong>Response:</strong></p>
            <div class="code-block">
                <pre>
{
  "message": "Points redeemed successfully",
  "reward": {
    "rewardId": "reward_id",
    "name": "Event Ticket",
    "pointsRequired": 50
  },
  "remainingPoints": 100
}
                </pre>
            </div>
        </div>
    </div>

</body>
</html>
