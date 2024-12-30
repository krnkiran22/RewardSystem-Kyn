const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes'); // This should point to your event routes

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(require('cors')());

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes); // Make sure this line is correct

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
