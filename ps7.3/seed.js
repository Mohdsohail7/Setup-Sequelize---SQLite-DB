const { sequelize } = require("../config/database");
const Student = require("../ps7.1-cw/models/students");
const Book = require("../ps7.2-hw/models/book.model");
const Movie = require("../ps7.2-hw/models/movie.model");

const studentData = [
    {
      name: 'Anjali Gupta'
    },
    {
      name: 'Neha Bansal'
    },
  ];

  const books = [
    { name: 'The Great Gatsby' },
    { name: 'To Kill a Mockingbird' },
    { name: '1984' },
  ];
  
  const movies = [{ name: 'Inception' }, { name: 'Iron Man' }, { name: 'Thor' }];
  
  const seedDatabase = async () => {
    try {
      await sequelize.sync({ force: true });
  
      // Seed Students with ClassroomId
      await Student.bulkCreate(studentData);
      // seed books data
      await Book.bulkCreate(books);

      // seed movie data
      await Movie.bulkCreate(movies)
  
      console.log('Database seeded with Student data!');
    } catch (error) {
      console.error('Error Seeding the Data:', error.message);
    }
  };
  
  // Execute seeding function
  seedDatabase();