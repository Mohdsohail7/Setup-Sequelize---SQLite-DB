const express = require('express');
const Student = require('./models/students');
const { sequelize } = require('../config/database');

const app = express();

app.use(express.json());

let studentData = [
  { name: 'Vikram Patel', email: 'vikram@example.com', age: 22 },
  { name: 'Aisha Khan', email: 'aisha@example.com', age: 25 },
  // Attempt to add a duplicate email to test the unique constraint
  { name: 'Ravi Singh', email: 'vikram@example.com', age: 23 }
]

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await Student.bulkCreate(studentData);

    return res
      .status(200)
      .json({ message: 'Database seeded with additional records!.' });
  } catch (error) {
    return res.status(500).json({ message: "Error sending from database.", error: error.message });
  }
});

// adding new student
app.post('/newStudent', async (req, res) => {
  try {
    const studentName = req.body.name;
    await Student.create({
      name: studentName,
    });

    return res.status(200).json({
      message: 'New student record added successfully!.',
      name: studentName,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Unexpected error occurred while creating new student entry',
      error: error.message,
    });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log('Server is running at port number is: ', port);
});
