const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

const router = express.Router();

//LOGIN
router.post('/login', loginController);

//REGISTER
router.post('/register', registerController);

module.exports = router;