const express = require('express');
const Book = require('./models/book.model.js');
const { sequelize } = require('../config/database.js');
const Movie = require('./models/movie.model');

const app = express();

app.use(express.json());

const books = [
  { name: 'The Great Gatsby' },
  { name: 'To Kill a Mockingbird' },
  { name: '1984' },
];

const movies = [{ name: 'Inception' }, { name: 'Iron Man' }, { name: 'Thor' }];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    // question-1
    await Book.bulkCreate(books);

    // question-2
    await Movie.bulkCreate(movies);

    return res
      .status(200)
      .json({ message: 'Data Saved in database Successful.' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error.' });
  }
});

// adding new records
app.post('/newBook', async (req, res) => {
  try {
    const bookName = req.body.name;
    await Book.create({
      name: bookName,
    });

    return res
      .status(200)
      .json({
        message: 'New book record added successfully!.',
        name: bookName,
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Unexpected error occurred while creating new book entry',
        error: error.message,
      });
  }
});

app.post('/newMovie', async (req, res) => {
  try {
    const movieName = req.body.name;
    await Movie.create({
      name: movieName,
    });

    return res
      .status(200)
      .json({
        message: 'New movie record added successfully!.',
        name: movieName,
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Unexpected error occurred while creating new movie entry',
        error: error.message,
      });
  }
});


const port = 3000;
app.listen(port, () => {
  console.log('Server is running at port number is: ', port);
});
