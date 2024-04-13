var express = require('express');
var router = express.Router();
var searchController = require('../controllers/searchController');



router.get('/',searchController.index);
router.get('/search',searchController.index);


module.exports = router;