const router = require('express').Router();
const { authController } = require('../controllers');
const { userTokenExtractor } = require('../middlewares');

router.route('/signup').post(authController.register);
router.route('/login').post(authController.login);
router.route('/me').get(userTokenExtractor, authController.me);

module.exports = router;
