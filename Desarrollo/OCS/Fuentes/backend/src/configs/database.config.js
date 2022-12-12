const { Sequelize } = require('sequelize');

const projectDirectory = process.cwd();
const envFilePath = `${projectDirectory}/.env.${process.env.NODE_ENV}`;

require('dotenv').config({ path: envFilePath });

const { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT } =
  process.env;

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  ssl: process.env.NODE_ENV === 'production',
  dialect: 'mysql',
});

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
