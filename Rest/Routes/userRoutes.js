const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')

router.post('/', userController.createUser);

module.exports = router;