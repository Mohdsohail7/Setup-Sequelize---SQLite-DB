const { sequelize } = require("../config/database");
const Student = require("../ps7.1-cw/models/students");

const studentData = [
    {
      name: 'Anjali Gupta'
    },
    {
      name: 'Neha Bansal'
    },
  ];
  
  const seedDatabase = async () => {
    try {
      await sequelize.sync({ force: true });
  
      // Seed Students with ClassroomId
      await Student.bulkCreate(studentData);
  
      console.log('Database seeded with Student data!');
    } catch (error) {
      console.error('Error Seeding the Data:', error.message);
    }
  };
  
  // Execute seeding function
  seedDatabase();