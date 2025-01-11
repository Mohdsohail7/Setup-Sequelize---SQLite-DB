const express = require('express');
const Student = require('./models/students');
const { sequelize } = require('../config/database');
const Classroom = require('./models/classroom');

const app = express();

app.use(express.json());

let classrooms = [
  { name: 'Mathematics' },
  { name: 'Physics' },
  { name: 'Chemistry' },
];

let studentData = [
  {
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    age: 21,
    ClassroomId: 1,
  },
  {
    name: 'Priya Singh',
    email: 'priya.singh@example.com',
    age: 22,
    ClassroomId: 2,
  },
  {
    name: 'Amit Verma',
    email: 'amit.verma@example.com',
    age: 20,
    ClassroomId: 1,
  },
  {
    name: 'Sonal Kaur',
    email: 'sonal.kaur@example.com',
    age: 19,
    ClassroomId: 3,
  },
];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    // create classroom 
    // let classroom = await Classroom.create({
    //   name: "Mathematics"
    // });

    // // single student add in classroom
    // let student = await Student.create({
    //   name: "Heena sayyed",
    //   email: "heena@gmail.com",
    //   age: 26,
    //   classroomId: classroom.id
    // });

    // seed multiple classroom
    await Classroom.bulkCreate(classrooms);

    // multiple student added in different classroom
    await Student.bulkCreate(studentData);

    return res
      .status(200)
      .json({ message: 'Database seeded multiple records with foreign key relationship!.'});
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
