const { sequelize } = require('../configs/database.config');
const User = require('./User');

sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  User,
};
