const express = require('express');
const router = express.Router();
const manageController = require('../app/controllers/ManageController');

router.get('/users/:id/edit',manageController.edit);
router.put('/users/:id',manageController.update);
router.delete('/users/:id',manageController.delete);
router.get('/users',manageController.users);


module.exports = router;