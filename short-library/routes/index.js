var express = require('express');
var router = express.Router();

const books = require('../data/books');

const genres = {
  'fiction': 'Fiction',
  'mystery': 'Mystery',
  'romance': 'Romance',
  'science-fiction': 'Science Fiction',
  'fantasy': 'Fantasy',
  'non-fiction': 'Non-Fiction'
};

router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

router.get('/genre', function(req, res) {
  res.render('genre', { title: 'Catalogue' });
});

router.get('/books/:genre', function(req, res) {
  const genreKey = req.params.genre;
  const genreName = genres[genreKey];

  if (!genreName) {
    return res.status(404).send('Genre not found');
  }

  const filteredBooks = books.filter(function(book) {
    return book.genre === genreKey;
  });

  res.render('books', {
    title: genreName + ' Books',
    genre: genreName,
    books: filteredBooks
  });
});

router.get('/book/:id', function(req, res) {
  const selectedBook = books.find(function(book) {
    return book.id === Number(req.params.id);
  });

  if (!selectedBook) {
    return res.status(404).send('Book not found');
  }

  res.render('book', {
    title: selectedBook.title,
    book: selectedBook,
    genreName: genres[selectedBook.genre]
  });
});

router.get('/book', function(req, res) {
  res.redirect('/genre');
});

router.get('/checkout', function(req, res) {
  const selectedBook = books.find(function(book) {
    return book.id === Number(req.query.bookId);
  });

  res.render('checkout', {
    title: 'Borrow Book',
    book: selectedBook || null
  });
});

module.exports = router;