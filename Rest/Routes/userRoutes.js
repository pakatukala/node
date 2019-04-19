const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')
const JoiSchemaValidation = require('../helper/JoiSchemaValidation')
const userSchema = require('../Models/api/userSchema')


router.post('/', JoiSchemaValidation.valdateBody(userSchema.createUserSchema), userController.createUser)
router.get('/list', userController.getCustomer)
router.get('/list/:userId', userController.getCustomer)
router.put('/update/:userId', userController.updateCustomer)
router.delete('/delete/:userId', userController.removeCustomer)
module.exports = router;