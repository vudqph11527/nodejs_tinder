const express = require('express');
const router = express.Router();
const accountController = require('../app/controllers/AccountController');

router.get('/',accountController.login);


module.exports = router;

