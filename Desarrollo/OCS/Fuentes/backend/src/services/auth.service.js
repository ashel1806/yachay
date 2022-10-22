const { User } = require('../models');

const createUser = async (credentials) => {
  try {
    console.log('credential', credentials);
    const user = await User.create(credentials);
    return user;
  } catch (err) {
    return err;
  }
};

module.exports = { createUser };
