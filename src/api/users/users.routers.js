const express = require('express');
const router = express.Router();
const { login, register, checksession } = require('../users/users.controllers');
const { isAuth } = require('../../middlewares/auth');

router.post('/login', login);
router.post('/register', register);
router.post('/checksession', [isAuth], checksession);

module.exports = router;