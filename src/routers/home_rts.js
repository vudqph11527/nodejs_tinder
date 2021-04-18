const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');

// router.get('/getData',homeController.getData); 
router.get('/',homeController.index); 
module.exports = router;
