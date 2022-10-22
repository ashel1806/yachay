const { User } = require('../models');

const createUser = async (credentials) => {
  try {
    const user = await User.create(credentials);

    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = { createUser };
