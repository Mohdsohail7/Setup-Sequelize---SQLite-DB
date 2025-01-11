const express = require('express');
const Student = require('./models/students');
const { sequelize } = require('../config/database');
const Classroom = require('./models/classroom');
const Teacher = require('./models/teacher');
const data = require("../data.json");

const app = express();

app.use(express.json());


app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });

    // seed teacher
    await Teacher.bulkCreate(data.teachers);

    // seed multiple classroom
    await Classroom.bulkCreate(data.classrooms);

    // multiple student added in different classroom
    await Student.bulkCreate(data.studentData);

    return res
      .status(200)
      .json({ message: 'Database seeded with Teacher, Classroom, and Student data!'});
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
