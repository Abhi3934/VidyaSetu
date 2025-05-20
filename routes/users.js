const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Abhinav' },
    { id: 2, name: 'Ayush' },
  ];
  res.json(users);
});

module.exports = router;
