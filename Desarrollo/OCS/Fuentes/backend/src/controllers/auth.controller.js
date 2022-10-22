const { createUser } = require('../services/auth.service');

const getHealthyCheck = (req, res) => {
  res.send('hi from login!');
};

const register = async (req, res) => {
  try {
    const user = await createUser(req.body);
    // console.log(req);
    return res.status(201).json({
      status: 'ok',
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'fail',
      info: err,
    });
  }
};

module.exports = { register, getHealthyCheck };
