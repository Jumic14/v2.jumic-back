const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');
const auth = require('../middleware/auth');


router.post('/login', usersCtrl.login);

module.exports = router;
