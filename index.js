require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const testRoutes = require('./routes/testRoutes');
const userRoutes = require('./routes/users');

const app = express();

connectDB(); // Connect to MongoDB

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Routes
app.use('/api', testRoutes);
app.use('/api', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to VidyaSetu Backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
