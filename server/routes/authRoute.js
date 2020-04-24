const express = require('express');
const router = express.Router();

const { login } = require('../api/users');

router.post('/login', login);

module.exports = router;
