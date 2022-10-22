const express = require('express');
require('dotenv').config();

const { connectToDatabase } = require('./src/configs/database.config');

const { authRoute } = require('./src/routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/auth', authRoute);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
