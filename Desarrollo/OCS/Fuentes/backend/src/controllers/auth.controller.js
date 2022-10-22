const { createUser } = require('../services/auth.service');
const { asyncHandler } = require('../middlewares');

// eslint-disable-next-line no-unused-vars
const register = asyncHandler(async (req, res, next) => {
  const user = await createUser(req.body);

  return res.status(201).json({
    status: 'ok',
    data: user,
  });
});

module.exports = { register };
