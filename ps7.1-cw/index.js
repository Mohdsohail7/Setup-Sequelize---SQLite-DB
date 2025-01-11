const express = require('express');
const Student = require('./models/students');
const { sequelize } = require('../config/database');

const app = express();

app.use(express.json());

let studentData = [{ name: 'Mohd shuaib', email: "shuaib@gmail.com", age: 25 }, { name: 'Adil ali', email: "adil@gmail.com", age: 22 }];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await Student.bulkCreate(studentData);

    return res
      .status(200)
      .json({ message: 'Database seeded with additional records!.' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error.' });
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
