var express = require('express');
var router = express.Router();

var Demo = require('../controllers/demo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
