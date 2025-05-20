const express = require('express');
const router = express.Router();

const testController = require('../controllers/testController');

router.get('/hello', testController.sayHello);

module.exports = router;
