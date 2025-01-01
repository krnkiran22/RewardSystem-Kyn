const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const pointsRoutes = require('./routes/pointsRoutes');
const rewardRoutes = require('./routes/rewardRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(require('cors')());

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/points', pointsRoutes);
app.use('/api/rewards', rewardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
