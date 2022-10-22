const router = require('express').Router();
const { authController } = require('../controllers');

router.route('/').post(authController.register);
router.route('/health').get(authController.getHealthyCheck);

module.exports = router;
