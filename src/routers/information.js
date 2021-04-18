const express = require('express');
const router = express.Router();
const informationController = require('../app/controllers/InformationController');


router.get('/:slug',informationController.show);


module.exports = router;

