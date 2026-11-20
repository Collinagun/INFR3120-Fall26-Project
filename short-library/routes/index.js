var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/genre', function(req, res, next) {
  res.render('genre', { title: 'Catalogue' });
});

/* GET home page. */
router.get('/book', function(req, res, next) {
  res.render('book', { title: 'Books Details' });
});

/* GET home page. */
router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Borrow Book' });
});

const genres = {
  'fiction': 'Fiction',
  'mystery': 'Mystery',
  'romance': 'Romance',
  'science-fiction': 'Science Fiction',
  'fantasy': "Fantasy",
  'non-fiction': 'Non-Fiction'
};

router.get('/books/:genre', function(req, res){
  const genre = genres[req.params.genre];

  if(!genre) {
    return res.status(404).send('Genre not found');
  }

  res.render('books', {
    title: genre + ' Books',
    genre: genre
  });
});
module.exports = router;