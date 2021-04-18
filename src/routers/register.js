const express = require('express');
const router = express.Router();
const accountController = require('../app/controllers/AccountController');

router.post('/infor',accountController.infor);
router.get('/',accountController.register);

/// SLide 7
// router('/getUser', function (req, res) {
//     var connectUser = db.model('user',user);
    
// })
module.exports = router;
