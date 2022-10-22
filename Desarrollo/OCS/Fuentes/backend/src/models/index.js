const { sequelize } = require('../configs/database.config');
const User = require('./User');

sequelize.sync({ force: true }).then(() => {
  console.log('Databases dropped & tables created!');
});

module.exports = {
  User,
};
