var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/dedicado', function(req, res, next) {
  res.render('dedicado');
});

router.get('/service', function(req, res, next) {
  res.render('service');
});


module.exports = router;
