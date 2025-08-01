const express = require('express');
const { handleSignUp, handleLogin, user } = require('../Controllers/auth-Controllers');
const {validate} = require('../middleware/validation-middleware');
const { signUpSchema, loginSchema } = require('../validation/auth-validation');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.route('/signUp').post(validate(signUpSchema),handleSignUp);
router.route('/login').post(validate(loginSchema),handleLogin);
router.route('/user').get(authMiddleware,user)
module.exports = router;