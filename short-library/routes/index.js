var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('genre', { title: 'Catalog' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('book', { title: 'Books' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('checkout', { title: 'Express' });
});
module.exports = router;
