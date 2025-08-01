const {Router} = require('express');
const handleContect = require('../Controllers/auth-Contect');
const router = Router();

router.route('/contect').post(handleContect)

module.exports = router
