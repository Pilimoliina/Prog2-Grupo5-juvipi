var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');



router.get('/',loginController.index);
router.get('/login',loginController.index);

module.exports = router;