const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'mysql://yachay-admin:yachay-password@database:3306/onlycourses'
);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
  } catch (err) {
    console.log('Error connecting to database:', err);
    return process.exit(1);
  }

  return null;
};

module.exports = { connectToDatabase, sequelize };
