const router = require('express').Router();
const { authController } = require('../controllers');

router.route('/').post(authController.register);

module.exports = router;
