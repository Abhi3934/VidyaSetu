require('dotenv').config(); // Load .env first
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB from config/db.js
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: `Hello user ${req.user.userId}, you accessed a protected route!` });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server is running on http://localhost:${PORT}`));

