require('dotenv').config(); // add this line at the very top

const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users');

const testRoutes = require('./routes/testRoutes');

app.use('/api', testRoutes);
app.use(cors());
app.use('/api', userRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to VidyaSetu Backend!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
